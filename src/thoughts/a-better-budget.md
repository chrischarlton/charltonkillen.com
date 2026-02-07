---
layout: thought.njk
title: Vibe coding a Budget for the UK
description: A thought experiment. Can AI help amateurs like me to understand public policy and sketch out alternatives?
date: 2026-02-07
color: "#00703c"
tags:
  - thoughts
hasSidebar: true
sidebarLinks:
  - title: Quick Summary
    url: /thoughts/budget-detail/quick-summary/
    description: The headline measures in plain English
  - title: Comprehensive Plan
    url: /thoughts/budget-detail/comprehensive-summary/
    description: Detailed document outlining all proposed changes
  - title: Household Calculator
    url: /thoughts/budget-detail/household-calculator/
    description: See how it affects you personally
  - title: Six Months On
    url: /thoughts/budget-detail/six-months-on/
    description: BBC-style news report imagining implementation
---

![Christopher pretending to be the chancellor]({{ pathPrefix }}/images/CCK_budget.png)

I've done this before. Get properly obsessed with understanding how something works, disappear down a rabbit hole for weeks, constructing a whole system to try and tackle some problem. Weird what some do for fun!

Usually it's some technology problem at work. This time it was the entire UK tax system. It started, as these things often do, with irritation. A sense that there must be a simpler and more elegant way, a more logical and systematic approach.

## Budget disappointment

26 November 2025. I watched Rachel Reeves deliver the Budget. I believe in the values Labour have espoused. Pro worker, pro environment, against inequality yet still putting growth and business at the heart of the economic plan. I was expecting big things from the budget to address all this. With a big majority I thought there might even be some controversy - some leadership. I was extremely disappointed.

The problems are obvious to anyone paying attention: stagnant growth, generational inequality, climate targets we're nowhere near hitting, an ageing population we haven't figured out how to fund. And the Budget? A bit more here, a bit less there. Fundamentally unserious given the scale of what we're facing.

Something even deeper has been nagging at me. The polarisation. The breakdown of trust. Trump. Brexit. The rise of parties promising simple answers to complex problems.

I don't think someone votes for populists when they believe in their own future. When they feel things are getting better for their family, or at least could get better with the right choices. The breakdown of the social contract, I think, finds its roots in an economic system that no longer delivers for most people. When the game feels rigged, when working hard doesn't translate into security or progress, people look for someone to blame. Or something to break.

That's what really bothered me about the Budget. Not just that it was inadequate. But that it was missing the scale of what's at stake.

I found myself wondering: *What if we could redesign the whole thing from scratch?*

The kind of question one normally dismisses after a moment's idle thought. Except I didn't. I opened up Claude and started poking at it.

## Asking a daft question

My first instinct was to radically simplify. What if the government was funded through a single tax? Land tax seemed interesting. You can't hide land, can't move it offshore and taxing it encourages productive use rather than speculation.

So I asked: **If we funded the entire UK state using just Land Value Tax, what would the rate need to be?**

It turned out we'd each have to pay 20% of the value of land we own every year. For most people, a massive and unaffordable tax bill. So it was completely bonkers. Politically impossible, economically disruptive and would cause immediate chaos.

But the exercise wasn't pointless. It forced me to understand *why* we have multiple taxes. They're not just historical accidents (although some of them are). They serve different purposes, create different incentives, ask varying amounts of different groups. You need a whole system working together.

That's when this stopped being an idle thought experiment and became something more consuming.

## The numbers didn't work, until they did

The initial chat produced something interesting. A multi-tax system that seemed to hang together. But when I started stress-testing it properly, poking at the assumptions, trying to make sure the numbers actually balanced, I kept finding gaps.

This is where I spent weeks. Not building from scratch, but iterating. Honing the rates, balancing the incentives, considering alternatives, considering and addressing the counter-arguments. Every time I thought it was done, another question would emerge. What about this edge case? How does this interact with that? Does this actually add up?

At one point it was nearly a hundred billion short. A whole chunk of it missing. That was the moment I nearly gave up. Even at this level of playing around, it felt nearly impossible to make it all work. I really felt for the chancellor!

But here's where working with AI gets interesting, and frustrating. Claude was unfailingly encouraging. Every version I proposed was met with "Yes, this could work!" which isn't actually helpful when you're trying to stress-test something properly.

I had to argue back. To push for the problems, not the optimistic scenarios. To say "no, seriously, where are the holes in this?"

Eventually, through iterative badgering, we (yes that's me and the AI called Claude) found the missing pieces. Digital services tax could be significantly expanded (tech giants currently contribute almost nothing). Financial transaction tax on the whole market, not just shares. Environmental VAT. Bringing various capital gains in line with income. Smaller revenue sources, but they added up.

Suddenly it balanced. A small surplus in fact. A budget that could achieve significant economic and social benefits without changing the size of the state - the bit political parties seem to tie themselves in knots over.

## Reading outside my comfort zone

Once I had something that worked on paper, I got curious about the economic theory underneath it. I'm not an economist. My background is technology and business. But I wanted to understand *why* certain choices mattered.

Someone recommended Mariana Mazzucato's "The Value of Everything" and it crystallised something I'd been circling around without quite articulating: we've confused price with value. GDP measures transaction volume, not productive capacity. According to GDP, a financial trader transferring money generates "growth" whilst someone teaching a colleague a new skill does not.

In the current GDP model, "imputed rent" means that GDP falls when house prices do, making it look like the economy is less productive. But there's no less production. In that example, housing had actually become more affordable. Conversely, GDP is boosted by when housing becomes more scarce, which doesn't make sense. There are countless examples of how we measure the wrong thing. Saying this is not anti-growth. It's a recognition that we are measuring things as growth which don't actually benefit our economic wellbeing. I never knew about any of this despite following economic and political news my whole life.

The reform I'd built, almost accidentally, was optimising for different goals. It taxed wealth and pollution but not work. It encouraged productive investment over passive asset appreciation. It boosted real growth while making housing more affordable. It was, in Mazzucato's framework, trying to price things according to their actual contribution to economic health rather than their market price.

I hadn't set out with that theory. I'd arrived at it by asking what seemed like practical questions. But now I had a framework for understanding why it might be plausible.

## The political problem

Then came the uncomfortable realisation: this doesn't fit anywhere on the normal political spectrum.

I asked for analysis of where it sat on the [Political Compass](https://www.politicalcompass.org/) and the answer was: it doesn't!

It's massively redistributive. The top 5-10% by wealth pay substantially more, with another 10-15% facing smaller increases or mixed outcomes depending on their circumstances. The remaining 75-80% gain. That sounds left-wing. But it's also intensely pro-business: no employer National Insurance, 20% corporation tax, the most employment-competitive tax system in the developed world. That sounds right-wing.

It prioritises environmental transition through carbon pricing and green investment. Green Party territory. But it's obsessed with making the maths work, with not expanding the state, with ensuring businesses can thrive. Not exactly typical Green Party concerns.

I actually compared it to the Green Party's current published economic policy, just out of curiosity. I expected to find a more ambitious, comprehensive version of what I'd built. Instead, their wealth tax only applied to 0.2% of the population (£10m threshold vs my £100k), their land tax was a "long-term aspiration" whilst mine was central from day one, and they wanted to *increase* National Insurance for high earners whilst I'd abolished it entirely.

The Liberal Democrats got closer with their focus on land value taxation and environmental measures. But they wanted to keep council tax alongside land tax (whereas I replaced one with the other), and generally seemed less willing to make the hard redistributive choices.

Labour's current approach doesn't even get close. Tinkering around the edges of National Insurance rates, modest increases in capital gains tax, nothing on wealth or land. Deeply unambitious given the scale of what we're facing.

This was genuinely disorienting. I'd come at this from no particular ideological starting point—just "what would actually work?"—and ended up somewhere that doesn't map onto the standard political spectrum at all.

## Why I'm publishing this

I'll be honest: publishing this makes me uncomfortable.

I've no desire to become a public figure on tax policy. I don't want to be a politician. The thought of exposing this to the social media economics mob (people who actually know what they're talking about, and people who definitely don't but are very confident anyway) is mildly terrifying.

It's a thought experiment. A detailed one, carefully worked through, but still just one person's attempt to think systematically about a complex problem. I'm not claiming it's *the answer*. I'm claiming it's *an* answer, concrete enough to be criticised meaningfully.

But I also believe there's also something about our current moment that demands this kind of thinking in public. We're stuck. The usual political channels aren't producing solutions at the scale we need. Maybe the value is in showing the process: here's how you might think through a problem this large, here's where you get stuck, here's how you might unstick yourself.

Maybe some actual expert in public finance might see this and consider some combination of ideas in a new light. 

## The role AI played

I should say something about the AI collaboration, since I've been explicit about it throughout.

Claude is brilliant at holding complexity. It can remember the entire tax system whilst you're tweaking one piece, flag inconsistencies, generate scenarios you hadn't considered. It's like having a very patient research assistant who never gets tired of your questions.

But (and this is crucial) it's also fundamentally obsequious. It wants to please you. Left to its own devices, it will tell you every version sounds great, all the numbers work, there are no problems. That's not useful.

The value came from learning to use it as a thinking tool, not just an answer-generating machine. Treating its optimism as something to push against, not accept. Making it develop the counter-arguments, not just support my ideas.

The "back of the envelope" calculations it produces are exactly that: rough approximations based on publicly available headline numbers to help you think, not gospel truth.

What I'm left wondering is whether this kind of tool, used with appropriate scepticism, could actually help more people engage with policy development. Not as a replacement for expertise, but as a way to explore complex systems without needing a PhD in economics first.

## What I'm sharing

I've decided not to publish the vast majority of the material I've generated. A huge body of iteration, an embarrassing log of my obsessive refining. It doesn't feel right to share that.

Instead, I'm publishing this: the journey itself. And a few of the artefacts that might be genuinely useful or interesting.

The BBC-style articles are speculative fiction, obviously. A way of making abstract policy concrete by imagining what the news might report. It's helped me think through what could actually go wrong, which voices would be critical, where the human impact would be most acute.

If you're interested in how the system works, the comprehensive plan is there. If you're interested in how someone thinks through a problem this complex, hopefully this blog post gives you something. If you want to see what it might feel like in practice, the news article brings it alive.

## The value in being specific

Here's what I keep coming back to: this thought experiment only works because I made it concrete. Vague aspirations about "fairer taxation" or "green transition" can't be meaningfully evaluated. You need specifics (even if they're wrong) so you have something to argue against.

Our political discourse has become allergic to specifics. Everything is high-level positioning, broad statements of intent, carefully hedged so as not to be pinned down. Maybe that's rational given how brutal the environment is for anyone who sticks their neck out.

But it also means we never really stress-test ideas. We never have a detailed enough proposal to interrogate.

I'm not saying my proposal is right. I'm saying it's concrete enough to be wrong *in interesting ways*. And maybe that's more valuable than being vaguely correct about nothing in particular.

## Something isn't working

I wrote earlier that I'm not anti-business. I'm not. I want businesses to thrive, employment to grow, innovation to flourish.

But something isn't working in our economy. We have record employment and stagnant wages. We have a housing crisis whilst empty properties sit unoccupied. We know what we need to do about climate but can't seem to marshal the resources to do it. Young people are locked out of prosperity whilst existing wealth grows by simply existing.

What's the point of being wealthy in a collapsing society? The current trajectory doesn't actually serve anyone's long-term interests, including the wealthy. But our political system seems unable to address it.

The reform I've sketched out might be completely wrong, but it doesn't shy away from the real problems or fail to engage with the detail.

I'd love if our democracy served us options in this level of detail. Not because mine is right, but because we deserve better than vague promises and careful hedging. We deserve to see the trade-offs, understand the choices, and decide for ourselves what kind of country we want to build.

So that's how I spent much of my spare time in the last couple of months. Probably not normal. But here we are.

<div class="highlight-box">

If any of this resonates, I'd genuinely love to hear from you. Especially if you think I've got something fundamentally wrong - that's how we all learn. [Get in touch](/contact/) to start the conversation.

</div>
