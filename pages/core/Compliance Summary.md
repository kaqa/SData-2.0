---
layout: page
group: core
level: 0
title: Compliance Summary
---

The following table summaries the compliance levels for SData providers:

<table class="content" print-width="100%">
<tbody>

<tr>

<th>

Feature

</th>
<th>

Compliance

</th>
<th>

Comments

</th>

</tr>

<tr>

<td valign="top">[Collection URL](2.1 Resource Collection URL "2.1  Resource Collection URL")</td>
<td valign="top">

MUST

</td>
<td>

There is a tolerance on the /sdata segment, which applies to all sdata URLs.

See [Collection URL](2.1 Resource Collection URL "2.1  Resource Collection URL") section.

</td>

</tr>

<tr>

<td valign="top">

[Resource URL](2.2 Single Resource URL "2.2  Single Resource URL")

</td>
<td valign="top">

MUST/SHOULD

</td>
<td>

Selector with resource ID MUST be supported.

Selector with predicate SHOULD be supported.

</td>

</tr>

<tr>

<td valign="top">

[Property URL](2.3 Resource Property URL "2.3 Resource Property URL")

</td>
<td valign="top">

SHOULD

</td>
<td></td>

</tr>

<tr>

<td valign="top">

[Service Operation URL](2.3 Resource Property URL "2.3 Resource Property URL")

</td>
<td valign="top">

MAY

</td>
<td></td>

</tr>

<tr>

<td valign="top">

[Named Query URL](2.5 Named Query URL "2.5 Named Query URL")

</td>
<td valign="top">

MAY

</td>
<td></td>

</tr>

<tr>

<td valign="top">

[Template URL](2.6 Template Resource URL "2.6 Template Resource URL")

</td>
<td valign="top">

MUST/MAY

</td>
<td>

Template URL MUST be supported on resource kind flagged with
<tt>sme:canPost</tt>. 

Template URL MAY be supported on service operations and named queries.

</td>

</tr>

<tr>

<td valign="top">

[Schema URL](2.7 Resource Schema URL "2.7  Resource Schema URL")

</td>
<td valign="top">

MUST

</td>
<td></td>

</tr>

<tr>

<td valign="top">

[System URL](2.8 System and Registry URL "2.8  System and Registry URL")

</td>
<td valign="top">

MAY

</td>
<td></td>

</tr>

<tr>

<td valign="top">

[Intermediate URL](2.9 Intermediate URLs "2.9 Intermediate URLs")

</td>
<td valign="top">

SHOULD

</td>
<td></td>

</tr>

<tr>

<td valign="top">

[Query Parameters](2.11 Query Parameters "2.11  Query Parameters")

</td>
<td valign="top">

MUST/SHOULD/MAY

</td>
<td>

*   MUST: <tt>startIndex</tt>, <tt>count</tt>, <tt>where</tt>,
<tt>orderBy</tt>, <tt>include</tt>, <tt>precedence</tt>, <tt>select</tt>.
*   SHOULD: <tt>format</tt>, <tt>language</tt>.
*   MAY: <tt>search</tt>, <tt>includeSchema</tt>, <tt>returnDelta</tt>,
<tt>trackingID</tt>, <tt>version</tt>.

</td>

</tr>

<tr>

<td valign="top">

[Query Language](2.12 Query Language "2.12  Query Language")

</td>
<td valign="top">

MUST/MAY

</td>
<td>

Basic level MUST be supported.

Other levels MAY be supported.

</td>

</tr>

<tr>

<td valign="top">

[Naming Conventions](2.13 Naming Conventions for URLs "2.13 Naming Conventions for URLs")

</td>
<td valign="top">

MUST

</td>
<td></td>

</tr>

<tr>

<td valign="top">

[Resource Versioning](2.14 Resource Versioning "2.14 Resource Versioning")

</td>
<td valign="top">

MAY

</td>
<td></td>

</tr>

<tr>

<td valign="top">

[Extensibility](2.15 Extensibility "2.15 Extensibility")

</td>
<td valign="top">

SHOULD

</td>
<td></td>

</tr>

<tr>

<td valign="top">

[Internationalized URLs](2.16 Internationalized URLs "2.16 Internationalized URLs")

</td>
<td valign="top">

MUST

</td>
<td></td>

</tr>

<tr>

<td valign="top">

[Atom feed](3.1 Typical Feed "3.1 Typical Feed")

</td>
<td valign="top">

MUST

</td>
<td>

Compliance for feed elements:

*   MUST: <tt>id</tt>, <tt>title</tt>, <tt>updated</tt>, <tt>link</tt>
(<tt>self</tt>, <tt>schema</tt>).
*   SHOULD: <tt>author</tt>, <tt>category</tt>.
*   MAY: <tt>link</tt> (<tt>service</tt>, <tt>queries</tt>), SLE extensions.

Paging links are a MUST if paging is supported.

Post and template links are a MUST if POST is supported.

<tt>totalResults</tt>, <tt>startIndex </tt>and <tt>itemsPerPage </tt>are a
MUST if indexed paging is supported.

</td>

</tr>

<tr>

<td valign="top">

[Atom entry](3.7 Typical Feed Entry "3.7  Typical Feed Entry")

</td>
<td valign="top">

MUST

</td>
<td>

Compliance for entry elements:

*   MUST: <tt>id</tt>, <tt>title</tt>, <tt>updated</tt>, <tt>self</tt>
<tt>link</tt>, <tt>schema</tt> <tt><tt>link</tt></tt> (if not inside feed),
<tt>sdata:payload</tt>.
*   SHOULD: <tt>author</tt> (if not inside a feed), <tt>category</tt>,
<tt>content</tt>.
*   MAY: <tt>link</tt> (<tt>edit</tt>, <tt>service</tt>, <tt>queries</tt>),
http:etag (MUST if <tt>sme:supportsETag</tt> is true), <tt>http</tt> elements
(MUST for batch).

Post and template links are a MUST if POST is supported and entry is not
inside a feed.

</td>

</tr>

<tr>

<td valign="top">

[SData payload](3.8 Resource Payload "3.8  Resource Payload")

</td>
<td valign="top">

MUST

</td>
<td>

Compliance for SData attributes:

*   SHOULD: <tt>key</tt>, <tt>url</tt>.
*   MAY: <tt>uuid</tt> (MUST if sme:hasUuid is true), <tt>lookup</tt>,
<tt>descriptor</tt>, <tt>deleteMissing</tt>.

Null values MUST be flagged with <tt>xsi:nil="true"</tt>.

</td>

</tr>

<tr>

<td valign="top">

[Resource linking and embedding](3.9 Resource Linking and Embedding "3.9 Resource Linking and Embedding")

</td>
<td valign="top">

MUST

</td>
<td></td>

</tr>

<tr>

<td valign="top">

[Error payload](3.10 Error Payload "3.10  Error Payload")

</td>
<td valign="top">

MUST

</td>
<td valign="top"></td>

</tr>

<tr>

<td valign="top">

[Tracking payload](3.11 Tracking Payload "3.11 Tracking Payload")

</td>
<td valign="top">

MAY

</td>
<td valign="top">

Asynchronous operations MUST use the tracking payload.

</td>

</tr>

<tr>

<td valign="top">

[Localized feeds and entries](3.14 Localization "3.14 Localization")

</td>
<td valign="top">

SHOULD

</td>
<td valign="top"></td>

</tr>

<tr>

<td valign="top">

[Schema](4.1 Typical SData Schema "4.1 Typical SData Schema")

</td>
<td valign="top">

MUST

</td>
<td valign="top">

Compliance for schema attributes:

*   MUST: <tt>name</tt>, <tt>type</tt>, <tt>sme:role</tt>,
<tt>sme:pluralName</tt>, <tt>sme:relationship</tt> (if <tt>relationship</tt>
property).

*   MUST (if true): <tt>nillable</tt>, <tt>sme:canGet/Post/Put/Delete</tt>,
<tt>sme:canPageXxx</tt>, <tt>sme:hasUuid</tt>, <tt>sme:supportsETag</tt>,
<tt>sme:isMandatory</tt>, <tt>sme:isReadOnly</tt>, <tt>sme:isCollection</tt>.

*   SHOULD: <tt>minOccurs</tt>, <tt>sme:label</tt>, <tt>sme:precedence</tt>.

*   SHOULD (if true): <tt>sme:hasTemplate</tt>, <tt>sme:unsupported</tt>,
<tt>sme:canSearch/Sort/Filter,Group</tt>, <tt>sme:isUniqueKey</tt>,
<tt>sme:isLocalized</tt>.

*   MAY: <tt>sme:path</tt>, <tt>sme:groupName</tt>, <tt>sme:batchingMode</tt>
(MUST if batching), <tt>sme:invocationMode</tt> (MUST if service operation or
named query), <tt>sme:syncXxx</tt> (MUST if synchronizable)

</td>

</tr>

<tr>

<td valign="top">

[Schema Structure](4.9 Schema Rules "4.9 Schema Rules")

</td>
<td valign="top">

MUST

</td>
<td valign="top"></td>

</tr>

<tr>

<td valign="top">

[Service operation and named query definitions](4.5 Service Operation and Named Query Definitions "4.5 Service Operation and Named Query Definitions")

</td>
<td valign="top">

MAY

</td>
<td valign="top">

MUST use SData structure if present.

</td>

</tr>

<tr>

<td valign="top">

[Auxiliary type definitions](4.6 Auxiliary Type Definitions "4.6 Auxiliary Type Definitions")

</td>
<td valign="top">

MAY

</td>
<td valign="top"></td>

</tr>

<tr>

<td valign="top">

[Inlined Schemas](4.10 Inlined Schemas "4.10 Inlined Schemas")

</td>
<td valign="top">

MAY

</td>
<td valign="top"></td>

</tr>

<tr>

<td valign="top">

[Imported Schemas](4.11 Importing and including schemas "4.11 Importing and including schemas")

</td>
<td valign="top">

MAY

</td>
<td valign="top"></td>

</tr>

<tr>

<td valign="top">

[HTTPS Encryption](5.1 Encryption "5.1 Encryption")

</td>
<td valign="top">

SHOULD

</td>
<td valign="top"></td>

</tr>

<tr>

<td valign="top">

[HTTP Authentication](5.2 Authentication "5.2 Authentication")

</td>
<td valign="top">

SHOULD, unless more secure option

</td>
<td valign="top">

Basic mode SHOULD NOT be used over HTTP connections, only over HTTPS.

Digest mode MAY be used over HTTP

</td>

</tr>

<tr>

<td valign="top">

[Sage SSO](5.3 Single Sign-On "5.3 Single Sign-On")

</td>
<td valign="top">

SHOULD

</td>
<td valign="top">

When available

</td>

</tr>

<tr>

<td valign="top">

[Query](6.1 Query Example "6.1 Query Example")/[Read ](7.1 Read Example "7.1 Read Example")operation

</td>
<td valign="top">

MUST (if sme:canGet is true)

</td>
<td valign="top"></td>

</tr>

<tr>

<td valign="top">

[Query Filtering](6.2 Query Filtering "6.2 Query Filtering")

</td>
<td valign="top">

MUST (with sme:canFilter properties)

</td>
<td valign="top">

Basic query language MUST be supported.

Extended query language MAY be supported.

</td>

</tr>

<tr>

<td valign="top">

[Query Sorting](6.2 Query Filtering "6.2 Query Filtering")

</td>
<td valign="top">

MUST (with sme:canSort properties)

</td>
<td valign="top">

Multiple criteria SHOULD be supported.

</td>

</tr>

<tr>

<td valign="top">

[Query Paging](6.4 Query Paging "6.4 Query Paging")

</td>
<td valign="top">

MUST

</td>
<td valign="top">

Forwards paging MUST be supported (unless collection is guaranteed to always
be small).

Backwards and indexed paging SHOULD be supported.

</td>

</tr>

<tr>

<td valign="top">

[Query](6.5 Query Payload Control "6.5 Query Payload Control")[/](6.5 Query Payload Control "6.5 Query Payload Control")[Read
](7.2 Read Payload Control "7.2 Read Payload Control")[Payload Control](6.5 Query Payload Control "6.5 Query Payload Control")

</td>
<td valign="top">

MUST

</td>
<td valign="top"></td>

</tr>

<tr>

<td valign="top">

[Query](6.6 Query Caching "6.6 Query Caching")[/Read Caching](6.6 Query Caching "6.6 Query Caching")

</td>
<td valign="top">

MAY

</td>
<td valign="top"></td>

</tr>

<tr>

<td valign="top">

[Query/Read on Property URL](6.8 Query on Property URL "6.8 Query on Property URL")

</td>
<td valign="top">

SHOULD

</td>
<td valign="top">

MUST when property element is flagged with <tt>sme:canGet</tt>.

</td>

</tr>

<tr>

<td valign="top">

[Query on Intermediate URL](6.9 Query on Intermediate URL "6.9 Query on Intermediate URL")

</td>
<td valign="top">

SHOULD

</td>
<td valign="top"></td>

</tr>

<tr>

<td valign="top">

[Error Handling](6.10 Query Error Handling "6.10 Query Error Handling") (all operations)

</td>
<td valign="top">

MUST

</td>
<td valign="top"></td>

</tr>

<tr>

<td valign="top">

[Create operation](8.1 Create Example "8.1 Create Example")

</td>
<td valign="top">

MUST (if sme:canPost is true)

</td>
<td valign="top"></td>

</tr>

<tr>

<td valign="top">

[Template for create](8.2 Use of $template URL "8.2 Use of $template URL")

</td>
<td valign="top">

MUST (if sme:canPost is true)

</td>
<td valign="top"></td>

</tr>

<tr>

<td valign="top">

[Create on Property URL](8.3 Create on Property URL "8.3 Create on Property URL")

</td>
<td valign="top">

MAY

</td>
<td valign="top">

MUST when property element is flagged with <tt>sme:canPost</tt>.

</td>

</tr>

<tr>

<td valign="top">

[Reliable Posting](8.4 Reliable Posting "8.4 Reliable Posting")

</td>
<td valign="top">

MAY

</td>
<td valign="top"></td>

</tr>

<tr>

<td valign="top">

[Update operation](9.1 Update Example "9.1 Update Example")

</td>
<td valign="top">

MUST (if sme:canPut is true)

</td>
<td valign="top"></td>

</tr>

<tr>

<td valign="top">

[Partial update](9.2 Update Payloads "9.2 Update Payloads")

</td>
<td valign="top">

MUST (on all properties with maxOccurs = 0)

</td>
<td valign="top"></td>

</tr>

<tr>

<td valign="top">

[Update of child resources](9.2 Update Payloads "9.2 Update Payloads")

</td>
<td valign="top">

MUST

</td>
<td valign="top">

Limited to properties marked with <tt>sme:relationship="child"</tt>

</td>

</tr>

<tr>

<td valign="top">

[Partial return](9.2 Update Payloads "9.2 Update Payloads")

</td>
<td valign="top">

MAY

</td>
<td valign="top">

.

</td>

</tr>

<tr>

<td valign="top">

[Update on property URL](9.4 Update on Property URL "9.4 Update on Property URL")

</td>
<td valign="top">

MAY

</td>
<td valign="top">

MUST when property element is flagged with <tt>sme:canPut</tt>.

</td>

</tr>

<tr>

<td valign="top">

[Delete operation](10.1 Delete Example "10.1 Delete Example")

</td>
<td valign="top">

MUST (if sme:canDelete is true)

</td>
<td valign="top"></td>

</tr>

<tr>

<td valign="top">

[Delete Concurrency control with ETag](10.2 Delete Concurrency Handling "10.2 Delete Concurrency Handling")

</td>
<td valign="top">

MAY

</td>
<td valign="top">

MUST on resource kinds flagged with <tt>sme:supportsETag</tt>.

</td>

</tr>

<tr>

<td valign="top">

[Delete on Property URL](10.3 Delete on Property URL "10.3 Delete on Property URL")

</td>
<td valign="top">

MAY

</td>
<td valign="top">

MUST when property element is flagged with <tt>sme:canDelete</tt>.

</td>

</tr>

<tr>

<td valign="top">

[X-HTTP-Method-Override](9.1 Update Example "9.1 Update Example")

</td>
<td valign="top">

SHOULD

</td>
<td valign="top"></td>

</tr>

<tr>

<td valign="top">

[Service Operations](11.1 Overview of Service Operations "11.1 Overview of Service Operations") and
[Named Queries](12.1 Example of Named Query "12.1 Example of Named Query")

</td>
<td valign="top">

MAY

</td>
<td valign="top">

MUST follow the SData specifications if used.

</td>

</tr>

<tr>

<td valign="top">

[Batch Operations](13 Batch Operations "13 Batch Operations")

</td>
<td valign="top">

MAY

</td>
<td valign="top">

MUST follow the SData specifications if used (resource kind marked with
<tt>sme:batchingMode</tt>).

</td>

</tr>

<tr>

<td valign="top">

[Registry](14 SData Registry "14 SData Registry")

</td>
<td valign="top">

MAY

</td>
<td valign="top">

MUST comply with the SData registry contract if supported.

</td>

</tr>

</tbody>
</table>

* * *