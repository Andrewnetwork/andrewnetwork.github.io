---
layout: post
title:  The Open Source Plumber
date:   2018-07-19 00 
categories: draft software
excerpt: Open source often forces developers to become plumbers. 
---

I am writing this piece from my perspective of being a software contractor and how open source solutions 
have impacted my work -- positively and negatively. I am a huge fan of open source software, but when does the massive availability of open source solutions begin to turn software engineers into plumbers of different solutions instead of genuine engineers? What impact does this have
on the engineer's quality of life and products they are building? The main thesis of this post is that we should responsibly use open source solutions and beware the follies an overreliance brings. 

# The Need for Open Source Software (OSS)
OSS is the primary force that enables small software companies to compete with behemoth corporations. Engineering modern software solutions from the ground up or licencing all the technology required is simply intractable for small companies. Having a wide range of high quality 
OSS allows startups to operate on a much higher level in terms of what software they can build because they are building on many years 
of prior work. We routinely build upon OSS that has taken many decades of labor to develop. We would never be able
to work on applying machine learning to problems if there weren't OSS libraries supporting what we do; we'd be stuck building the tools instead
of focusing on solving the larger problems. OSS is to software developers as papers are to academics. When a domain becomes sufficiently complex, there must be a means of facilitating the "standing on the shoulders of giants." Software has long ago reached that point and OSS is
this necessary mechanism.   

# Developer Quality of Life
When you are developing software for a client, there is constant pressure to use OSS instead of spending the time to thoughtfully develop a specific solution to the problem at hand because there are so many OSS solutions available for every part of the project. This is fine in theory, but what ends up happening is that we end up using large general purpose systems for every part of the project; this dramatically increases the complexity of the project when something goes wrong or when you want to bend the software to your specific purpose. When this happens, the complexity goes through the roof and you end up having to navigate the maze of complexity brought on by the use of a large software project when you are really just using a very small part of the full functionality. 

# Suboptimality 

# Intellectual Bloat

# Commandments for Using OSS
Finally, I set forth some rules that distills the points I've tried to make here. 

1. You must not include OSS in your project if you have not spent the time mastering it. If you don't have the time to master it, find a lighter library you do have the time to master or be prepared for the pain the will come from your ignorance. 
2. You must not include OSS in your project if you only intend to use a small portion of its functionality. Find other libraries that are more suited to your purpose instead of introducing unwarrented complexity to your project. 
3. Only use OSS that is well maintained and designed. Do not introduce mediocre code to your project just because it quickly solves a problem.
4. If your developers hate the OSS you are using, do not use it. Find a better solution or roll your own. Do not be pressured into using something because it's easy to adopt upfront, you must consider the long term consequences of your decisions. 