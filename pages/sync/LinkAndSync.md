---
layout: page
group: sync
level: 1
title: SData Linking &amp; Synchronisation
---

This section describes the SData Link &amp; Sync protocol.

The first subsections describe the linking protocol:

*   [Correlating with UUIDs](1.1 Correlating with UUIDs "1.1 Correlating with UUIDs")

*   [Linking process](1.2 Linking Process "1.2 Linking Process")

*   [Linking protocol](1.3 Linking Protocol "1.3 Linking Protocol")

*   [Linking scenarios](1.4 Linking Scenarios "1.4 Linking Scenarios")

The following subsections describe the synchronization algorithm, which is&nbsp;a
variant of&nbsp;the well-known&nbsp;vector clock synchronization algorithm:

*   [Basic vector clock synchronization algorithm](2.1 Basic Vector Clock Algorithm "2.1 Basic Vector Clock Algorithm").

*   [Tick management](2.2 Tick Management "2.2 Tick Management")

*   [Basic conflict handling](2.3 Basic Conflict Resolution "2.3 Basic Conflict Resolution")

*   ["Digest" variant of the algorithm](2.4 Digest Variant "2.4 Digest Variant"), which allows
SData to efficiently synchronize collections of resources.
*   [Selecting changes with digest](2.5 Selecting Changes with Digest "2.5 Selecting Changes with Digest")

*   [Conflict handing with digest](2.6 Handling Conflicts with Digest "2.6 Handling Conflicts with Digest")

The following subsections describe the architecture of SData synchronization.
They cover:

*   [Terminology](3.1 Terminology "3.1 Terminology")

*   [Reference architecture](3.2 Reference Architecture "3.2 Reference Architecture")

*   [Architecture variants](3.3 Architecture Variants "3.3 Architecture Variants")

*   [Immediate and catch up synchronization modes](3.4 Immediate and Catch-up Synchronization "3.4 Immediate and Catch-up Synchronization").

Once the architecture has been laid out, we describe the protocol elements:

*   [Synchronization URLs](4.1 Synchronization URLs "4.1 Synchronization URLs")

*   [Synchronization digest](4.2 Synchronization Digest "4.2 Synchronization Digest")

*   [Per-resource synchronization state&nbsp;](4.3 Per-resource Synchronization State "4.3 Per-resource Synchronization State")

*   [Synchronzation feed](4.4 Synchronization Feed "4.4 Synchronization Feed")

*   [Synchronization metadata](4.5 Synchronization Metadata "4.5 Synchronization Metadata").

Then, we&nbsp;dissect&nbsp;a typical synchronization pass. We show how the engine
interacts with the URLs to:

*   [Read the target digest](5.1 Reading Target Digest "5.1 Reading Target Digest")

*   [Query the source synchronization feed](5.2 Querying Source Synchronization Feed "5.2 Querying Source Synchronization Feed")

*   [Update the target](5.3 Updating Synchronization Target "5.3 Updating Synchronization Target")

*   [Handle conflicts on the target side](5.4 Handling Conflicts on the Target Side "5.4 Handling Conflicts on the Target Side")

*   [Iterate through source pages&nbsp;](5.6 Iterating through the Source Pages "5.6 Iterating through the Source Pages")

*   [Log the results](5.7 Logging Synchronization Results "5.7 Logging Synchronization Results")

We also give an example of [immediate synchronization](/daisy/sdataSync/179-DSY.html).

After this walkthrough, we describe advanced topics (not published yet):&nbsp;

*   [Relationship handling](6.1 Relationship Handling in Synchronization "6.1 Relationship Handling in Synchronization")

*   [Partial storage at endpoints](/daisy/sdataSync/557-DSY.html)&nbsp;

*   [Field-level synchronization](/daisy/sdataSync/559-DSY.html)

Finally, we give some implementation hints (not published yet):

*   [Engine implementation notes](/daisy/sdataSync/560-DSY.html)

*   [Endpoint implementation notes](/daisy/sdataSync/561-DSY.html)

* * *