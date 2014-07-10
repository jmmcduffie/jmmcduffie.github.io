---
layout: post
title: "Git Tips: Setting the Stage"
categories: General
---

Sometimes when I'm working on a project I'll realize that I've bitten off too much code at once. My preference is to keep each commit as small as possible while still providing some kind of value, i.e. [deliver working software frequently](http://agilemanifesto.org/principles.html). But occasionally I will have already started into another feature before getting the first one committed. Or worse, sometimes I'll be in the middle of one task and notice a bug or opportunity for enhancement that I just go ahead and address. In either case, now my working copy is a mixture of what should really be two separate commits.

Savvy Git users already know that you can stage everything or just specific files using `git add <pathspec>`. But what if you've made multiple changes within the same file and you don't want to stage all of them? Fortunately, there is a way to stage only the changes that you want to commit.

The [`git-add`](http://git-scm.com/docs/git-add) command accepts a `--patch` (or `-p`) flag that allows you to review each diff and decide whether to stage it or not. Stepping through the file(s), at each point where there is a diff you can choose to either skip that change, stage it, break it down into a smaller hunk, or a number of other actions.

Changes that are in separate parts of a file work especially well with patch mode--Git has a harder time separating diffs that are very close together. In those cases you have to make a call about whether the changes really need to be separate, and require manual editing, or if it's logical for them to be released together.

With features like patch (just one part of `git-add`'s [interactive mode](http://git-scm.com/docs/git-add#_interactive_mode)), Git makes it possible to set up each commit exactly the way that you want.
