---
layout: post
title: "Progressively Enhanced Single-Page Navigation"
date: 2014-06-30
categories:
  - Progressive Enhancement
  - Behavior
---

A common pattern on the web today is that of navigation within a single page. One sees this technique used frequently on marketing landing pages, where a larger amount of content will be contained within one page. Each link in the nav links to a spot on the page, and usually that spot scrolls smoothly into view when the link is clicked.

Recently a new developer asked me how to make a nav like that. While my suggested implementation is certainly not complex, my approach might be instructional as an example of progressive enhancement. People don't talk much about progressive enhancement anymore but it is still my preferred and recommended methodology.

Progressive enhancement is all about layers. The idea is to break the implementation into its simplest, most bulletproof form and build that first. I call this the "baseline experience." From there, one layers additional style or behavior on top of that foundation to achieve the desired effect. If any layer above the baseline experience fails, the implementation will still stand.

With something like in-page navigation, there is a very clear starting point. HTML already provides a way to link to a specific region of the page using a [fragment identifier](http://en.wikipedia.org/wiki/Fragment_identifier). For example, given that the page has a `section` element with an ID of "features," one can link to that `section` with the `HREF` "#features," i.e. `<a href="#features">Features</a>` will move the viewport to `<section id="features">`.

So the first step is to build a navigation menu using the built-in semantics of a `<nav>` element and an `<ol>` of links:

{% gist 9338935 markup-1.html %}

That implementation alone will meet the requirements of in-page navigation. Clicking one of the links using a fragment identifier will move the viewport to that section. But although technically correct, this approach leaves something to be desired. The links need an additional *behavior* added.

Web development has come a long way since the days of inline JavaScript and CSS. My current thinking with binding JavaScript behaviors to HTML is to use data attributes to extend the semantics of the element. By adding `data-behavior="foo"` to an element, I can communicate that it has additional metadata and add a way to bind JavaScript functionality to it.

Step two is to use data attributes to declare that some of these links have an additional behavior:

{% gist 9338935 markup-2.html %}

The final step is to write a little JavaScript to define what the `scrollTo` behavior actually does. My implementation uses jQuery, but obviously that is not a requirement. I add an event listener to the body to detect clicks on links with the `data-behavior="scrollTo"` attribute, verify that a fragment identifier is present, scroll to the identified element, and prevent the fragment from being added to the URL:

{% gist 9338935 behaviors.js %}

Now clicking one of the links will smoothly scroll the viewport to the right spot on the page. And should the JavaScript fail to run because of an error or a slow connection, the links will continue to point to the right spot on the page. In fact, if JavaScript breaks during the execution of that event handler it will degrade gracefully because the call to `preventDefault` is at the very end.

There are obviously many other enhancements that could be made, such as automatically updating as the user scrolls. But again, at this point any additional layers are just gravy. The meat of the interaction is a plain old HTML link with a fragment identifier. And in an nutshell that's what progressive enhancement is all about: layers of added functionality; JavaScript on top of CSS on top of HTML on top of HTTP.

**jmm**
