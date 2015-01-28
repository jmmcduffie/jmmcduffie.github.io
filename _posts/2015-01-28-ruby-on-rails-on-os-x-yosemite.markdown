---
layout: post
title: "Ruby on Rails on OS X Yosemite"
date: 2015-01-28
categories:
  - Ruby on Rails
  - General
---

Recently I decided to replace my nearly seven-year-old MacBook Pro with a brand-new one. As I sometimes do in situations like this, I decided to set everything up from scratch rather than restoring from another device or a backup. Since I was running Mavericks on my old laptop, this meant getting a development environment going on a new version of OS X. It was a straight-forward process but I decided to document it for my own reference and share it in case someone else can benefit from it.

## General Setup

The first thing you need for development on a Mac is the Xcode command-line tools. Fortunately, installing them is quite easy these days:

```bash
xcode-select --install # then click “Install”
```

Using a package manager makes everything a little easier (in my opinion), and I always reach for [Homebrew](http://brew.sh):

```bash
ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
brew doctor # and then follow the instructions (if any)
```

I ran into permission errors the first time I tried to install any packages so I had to `chown` the `/usr/local` directory to clear those up.

```bash
# You might need to do this too
sudo chown -R $(whoami) /usr/local
```

Once Homebrew is in place you can install [Git](http://www.git-scm.com) and [Node.js](http://nodejs.org). Even though I develop in Rails, I constantly find myself in need of Node for front-end work. Also, if you plan on using GitHub’s Atom editor you’ll want Node to enable its command line tools. (For whatever reason, installing `node` didn’t expose `npm` to the `$PATH`, but installing it as `npm` did.)

```bash
brew install git npm # not ‘node’

# Go ahead and do this if you know you’ll need Grunt
npm install -g grunt-cli
```

You might elect to install Postgres with Homebrew as well, which I have done in the past. This time, though, I decided to give [Postgres.app](http://postgresapp.com) a try. After downloading and dragging to the Applications folder, I updated my `$PATH` to [enable command-line usage](http://postgresapp.com/documentation/cli-tools.html):

```bash
# in ~/.bash_profile
export PATH=$PATH:/Applications/Postgres.app/Contents/Versions/9.4/bin
```

## Ruby Setup

Ever since I started learning Ruby and Rails I’ve used [RVM](http://rvm.io). It’s also what my box at work is running. But this time I decided to give [rbenv](https://github.com/sstephenson/rbenv) a shot instead. I know other devs who use it, and it’s actually what the Rails team recommends, so I figured it wouldn’t be a bad idea to try it.

Setting up rbenv is quite simple. I recommend using Homebrew to install it, and unless you plan to manually compile your Ruby versions from source I’d recommend the `ruby-build` plugin:

```bash
brew install rbenv ruby-build

# in ~/.bash_profile
export RBENV_ROOT=/usr/local/var/rbenv
if which rbenv > /dev/null; then eval "$(rbenv init -)"; fi
```

I elected to install a few additional plugins as well:

```bash
mkdir $RBENV_ROOT/plugins

# gem-rehash
git clone https://github.com/sstephenson/rbenv-gem-rehash.git \
$RBENV_ROOT/plugins/rbenv-gem-rehash

# default-gems
git clone https://github.com/sstephenson/rbenv-default-gems.git \
$RBENV_ROOT/plugins/rbenv-default-gems

# binstubs
git clone https://github.com/ianheggie/rbenv-binstubs.git \
$RBENV_ROOT/plugins/rbenv-binstubs
```

Regardless of whether you do that or not, you should be all set up to install and run a version of Ruby. I downloaded 2.1.1 for this blog, created `.ruby-version`, and generated a binstub for Jekyll.

```bash
rbenv install 2.1.1
rbenv local 2.1.1 # creates .ruby-version

bundle binstubs jekyll
```

That’s it! It seems like getting up and running with Rails gets easier all the time. And that’s certainly a good thing. Happy coding.

---

**Shameless Plug:** Are you a Rails developer? Are you interested in work that matters? [We’re hiring!](http://hire.jobvite.com/m?3MOO0hwa)
