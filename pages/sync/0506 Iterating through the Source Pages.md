---
layout: page
group: sync
level: 1
title: 5.6 Iterating through the Source Pages
---

The previous sections decribe how the engine processes the first page of the
synchronization feed. Once the first page has been processed the synchronization
engine will read and process the next page by following the "next" link in the
source synchronization feed.

In our example, it will send the following GET request to the source
provider:

<pre>GET /sdata/myApp1/myContract/accounts/$syncSource('DD052E5C-BFAD-4ffa-8D54-D696E4959497')?startIndex=11&amp;count=10</pre>

This request will return the second page of the source feed. The engine will
post this page to the target endpoint:

<pre>POST /sdata/myApp2/myContract/accounts/$syncTarget?trackingId=7CD444FC-4235-42d9-B399-8FC5D4F278A4 HTTP/1.1
Content-Type:&nbsp;application/atom+xml; type=feed

&lt;!-- second page of feed --&gt;</pre>

The second page will be processed like the first one, as described
previously.

The process will go on until the source feed has been exhausted.

When the source feed has been exhausted, the engine will delete the
synchronization context on the source side, by sending the following DELETE
request to the source provider:

<pre>DELETE /sdata/myApp1/myContract/accounts/$syncSource('DD052E5C-BFAD-4ffa-8D54-D696E4959497')</pre>

The source provider will respond with:

<pre>200 OK</pre>

The invoker of a GET operation on the <tt>$syncSource</tt> URL
SHOULD invoke a DELETE operation for every once the last page was returned.

* * *