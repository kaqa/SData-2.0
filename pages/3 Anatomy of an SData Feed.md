---
title: 3 Anatomy of an SData Feed
---

SData uses Atom feeds and entries to represent resource data. Feeds are used
for resource collections and entries are used for individual resources.

This section describes how SData uses and extends Atom feeds and entries. It
starts with an [example of a typical feed](3.1 Typical Feed "3.1 Typical Feed") and then
details its components:

*   [Standard Atom feed elements](3.2 Feed Elements "3.2  Feed Elements")

*   [Feed level links](3.3 Feed-level Links "3.3 Feed-level Links")

*   [Categories](3.4 Categories "3.4 Categories")

*   [Paging information](3.5 Paging Information "3.5 Paging Information")

*   [Simple list extensions](3.6 Simple List Extensions "3.6 Simple List Extensions")

*   [Feed entry](3.7 Typical Feed Entry "3.7  Typical Feed Entry")

*   [Resource payload](3.8 Resource Payload "3.8  Resource Payload")

Then this&nbsp;section describes&nbsp;how related resources are
[linked or embedded](3.9 Resource Linking and Embedding "3.9 Resource Linking and Embedding") in SData entries.

This is followed by a&nbsp;section&nbsp;that describes other types of representations
that can be returned by an SData service:

*   [Error payload](3.10 Error Payload "3.10  Error Payload")

*   [Tracking payload](3.11 Tracking Payload "3.11 Tracking Payload")

Also included is a section that describes the [SData
category scheme](3.12 SData Category Scheme "3.12 SData Category Scheme") and gives a summary of all the [XML extensions](3.13 SData Atom Extensions "3.13 SData Atom Extensions") (elements and attributes) that SData uses in its representations.

And finally an explanation of&nbsp;[localization](3.14 Localization "3.14 Localization")
mechanisms of SData.

* * *