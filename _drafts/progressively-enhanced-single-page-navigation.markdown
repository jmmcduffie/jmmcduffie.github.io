---
layout: post
title: "Progressively Enhanced Single-Page Navigation"
categories:
  - Progressive Enhancement
---

Recently a new developer asked me how to make a single-page navbar, not unlike the one that I'm using for [Resamazing](http://resamazing.com). This is a common technique, of course, and my reference implementation is very simple. But after sending back my response I started thinking about this blog post and how it could be a good opportunity to talk a little bit about the way that I work.

My approach is that of progressive enhancement. I try to break down whatever I'm building into its simplest form and code for the "baseline experience." Then I layer additional style and behavior on top of that foundation to achieve the desired effect.

With something like in-page navigation, there is a very clear starting point. HTML already provides a way to link to a specific region of the page using a [fragment identifier](http://en.wikipedia.org/wiki/Fragment_identifier). For example, given that our page has a `section` element with an ID of "features," we can link to that `section` with the HREF "#features," i.e. `<a href="#features">Features</a>` will move the viewport to `<section id="features">`.

That implementation alone will meet the requirements of in-page navigation. And so far we've not even moved beyond the domain of HTML. But we can enhance our implementation by using a little bit of JavaScript:

{% gist 9338935 progressively-enhanced-single-page-navigation.js %}

Now clicking one of the links will smoothly scroll the viewport to the right spot on the page. And should the JavaScript fail to run because of an error, the links will continue to point to the right spot on the page.

There are obviously many other enhancements that could be made, such as automatically updating as the user scrolls. But again, at this point any additional layers are just gravy. The meat of the interaction is a plain old HTML link with a fragment identifier.

And in an nutshell that's what progressive enhancement is all about. Layers of added functionality. JavaScript on top of CSS on top of HTML on top of HTTP. This is my preferred and recommended approach and I love the work that I get to do with it.

**jmm**
