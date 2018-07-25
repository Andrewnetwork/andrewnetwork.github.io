---
layout: post
title:  The Open Source Plumber
date:   2018-07-19 00 
categories: draft software
excerpt: Open source often forces developers to become plumbers of preexisting solutions. 
---
{% capture cont %}
{% include figure.html src="/assets/images/2018/fullStackML.jpg" desc="Some open source plumbing I've done." %}
{% endcapture %}
{% include full-width-content.html padding="10px" content=cont %}

I am writing this piece from my perspective of being a software contractor and how open source solutions 
have impacted my work -- positively and negatively. I am a huge fan of open source software, but when does the massive availability of open source solutions begin to turn software engineers into plumbers of different solutions instead of genuine engineers? What impact does this have
on the engineer's quality of life and products they build? The main thesis of this post is that we should responsibly use open source solutions and beware the follies an overreliance and unstructured adoption brings. 

# The Need for Open Source Software (OSS)
OSS is the primary force that enables small software companies to compete with behemoth corporations. Engineering modern software solutions from the ground up or licencing all the technology required is simply intractable for small companies. Having a wide range of high quality 
OSS allows startups to operate on a much higher level in terms of what software they can build because they are building on many years 
of prior work. We routinely build upon OSS that has taken many decades of labor to develop. We would never be able
to work on applying machine learning to problems if there weren't OSS libraries supporting what we do; we'd be stuck building the tools instead
of focusing on solving the larger problems. OSS is to software developers as papers are to academics. When a domain becomes sufficiently complex, there must be a means of facilitating the "standing on the shoulders of giants." Software has long ago reached that point and OSS is
this necessary mechanism.   

# The Current State of Affairs 
When you are developing software for a client, there is constant pressure to use OSS instead of spending time to thoughtfully develop a specific solution to the problem at hand. There are so many OSS solutions available for every part of a project which will lure developers under the intoxicating song of *♫ saving time ♫* to use large general purpose systems for every part of the project. This can work out fine in many cases, but when something goes wrong or when you want to bend the software to your specific purpose, you end up having to navigate a labyrinth of complexity brought on by the adoption of multiple large software projects.

A large software company has the luxury of having specific experts in different OSS projects, where a small company does not. 
# Suboptimality 

# Intellectual Bloat
When so many parts of a project are abstracted away through the use of OSS, how much of the project does a developer truly understand? 

# Guiding Principles 
Finally, I will try to set down some principles that may be helpful in guiding the adoption and creation of open source. 

You must not include critical OSS in your project if you have not spent the time mastering it. Read the documentation and do small learning projects. Don't disrespect the library because it has abstracted away the complexity of the problem and you only care about the utility it provides. If you don't have the time to master it, find a lighter library that you do have the time to master. If you do not heed this advice, be prepared for the pain the will come from your ignorance. 

If you are designing OSS, consider making it modular so that various features can be incrementally adopted. See [Vue.js](https://vuejs.org/) for a project with an awesome OSS design philosophy. 
