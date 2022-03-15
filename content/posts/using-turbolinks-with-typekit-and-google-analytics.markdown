---
title: Using Turbolinks with Typekit and Google Analytics
date: 2012-11-02
category:
  - Ruby on Rails
---

This week I decided to try out [Turbolinks](https://github.com/rails/turbolinks) here on my blog in advance of its inclusion as a part of Rails 4.0. With as simple as my site is, I didn't expect there to be much of an impact overall. But I was mistaken.

After adding Turbolinks, I saw a huge increase in the speed of my site. Page loads felt almost instantaneous upon clicking a link, and got even faster as Turbolinks cached requests. The documentation claims that Turbolinks will increase speed by 2-3 times, and though I don't have any hard numbers I can attest to the noticeable zippiness.

The only problems I encountered were when trying to get Turbolinks to play nicely with [Typekit](https://typekit.com/) and [Google Analytics](https://www.google.com/analytics). Typekit was causing Turbolinks to invalidate its asset cache and do full page refreshes instead of using pushState. And Google Analytics was not tracking page views after the initial one.

To compound the issue, I experienced a “Google drought” when searching for possible solutions. Fortunately, I was able to piece together a solution for both problems myself using what I did find. I hope by documenting them here I'll save someone else that trouble.

As far as I can tell, the key is to make sure that Turbolinks is included after any other referenced JavaScript files but before any inline JavaScript. Otherwise Turbolinks will do full-page reloads every time because it thinks that the assets have changed.

In the case of Typekit, their snippet involves two components: an included file from their server and an inline script to load the fonts. The former should come before application.js (which is where Turbolinks will be loaded if you're using the asset pipeline) and the latter should come after, like so:

```haml
%script{ src: '//use.typekit.net/<your_id_code>.js' }
= javascript_include_tag 'application'
%script try{Typekit.load();}catch(e){}
```

The Google Analytics issue is also simple to solve. Since their asynchronous snippet is inline JavaScript which dynamically generates a script tag, make sure to include it after Turbolinks. Then, to track page views whenever Turbolinks updates the page, add the following line to the Google snippet:

```js
document.addEventListener("page:change", function () {
  _gaq.push(["_trackPageview"])
})
```

This hooks into a custom event that Turbolinks fires each time the page is updated (`page:change`) and ensures that Google is called each time as well. Fortunately, since every browser that supports `pushState` supports `addEventListener` as well, you don't have to worry about cross-browser event handling.

That's it. By getting everything in the right order and adding one simple event listener, I was able to reap the speed benefits of Turbolinks and still use the external libraries I needed. I hope this post saves somebody a little time and frustration.
