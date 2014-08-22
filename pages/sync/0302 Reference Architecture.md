---
layout: page
group: sync
level: 1
title: 3.2 Reference Architecture
---

The following diagram shows how components interact with each other in a
catch up synchronization pass:

![sync archi.png](img/sync archi.png "sync archi.png")

The process unfolds as follows:

1.  The engine gets the target digest.

1.  The engine sends the target digest to the source. The source uses the two
digests (its own and the target one) to select the resources that need to be
transferred to the target (see&nbsp;[Detecting Changes with
Digest](2.5 Selecting Changes with Digest "2.5 Selecting Changes with Digest")&nbsp;section). The source returns a synchronization feed to the engine.

1.  The engine sends the synchronization feed to the target. The synchronization
feed is a batch of create/update/delete instructions that the target provider
executes to bring its data store in sync. The synchronization feed also contains
the two digests that have been used to select resources on the source side. The
target uses these digests to detect and resolve conflicts
(see&nbsp;[Conflict Handling with Digest](2.3 Basic Conflict Resolution "2.3 Basic Conflict Resolution")&nbsp;section). When
the batch has been processed, the target updates its digest to reflect the fact
that the changes have been applied. The target returns diagnostic information
about the success/failure of the operations that have been submitted.

1.  The engine sends the diagnostics that it just received to the event manager.
The event manager logs them and alerts users if configured to do so.

The synchronization feed&nbsp;is broken in pages (using the SData paging
protocol). So the engine repeats steps 2, 3 and 4 on every page of the feed.

This architecture has some interesting properties:

*   All the communications are based on HTTP and URLs. As a result, the engine
can be run from anywhere, as long as it can access the URLs (the engine is a
service consumer that connects to several providers).

*   The intelligence is in the endpoints and the messages, not in the engine. The
engine is just a simple process that passes messages around. It needs to know
the URLs of the 3 participants (source, target and event manager) but it only
needs to know very little about the messages that are exchanged (it just needs
to detect the end of the batch to stop its loop). Implementing an engine is a
rather trivial task (the same cannot be said of endpoints).

*   The engine is stateless. It can be packaged as a simple object that gets
instantiated at the beginning of every pass. The URLs must be configured before
starting the synchronization pass. Once the pass has been completed, the engine
object can be deleted. So, the engine is not tied to a particular location and
the synchronization passes can be run from different places. All that is
required is that the engine knows the URLs and this rather a
configuration/repository issue than a synchronization issue per se.

* * *