---
title: 'Agile Transformation Proposal'
excerpt: 'Proposal to increase team autonomy @ SSENSE'
source: Me
---

# Problem Statement
PRs are taking a long time to develop due to their complexity and a long time to merge due to the dependence on other teams for knowledge sharing & approval.

# Assumptions

## Challenges
When building components as a team we are torn between building the right thing & building the thing right.
1. Building the right thing focuses on effectiveness & meeting our client’s needs. E.g. Do we create value?
2. Building the thing right focuses on efficiency of delivery. How quickly can we deliver & adapt to new circumstances? E.g. Code standardization, maintainability, & performance

## Organizational Complexity
We have 3 different perspectives
1. Business Strategy (lol i am a dev so idk how this works, Jessica Tsai please help)
2. Software Design (e.g. Domain Driven Design @ SSENSE)
3. Team organization (e.g. how we work together as a team)

# Decision Criteria
1. Code Quality: The ability to understand code quickly (for implementation & maintenance purposes)
2. Code Performance: The ability for a feature to perform.
3. Team Cognitive Load: The team’s ability to effectively execute the work in a timely fashion. (e.g. balancing quality & delivery accountability per team member)
4. Team Autonomy: The level of dependence on external teams
5. Delivery Predictability: The ability to effectively meet deliverables
6. Ownernership: There are clear ownership boundaries in the software we maintain (e.g. ui-website, the comp-lib, & hqm are shared services with blurry boundaries vs ag-account & mono repo have clear boundaries)
7. Inter Team Communication: High on-going communication between teams in repos with blurry boundaries.
8. Cost: The length to implement the given strategy
 
# Considered Options 
## Agile Approach
### Pitch
Team Autonomy as a priority
### Team Impact Goal
This is an opportunity for us to create a small, long lived autonomous team here at the company. As of right now at SSENSE there is a high employee turnover with lots of handover work. 

### Long Term Company Impact Goal
Optimizing local parts of our organization will not help with the performance as a whole. If we are focusing on strengthening our internal process we are ignoring the way our system operates. A system is not the sum of its parts, but the product of its interactions. Therefore, if the systemic nature of our organization is ignored, any efforts at the local scale of improving that system are doomed to failure.
Therefore we need to start pivoting to a better organizational structure here at SSENSE. So why not start setting the standard with our team?
###  Cost
Lots of the top contributors in ui website (our top bottle neck repo) have teams with a tank in the frontend on them and these tanks are what facilitate the review process & knowledge transfer required for PRs & the splitting down of tickets. In order to match the speed of merging we & splitting down the ticket chonks we need A TANK with solid foundations in the repo we are developing.
For someone to become a tank it takes time. Keep in mind this problem will not just occur in our ui website work, it will also occur when we take up more serverless work as well since its a new area of development.
### Paying that cost
Minimize cost while maintaining quality by dividing & conquering: Let’s play to our strengths. No one can be an expert in every aspect of our stack in a timely manner. The thought process required for each stack layer differs despite following similar patterns. (e.g. someone to champion more UI work & someone to champion more backend work and then each member acting as support to drive home the tickets). This places more trust on individual developers fosters collective ownership of each task.

### Pros
1. Lessen external team bottlenecks
2. Lessen the risk of Handover work
3. Each team member plays to their strengths
a. SSENSE values full stack devs, although this notion in itself is non agile. Ultimately each team member has their own skill set that they can leverage
4. Balancing code quality with deliverability: there is more accountability on individual devs with more experience in a particular domain to split tickets, do knowledge sharing, etc 
5. Promotes flexibility: We need to remain flexible in order to pivot in accordance to unforeseen business requirements, ninja tasks, & incidents (e.g. taking a more reactive strategy instead. We can't know how each week is going to hit & ultimately the methodology is not so important as prioritizing the value & impact of the results.

### Cons
1. It will take a while to start seeing the benefits of this approach
2. We need to always be open to reformatting our strategy

# Resources
https://agilemanifesto.org/

https://www.youtube.com/watch?v=_U0VqmkpKqg

https://www.proofhub.com/articles/traditional-vs-agile-project-management

https://www.agilealliance.org/resources/experience-reports/towards-autonomous-aligned-teams-with-domain-driven-design/

https://speakerdeck.com/paperswelove/john-allspaw-on-common-ground-and-coordination-in-joint-activity
