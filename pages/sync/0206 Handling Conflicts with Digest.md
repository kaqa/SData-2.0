---
layout: page
group: sync
level: 1
title: 2.6 Handling Conflicts with Digest
---

Conflict detection is slightly more complex than in the original algorithm
(see 1.1) because the individual resources do not hold a complete vector clock,
they only hold one triplet&nbsp;(node id, tick, stamp) describing their last
modification. But conflicts can still be detected reliably because we have 4
pieces of information at hand when we synchronize a resource: the (Nj, Tj, Sj)
triplets of the resource on both sides but also the vector clocks of the
collections (the digests) on both sides. Conflict detection works as follows:

1.  First, we compare the triplets of the resources on both sides. If they carry
the same node id, there is no conflict and the resource that has the highest
tick is the most recent.

1.  If the resource triplets have different node ids, we compare the resource
triplet on one side with the digest on the other side. If the tick attached to
the resource is strictly less than the corresponding tick in the other side's
digest, there is no conflict and the digest side has the latest version.
Otherwise we cannot decide yet.

1.  If the previous test did not succeed, we do the same test in the other
direction (we compare the other resource with the other digest). Again, if the
tick attached to the resource is strictly less than the corresponding tick in
the digest, there is no conflict and the digest side has the latest version.

1.  If the previous tests failed, there is a conflict.

Let us demonstrate how this algorithm works on some examples (synchronizing
from N1 to N2 -- the timestamps have been dropped from the resource triplets
because they only intervene to solve conflicts when priorities are equal):

<table class="content">
<tbody>

<tr>

<th rowspan="2">

**Case**

</th>
<th colspan="2">

**N1**

</th>
<th colspan="2">

**N2**

</th>
<th rowspan="2">

**Result**

</th>
<th rowspan="2">

**Comments**

</th>

</tr>

<tr>

<th>

**Resource**

</th>
<th>

**Digest**

</th>
<th>

**Resource**

</th>
<th>

**Digest**

</th>

</tr>

<tr>

<td>

a

</td>
<td>

**(N1 5)**

</td>
<td>

(N1 6 1)(N2 7 2)

(N3 9 3)

</td>
<td>

**(N1 4)**

</td>
<td>

(N1 5 1)(N2 8 2)

(N3 8 3)

</td>
<td>

No conflict

N1 is more recent

</td>
<td valign="top">

Case 1: The pairs have the same node id.

</td>

</tr>

<tr>

<td>

b

</td>
<td>

(N1 5)

</td>
<td>

(N1 6 1)

**(N2 7 2)

**(N3 9 3)

</td>
<td>

**(N2 6)**

</td>
<td>

(N1 5 1)

(N2 8 2)

(N3 8 3)

</td>
<td>

No conflict

N1 is more recent

</td>
<td>

Case 2 or 3 (depending on how we start):&nbsp;

pair on N2 side is strictly less than corresponding pair in digest on N1 side.

</td>

</tr>

<tr>

<td>

c

</td>
<td>

**(N1 5)**

</td>
<td>

(N1 6 1)

**(N2 7 2)

**(N3 9 3)

</td>
<td>

**(N2 7)**

</td>
<td>

**(N1 5 1)

**(N2 8 2)

(N3 8 3)

</td>
<td>

Conflict

N1 wins because its conflict priority (1) is less than N2 (2).

</td>
<td valign="top">

Case 4: both cross comparisons between pair and digest failed.

</td>

</tr>

<tr>

<td>

d

</td>
<td>

(N1 5)

</td>
<td>

(N1 6 1)

(N2 7 2)

**(N3 9 3)**

</td>
<td>

**(N3 7)**

</td>
<td>

(N1 5 1)

(N2 8 2)

(N3 8 3)

</td>
<td>

No conflict

N1 is more recent

</td>
<td>

Case 2 or 3: pair on N2 side is strictly less than corresponding pair in
digest on N1 side.

</td>

</tr>

<tr>

<td>

e

</td>
<td>

**(N3 8)**

</td>
<td>

(N1 6 1)

**(N2 7 2)

**(N3 9 3)

</td>
<td>

**(N2 7)**

</td>
<td>

(N1 5 1)

(N2 8 2)

**(N3 8 3)**

</td>
<td>

Conflict

N1 wins because its conflict priority (1) is less than N3 (3)

</td>
<td valign="top">

Case 4: both cross comparisons between pair and digest failed.

</td>

</tr>

</tbody>
</table>

This table only demonstrates how conflicts are detected, it does not explain
“why” the algorithm works (but it works!). A formal proof is beyond the scope of
this document, but we can give scenarios that would lead to the cases above and
that justify the results given in the table:

> a) The resource was modified on N1 at tick 4 and then synchronized to N2.
> Later the resource was modified on N1 at tick 5 but we know that it has not been
> modified on N2 because it is still tagged with (N1 4) on the N2 side. So there
> is no conflict and the N1 version 5 needs to be propagated to N2.
> 
> b) The resource was modified on N2 at tick 6. This modification has been
> propagated to N1 (we know this because N1's digest contains (N2 7 2)).
> Afterwards, the resource has been modified on N1 at tick 5. So there is no
> conflict and the N1 version 5 needs to be propagated to N2.
> 
> c) The resource was modified on N1 at tick 5. This change has not been
> propagated to N2 before because N2's digest contains (N1 5 1). Similarly, the
> resource was modified on N2 at tick 7 and this change has not been propagated to
> N1 because N1's digest contains (N2 7 2). So there is a conflict because the two
> changes have been done independently.
> 
> d) The resource was modified on N3 at version 7 and then synchronized to N2
> and N1 (we do not know in which order nor through which path but we know that
> this synchronization happened because of the digest entries for N3). The
> resource was then modified on N1 at tick 5. There is no conflict and N1's
> version is more recent because we know that version (N3 7) had been propagated
> to N1 before.
> 
> e) The resource was modified on N3 at version 8. This change has been
> propagated to N1 but not to N2 (we know this from N3's tick in the two digests).
> The resource was also modified on N2 at version 7 and this change has not been
> propagated to N1 (we know this because N1's digest contains (N2 7 2)). So there
> is conflict because the resource has been modified independently on two nodes
> (N3 and N2).

* * *