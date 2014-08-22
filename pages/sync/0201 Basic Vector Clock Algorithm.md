---
layout: page
group: sync
level: 1
title: 2.1 Basic Vector Clock Algorithm
---

The SData synchronization protocol is based on “vector clock” synchronization
([http://en.wikipedia.org/wiki/Vector_clock](http://en.wikipedia.org/wiki/Vector_clock)),
a well know technique used by several synchronization/replication systems: P2P
networks, replicated file systems, Microsoft Sync Framework, etc.

Vector clocks provide an elegant solution to the problem of maintaining
several copies of a given resource in sync and detecting conflicts. Let us
assume that a given resource&nbsp;R is replicated on several nodes N1, N2..., the
vector clocks are constructed as follows:

*   Every node maintains a “logical clock”: C1 on N1, C2 on N2, etc.

*   Every node increments its own clock tick when&nbsp;R is modified.

*   A vector clock for&nbsp;R is a list of pairs (N1 T1), (N2 T2), ... where T1 is the
C1 tick when&nbsp;R was last modified on N1, T2 is the C2 tick when&nbsp;R was last
modified on N2, etc. If&nbsp;R was never modified on Ni, its vector clock does not
contain any pair for Ni.

R&nbsp;may have different vector clocks at different nodes. The goal of the
synchronization system is to bring&nbsp;R in sync across nodes. When&nbsp;R is fully
synchronized, its vector clock is the same on all nodes.

By comparing the vectors clocks of&nbsp;R on two nodes, the synchronization
algorithm can decide if the versions can be brought in sync (and how) or if
there is a conflict. The following table explains how this comparison works (VRj
stands for the vector clock of&nbsp;R at node j):

<table class="content" column-widths=";160">
<colgroup><col>
<col width="160">
<col>
<col>
</colgroup><tbody>

<tr>

<th>

**Case**

</th>
<th>

**Example**

</th>
<th>

**State**

</th>
<th>

**Action**

</th>

</tr>

<tr>

<td>

VR1 = VR2

</td>
<td>

VR1=(N1 5)(N2 7)(N3 8)

VR2=(N1 5)(N2 7)(N3 8)

</td>
<td>

N1 and N2 have the same version of R.

</td>
<td>

None

</td>

</tr>

<tr>

<td>

VR1 &lt; VR2

</td>
<td>

VR1=(N1 5)(N2 7)(N3 8)

VR2=(N1 5)(N2 8)(N3 8)

</td>
<td>

N1's version of&nbsp;R is an ancestor of N2's version.

</td>
<td>

Replace N1's version of&nbsp;R by N2's version

</td>

</tr>

<tr>

<td>

VR1 &gt; VR2

</td>
<td>

VR1=(N1 6)(N2 7)(N3 9)

VR2=(N1 5)(N2 7)(N3 8)

</td>
<td>

N2's version of&nbsp;R is an ancestor of N1's version.

</td>
<td>

Replace N2's version of&nbsp;R by N1's version

</td>

</tr>

<tr>

<td>

Not comparable

</td>
<td>

VR1=(N1 6)(N2 7)(N3 9)

VR2=(N1 5)(N2 8)(N3 8)

</td>
<td>

N1 and N2 have a common ancestor&nbsp;

but are on different branches

</td>
<td>

Conflict.&nbsp;

We need an arbitrary rule to decide which side wins.

</td>

</tr>

</tbody>
</table>

This synchronization scheme has interesting properties:

*   It is a distributed algorithm. Every node manages its own clock and its own
synchronization metadata (the vector clocks of its resources). Any pair of nodes
can synchronize with each other without having to contact other nodes. There is
no need for a central coordinator.

*   It does not constrain the topology. synchronization can be performed across
arbitrary subsets (usually pairs) of nodes. Of course, who can do the most can
do the least, so “star” topologies are supported but more complex topologies are
supported as well.

*   It achieves “eventual consistency”. If the conflict handling rule is
consistent throughout the system, all nodes will reach the same state if we stop
modifying the data and we run enough synchronization passes (“enough” depends on
the topology).

*   It is robust. If a node is restored to a previous state, it will not disturb
the synchronization process and it will catch up with the other nodes (actually,
if the node had been synchronized after the restore point, changes that occurred
between the restore point and the last synchronization will be recovered when we
synchronize after restoring the node). Of course this assumes that the
synchronization metadata (the vector clocks) are backed up together with the
data.

* * *