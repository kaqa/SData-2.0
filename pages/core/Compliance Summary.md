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

<p>Feature</p>

</th>
<th>

<p>Compliance</p>

</th>
<th>

<p>Comments</p>

</th>

</tr>

<tr>

<td valign="top"><a title="2.1  Resource Collection URL" href="/daisy/sdata/AnatomyOfAnSDataURL/ResourceCollectionURL.html">Collection URL</a></td>
<td valign="top">

<p>MUST</p>

</td>
<td>

<p>There is a tolerance on the /sdata segment, which applies to all sdata URLs.
<br>
See <a title="2.1  Resource Collection URL" href="/daisy/sdata/AnatomyOfAnSDataURL/ResourceCollectionURL.html">Collection URL</a> section.</p>

</td>

</tr>

<tr>

<td valign="top">

<p>
<a title="2.2  Single Resource URL" href="/daisy/sdata/AnatomyOfAnSDataURL/SingleResourceURL.html">Resource URL</a>
</p>

</td>
<td valign="top">

<p>MUST/SHOULD</p>

</td>
<td>

<p>Selector with resource ID MUST be supported.<br>
Selector with predicate SHOULD be supported.</p>

</td>

</tr>

<tr>

<td valign="top">

<p>
<a title="2.3 Resource Property URL" href="/daisy/sdata/AnatomyOfAnSDataURL/187-DSY.html">Property URL</a>
</p>

</td>
<td valign="top">

<p>SHOULD</p>

</td>
<td></td>

</tr>

<tr>

<td valign="top">

<p>
<a title="2.3 Resource Property URL" href="/daisy/sdata/AnatomyOfAnSDataURL/187-DSY.html">Service Operation URL</a>
</p>

</td>
<td valign="top">

<p>MAY</p>

</td>
<td></td>

</tr>

<tr>

<td valign="top">

<p>
<a title="2.5 Named Query URL" href="/daisy/sdata/AnatomyOfAnSDataURL/597-DSY.html">Named Query URL</a>
</p>

</td>
<td valign="top">

<p>MAY</p>

</td>
<td></td>

</tr>

<tr>

<td valign="top">

<p>
<a title="2.6 Template Resource URL" href="/daisy/sdata/AnatomyOfAnSDataURL/TemplateResourceURL.html">Template URL</a>
</p>

</td>
<td valign="top">

<p>MUST/MAY</p>

</td>
<td>

<p>Template URL MUST be supported on resource kind flagged with
<tt>sme:canPost</tt>. <br>
Template URL MAY be supported on service operations and named queries.</p>

</td>

</tr>

<tr>

<td valign="top">

<p>
<a title="2.7  Resource Schema URL" href="/daisy/sdata/AnatomyOfAnSDataURL/ResourceSchemaURL.html">Schema URL</a>
</p>

</td>
<td valign="top">

<p>MUST</p>

</td>
<td></td>

</tr>

<tr>

<td valign="top">

<p>
<a title="2.8  System and Registry URL" href="/daisy/sdata/AnatomyOfAnSDataURL/SystemURL.html">System URL</a>
</p>

</td>
<td valign="top">

<p>MAY</p>

</td>
<td></td>

</tr>

<tr>

<td valign="top">

<p>
<a title="2.9 Intermediate URLs" href="/daisy/sdata/AnatomyOfAnSDataURL/211-DSY.html">Intermediate URL</a>
</p>

</td>
<td valign="top">

<p>SHOULD</p>

</td>
<td></td>

</tr>

<tr>

<td valign="top">

<p>
<a title="2.11  Query Parameters" href="/daisy/sdata/AnatomyOfAnSDataURL/QueryParameters.html">Query Parameters</a>
</p>

</td>
<td valign="top">

<p>MUST/SHOULD/MAY</p>

</td>
<td>

<ul>

<li>MUST: <tt>startIndex</tt>, <tt>count</tt>, <tt>where</tt>,
<tt>orderBy</tt>, <tt>include</tt>, <tt>precedence</tt>, <tt>select</tt>.</li>

<li>SHOULD: <tt>format</tt>, <tt>language</tt>.</li>

<li>MAY: <tt>search</tt>, <tt>includeSchema</tt>, <tt>returnDelta</tt>,
<tt>trackingID</tt>, <tt>version</tt>.</li>

</ul>

</td>

</tr>

<tr>

<td valign="top">

<p>
<a title="2.12  Query Language" href="/daisy/sdata/AnatomyOfAnSDataURL/QueryLanguage.html">Query Language</a>
</p>

</td>
<td valign="top">

<p>MUST/MAY</p>

</td>
<td>

<p>Basic level MUST be supported.<br>
Other levels MAY be supported.</p>

</td>

</tr>

<tr>

<td valign="top">

<p>
<a title="2.13 Naming Conventions for URLs" href="/daisy/sdata/AnatomyOfAnSDataURL/NamingConventionsForURLs.html">Naming Conventions</a>
</p>

</td>
<td valign="top">

<p>MUST</p>

</td>
<td></td>

</tr>

<tr>

<td valign="top">

<p>
<a title="2.14 Resource Versioning" href="/daisy/sdata/AnatomyOfAnSDataURL/204-DSY.html">Resource Versioning</a>
</p>

</td>
<td valign="top">

<p>MAY</p>

</td>
<td></td>

</tr>

<tr>

<td valign="top">

<p>
<a title="2.15 Extensibility" href="/daisy/sdata/AnatomyOfAnSDataURL/589-DSY.html">Extensibility</a>
</p>

</td>
<td valign="top">

<p>SHOULD</p>

</td>
<td></td>

</tr>

<tr>

<td valign="top">

<p>
<a title="2.16 Internationalized URLs" href="/daisy/sdata/AnatomyOfAnSDataURL/600-DSY.html">Internationalized URLs</a>
</p>

</td>
<td valign="top">

<p>MUST</p>

</td>
<td></td>

</tr>

<tr>

<td valign="top">

<p>
<a title="3.1 Typical Feed" href="/daisy/sdata/AnatomyOfAnSDataFeed/TypicalFeed.html">Atom feed</a>
</p>

</td>
<td valign="top">

<p>MUST</p>

</td>
<td>

<p>Compliance for feed elements:</p>


<ul>

<li>MUST: <tt>id</tt>, <tt>title</tt>, <tt>updated</tt>, <tt>link</tt>
(<tt>self</tt>, <tt>schema</tt>).</li>

<li>SHOULD: <tt>author</tt>, <tt>category</tt>.</li>

<li>MAY: <tt>link</tt> (<tt>service</tt>, <tt>queries</tt>), SLE extensions.
</li>

</ul>


<p>Paging links are a MUST if paging is supported.<br>
Post and template links are a MUST if POST is supported.</p>


<p>
<tt>totalResults</tt>, <tt>startIndex </tt>and <tt>itemsPerPage </tt>are a
MUST if indexed paging is supported.</p>

</td>

</tr>

<tr>

<td valign="top">

<p>
<a title="3.7  Typical Feed Entry" href="/daisy/sdata/AnatomyOfAnSDataFeed/TypicalFeedEntry.html">Atom entry</a>
</p>

</td>
<td valign="top">

<p>MUST</p>

</td>
<td>

<p>Compliance for entry elements:</p>


<ul>

<li>MUST: <tt>id</tt>, <tt>title</tt>, <tt>updated</tt>, <tt>self</tt>
<tt>link</tt>, <tt>schema</tt> <tt><tt>link</tt></tt> (if not inside feed),
<tt>sdata:payload</tt>.</li>

<li>SHOULD: <tt>author</tt> (if not inside a feed), <tt>category</tt>,
<tt>content</tt>.</li>

<li>MAY: <tt>link</tt> (<tt>edit</tt>, <tt>service</tt>, <tt>queries</tt>),
http:etag (MUST if <tt>sme:supportsETag</tt> is true), <tt>http</tt> elements
(MUST for batch).</li>

</ul>


<p>Post and template links are a MUST if POST is supported and entry is not
inside a feed.</p>

</td>

</tr>

<tr>

<td valign="top">

<p>
<a title="3.8  Resource Payload" href="/daisy/sdata/AnatomyOfAnSDataFeed/ResourcePayload.html">SData payload</a>
</p>

</td>
<td valign="top">

<p>MUST</p>

</td>
<td>

<p>Compliance for SData attributes:</p>


<ul>

<li>SHOULD: <tt>key</tt>, <tt>url</tt>.</li>

<li>MAY: <tt>uuid</tt> (MUST if sme:hasUuid is true), <tt>lookup</tt>,
<tt>descriptor</tt>, <tt>deleteMissing</tt>.</li>

</ul>


<p>Null values MUST be flagged with <tt>xsi:nil="true"</tt>.</p>

</td>

</tr>

<tr>

<td valign="top">

<p>
<a title="3.9 Resource Linking and Embedding" href="/daisy/sdata/AnatomyOfAnSDataFeed/190-DSY.html">Resource linking and embedding</a>
</p>

</td>
<td valign="top">

<p>MUST</p>

</td>
<td></td>

</tr>

<tr>

<td valign="top">

<p>
<a title="3.10  Error Payload" href="/daisy/sdata/AnatomyOfAnSDataFeed/ErrorPayload.html">Error payload</a>
</p>

</td>
<td valign="top">

<p>MUST</p>

</td>
<td valign="top"></td>

</tr>

<tr>

<td valign="top">

<p>
<a title="3.11 Tracking Payload" href="/daisy/sdata/AnatomyOfAnSDataFeed/TrackingPayload.html">Tracking payload</a>
</p>

</td>
<td valign="top">

<p>MAY</p>

</td>
<td valign="top">

<p>Asynchronous operations MUST use the tracking payload.</p>

</td>

</tr>

<tr>

<td valign="top">

<p>
<a title="3.14 Localization" href="/daisy/sdata/AnatomyOfAnSDataFeed/188-DSY.html">Localized feeds and entries</a>
</p>

</td>
<td valign="top">

<p>SHOULD</p>

</td>
<td valign="top"></td>

</tr>

<tr>

<td valign="top">

<p>
<a title="4.1 Typical SData Schema" href="/daisy/sdata/Metadata/TypicalSDataSchema.html">Schema</a>
</p>

</td>
<td valign="top">

<p>MUST</p>

</td>
<td valign="top">

<p>Compliance for schema attributes:</p>


<ul>

<li>MUST: <tt>name</tt>, <tt>type</tt>, <tt>sme:role</tt>,
<tt>sme:pluralName</tt>, <tt>sme:relationship</tt> (if <tt>relationship</tt>
property).</li>

</ul>


<ul>

<li>MUST (if true): <tt>nillable</tt>, <tt>sme:canGet/Post/Put/Delete</tt>,
<tt>sme:canPageXxx</tt>, <tt>sme:hasUuid</tt>, <tt>sme:supportsETag</tt>,
<tt>sme:isMandatory</tt>, <tt>sme:isReadOnly</tt>, <tt>sme:isCollection</tt>.
</li>

</ul>


<ul>

<li>SHOULD: <tt>minOccurs</tt>, <tt>sme:label</tt>, <tt>sme:precedence</tt>.
</li>

</ul>


<ul>

<li>SHOULD (if true): <tt>sme:hasTemplate</tt>, <tt>sme:unsupported</tt>,
<tt>sme:canSearch/Sort/Filter,Group</tt>, <tt>sme:isUniqueKey</tt>,
<tt>sme:isLocalized</tt>.</li>

</ul>


<ul>

<li>MAY: <tt>sme:path</tt>, <tt>sme:groupName</tt>, <tt>sme:batchingMode</tt>
(MUST if batching), <tt>sme:invocationMode</tt> (MUST if service operation or
named query), <tt>sme:syncXxx</tt> (MUST if synchronizable)</li>

</ul>

</td>

</tr>

<tr>

<td valign="top">

<p>
<a title="4.9 Schema Rules" href="/daisy/sdata/Metadata/XSDStructure.html">Schema Structure</a>
</p>

</td>
<td valign="top">

<p>MUST</p>

</td>
<td valign="top"></td>

</tr>

<tr>

<td valign="top">

<p>
<a title="4.5 Service Operation and Named Query Definitions" href="/daisy/sdata/Metadata/194-DSY.html">Service operation and named query definitions</a>
</p>

</td>
<td valign="top">

<p>MAY</p>

</td>
<td valign="top">

<p>MUST use SData structure if present.</p>

</td>

</tr>

<tr>

<td valign="top">

<p>
<a title="4.6 Auxiliary Type Definitions" href="/daisy/sdata/Metadata/195-DSY.html">Auxiliary type definitions</a>
</p>

</td>
<td valign="top">

<p>MAY</p>

</td>
<td valign="top"></td>

</tr>

<tr>

<td valign="top">

<p>
<a title="4.10 Inlined Schemas" href="/daisy/sdata/Metadata/203-DSY.html">Inlined Schemas</a>
</p>

</td>
<td valign="top">

<p>MAY</p>

</td>
<td valign="top"></td>

</tr>

<tr>

<td valign="top">

<p>
<a title="4.11 Importing and including schemas" href="/daisy/sdata/Metadata/599-DSY.html">Imported Schemas</a>
</p>

</td>
<td valign="top">

<p>MAY</p>

</td>
<td valign="top"></td>

</tr>

<tr>

<td valign="top">

<p>
<a title="5.1 Encryption" href="/daisy/sdata/Security/Encryption.html">HTTPS Encryption</a>
</p>

</td>
<td valign="top">

<p>SHOULD</p>

</td>
<td valign="top"></td>

</tr>

<tr>

<td valign="top">

<p>
<a title="5.2 Authentication" href="/daisy/sdata/Security/Authentication.html">HTTP Authentication</a>
</p>

</td>
<td valign="top">

<p>SHOULD, unless more secure option</p>

</td>
<td valign="top">

<p>Basic mode SHOULD NOT be used over HTTP connections, only over HTTPS.<br>
Digest mode MAY be used over HTTP</p>

</td>

</tr>

<tr>

<td valign="top">

<p>
<a title="5.3 Single Sign-On" href="/daisy/sdata/Security/424-DSY.html">Sage SSO</a>
</p>

</td>
<td valign="top">

<p>SHOULD</p>

</td>
<td valign="top">

<p>When available</p>

</td>

</tr>

<tr>

<td valign="top">

<p>
<a title="6.1 Query Example" href="/daisy/sdata/Queries/Example.html">Query</a>/<a title="7.1 Read Example" href="/daisy/sdata/ReadOperation/Example.html">Read </a>operation
</p>

</td>
<td valign="top">

<p>MUST (if sme:canGet is true)</p>

</td>
<td valign="top"></td>

</tr>

<tr>

<td valign="top">

<p>
<a title="6.2 Query Filtering" href="/daisy/sdata/Queries/Filtering.html">Query Filtering</a>
</p>

</td>
<td valign="top">

<p>MUST (with sme:canFilter properties)</p>

</td>
<td valign="top">

<p>Basic query language MUST be supported.<br>
Extended query language MAY be supported.</p>

</td>

</tr>

<tr>

<td valign="top">

<p>
<a title="6.2 Query Filtering" href="/daisy/sdata/Queries/Filtering.html">Query Sorting</a>
</p>

</td>
<td valign="top">

<p>MUST (with sme:canSort properties)</p>

</td>
<td valign="top">

<p>Multiple criteria SHOULD be supported.</p>

</td>

</tr>

<tr>

<td valign="top">

<p>
<a title="6.4 Query Paging" href="/daisy/sdata/Queries/Paging.html">Query Paging</a>
</p>

</td>
<td valign="top">

<p>MUST</p>

</td>
<td valign="top">

<p>Forwards paging MUST be supported (unless collection is guaranteed to always
be small).<br>
Backwards and indexed paging SHOULD be supported.</p>

</td>

</tr>

<tr>

<td valign="top">

<p>

<a title="6.5 Query Payload Control" href="/daisy/sdata/Queries/ControllingThePayload.html">Query</a><a title="6.5 Query Payload Control" href="/daisy/sdata/Queries/ControllingThePayload.html">/</a><a title="7.2 Read Payload Control" href="/daisy/sdata/ReadOperation/ControllingThePayload.html">Read
</a><a title="6.5 Query Payload Control" href="/daisy/sdata/Queries/ControllingThePayload.html">Payload Control</a>
</p>

</td>
<td valign="top">

<p>MUST</p>

</td>
<td valign="top"></td>

</tr>

<tr>

<td valign="top">

<p>
<a title="6.6 Query Caching" href="/daisy/sdata/Queries/Caching.html">Query</a><a title="6.6 Query Caching" href="/daisy/sdata/Queries/Caching.html">/Read Caching</a>
</p>

</td>
<td valign="top">

<p>MAY</p>

</td>
<td valign="top"></td>

</tr>

<tr>

<td valign="top">

<p>
<a title="6.8 Query on Property URL" href="/daisy/sdata/Queries/196-DSY.html">Query/Read on Property URL</a>
</p>

</td>
<td valign="top">

<p>SHOULD</p>

</td>
<td valign="top">

<p>MUST when property element is flagged with <tt>sme:canGet</tt>.</p>

</td>

</tr>

<tr>

<td valign="top">

<p>
<a title="6.9 Query on Intermediate URL" href="/daisy/sdata/Queries/221-DSY.html">Query on Intermediate URL</a>
</p>

</td>
<td valign="top">

<p>SHOULD</p>

</td>
<td valign="top"></td>

</tr>

<tr>

<td valign="top">

<p>
<a title="6.10 Query Error Handling" href="/daisy/sdata/Queries/ErrorHandling.html">Error Handling</a> (all operations)</p>

</td>
<td valign="top">

<p>MUST</p>

</td>
<td valign="top"></td>

</tr>

<tr>

<td valign="top">

<p>
<a title="8.1 Create Example" href="/daisy/sdata/CreateOperation/Example.html">Create operation</a>
</p>

</td>
<td valign="top">

<p>MUST (if sme:canPost is true)</p>

</td>
<td valign="top"></td>

</tr>

<tr>

<td valign="top">

<p>
<a title="8.2 Use of $template URL" href="/daisy/sdata/CreateOperation/UseOfTemplateURL.html">Template for create</a>
</p>

</td>
<td valign="top">

<p>MUST (if sme:canPost is true)</p>

</td>
<td valign="top"></td>

</tr>

<tr>

<td valign="top">

<p>
<a title="8.3 Create on Property URL" href="/daisy/sdata/CreateOperation/198-DSY.html">Create on Property URL</a>
</p>

</td>
<td valign="top">

<p>MAY</p>

</td>
<td valign="top">

<p>MUST when property element is flagged with <tt>sme:canPost</tt>.</p>

</td>

</tr>

<tr>

<td valign="top">

<p>
<a title="8.4 Reliable Posting" href="/daisy/sdata/CreateOperation/ReliablePosting.html">Reliable Posting</a>
</p>

</td>
<td valign="top">

<p>MAY</p>

</td>
<td valign="top"></td>

</tr>

<tr>

<td valign="top">

<p>
<a title="9.1 Update Example" href="/daisy/sdata/UpdateOperation/Example.html">Update operation</a>
</p>

</td>
<td valign="top">

<p>MUST (if sme:canPut is true)</p>

</td>
<td valign="top"></td>

</tr>

<tr>

<td valign="top">

<p>
<a title="9.2 Update Payloads" href="/daisy/sdata/UpdateOperation/199-DSY.html">Partial update</a>
</p>

</td>
<td valign="top">

<p>MUST (on all properties with maxOccurs = 0)</p>

</td>
<td valign="top"></td>

</tr>

<tr>

<td valign="top">

<p>
<a title="9.2 Update Payloads" href="/daisy/sdata/UpdateOperation/199-DSY.html">Update of child resources</a>
</p>

</td>
<td valign="top">

<p>MUST</p>

</td>
<td valign="top">

<p>Limited to properties marked with <tt>sme:relationship="child"</tt>
</p>

</td>

</tr>

<tr>

<td valign="top">

<p>
<a title="9.2 Update Payloads" href="/daisy/sdata/UpdateOperation/199-DSY.html">Partial return</a>
</p>

</td>
<td valign="top">

<p>MAY</p>

</td>
<td valign="top">

<p>.</p>

</td>

</tr>

<tr>

<td valign="top">

<p>
<a title="9.4 Update on Property URL" href="/daisy/sdata/UpdateOperation/200-DSY.html">Update on property URL</a>
</p>

</td>
<td valign="top">

<p>MAY</p>

</td>
<td valign="top">

<p>MUST when property element is flagged with <tt>sme:canPut</tt>.</p>

</td>

</tr>

<tr>

<td valign="top">

<p>
<a title="10.1 Delete Example" href="/daisy/sdata/DeleteOperation/Example.html">Delete operation</a>
</p>

</td>
<td valign="top">

<p>MUST (if sme:canDelete is true)</p>

</td>
<td valign="top"></td>

</tr>

<tr>

<td valign="top">

<p>
<a title="10.2 Delete Concurrency Handling" href="/daisy/sdata/DeleteOperation/ConcurrencyHandling.html">Delete Concurrency control with ETag</a>
</p>

</td>
<td valign="top">

<p>MAY</p>

</td>
<td valign="top">

<p>MUST on resource kinds flagged with <tt>sme:supportsETag</tt>.</p>

</td>

</tr>

<tr>

<td valign="top">

<p>
<a title="10.3 Delete on Property URL" href="/daisy/sdata/DeleteOperation/201-DSY.html">Delete on Property URL</a>
</p>

</td>
<td valign="top">

<p>MAY</p>

</td>
<td valign="top">

<p>MUST when property element is flagged with <tt>sme:canDelete</tt>.</p>

</td>

</tr>

<tr>

<td valign="top">

<p>
<a title="9.1 Update Example" href="/daisy/sdata/UpdateOperation/Example.html">X-HTTP-Method-Override</a>
</p>

</td>
<td valign="top">

<p>SHOULD</p>

</td>
<td valign="top"></td>

</tr>

<tr>

<td valign="top">

<p>
<a title="11.1 Overview of Service Operations" href="/daisy/sdata/ServiceOperations/OverviewOfServiceOperations.html">Service Operations</a> and
<a title="12.1 Example of Named Query" href="/daisy/sdata/596-DSY/591-DSY.html">Named Queries</a>
</p>

</td>
<td valign="top">

<p>MAY</p>

</td>
<td valign="top">

<p>MUST follow the SData specifications if used.</p>

</td>

</tr>

<tr>

<td valign="top">

<p>
<a title="13 Batch Operations" href="/daisy/sdata/165-DSY.html">Batch Operations</a>
</p>

</td>
<td valign="top">

<p>MAY</p>

</td>
<td valign="top">

<p>MUST follow the SData specifications if used (resource kind marked with
<tt>sme:batchingMode</tt>).</p>

</td>

</tr>

<tr>

<td valign="top">

<p>
<a title="14 SData Registry" href="/daisy/sdata/423-DSY.html">Registry</a>
</p>

</td>
<td valign="top">

<p>MAY</p>

</td>
<td valign="top">

<p>MUST comply with the SData registry contract if supported.</p>

</td>

</tr>

</tbody>
</table>

* * *