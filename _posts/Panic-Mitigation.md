---
title: 'Panic Mitigation Application'
excerpt: 'A UI/UX research project for panic'
coverImage: '/assets/posts/panic/application-structure.png'
source: 'https://github.com/elizabeth-poggie/panic-app'
ogImage:
  url: '/assets/posts/panic/application-structure.png'
---

# Abstract 

There exist few options for digital panic treatment despite it’s proven level of efficacy. Currently existing applications either have low user ratings, are expensive, or lack essential features. The mental health applications that are successful primarily focus on anxiety and depression but lack essential panic mitigation features. Consequently, this report aims to create a cross-platform, open-source application for panic mitigation with clinically significant cognitive behavioural tasks. First, the features of a successful panic mitigation program are explored and the user requirements outlined. With this, a sample application design will be proposed.


# Background Information

### How is Panic Treated Today? 

Different psychotherapy measures propose different methods of treatment with varying degrees of efficacy. Some common methods are psychoeducation, lifestyle management, drug usage, cognitive therapy, and behaviour therapy. While psychoeducation has been used widely, its efficacy has not been tested rigorously in a clinical setting (Taylor, 2006). Lifestyle management—such as caffeine intake reduction, relaxation techniques, exercise and stress management—has disputed efficacy as related activities tend to target comorbid conditions such as depression and anxiety (Sarris, 2014). Additionally, techniques for relaxation are not as effective as behavioural and cognitive therapies when pertaining to panic (Taylor, 2006). Prescription drugs are commonly combined with psychotherapy. While short-term usage is shown to have beneficial outcomes long-term usage is discouraged.   Cognitive and behavioural therapies have widely demonstrated efficacy in multiple clinical trials for treating panic disorder (Richards & Klein, 2006). Whether the treatment is internet-delivered cognitive behaviour therapy (iCBT) or face-to-face delivered cognitive therapy (CBT) does not matter as they produce equivalent effects  (Andersson, Cuijpers, Carlbring, Riper, & Hedman, 2014).  In fact, guided iCBT for panic disorder is highly effective when delivered in a clinical routine setting in place of traditional CBT. This online CBT can be used for evidence-based psychological treatment where clinicians have access to the patient’s progression and can modify treatment based on what measures are most effective for the patient (Klein, Richards, & Austin, 2006). 

### What are the Downfalls of Psychotherapy for Panic?

The issue with treating panic is that most patients relapse just three months after initial treatment. Some studies have shown that cognitive behavioural tasks can be effective in the short term when dealing with acute panic, but rarely six months post initial treatment (Taylor, 2006). The question of what factors lead to relapse post-treatment is largely left unanswered. A study led by Massimo noted that one factor, the attribution of medication to improvement when undergoing psychotherapy, is a huge risk factor for relapse. In Taylor’s analysis, he noted that withdrawing drugs during earlier stages of psychotherapy results in patients attributing recovery to the therapy as opposed to the drug (Taylor, 2006). However, the same cannot be said for patients who have depression as a comorbid behaviour, as these patients show higher rates of relapse (Biondi & Picardi, 2003). This is unfortunate as about half of the patients with a panic disorder develop depression and half of the patients with a depressive disorder will develop a panic disorder (Taylor, 2006). Other studies suggest that once patients exit the treatment, the continuation of CBT activities diminish leading to returned attacks. In summary, factoring in comorbid behaviours to the treatment is just as important as the portion of the treatment dedicated to panic. Leant CBT activities should be continuously practiced after the conclusion of their treatment. 

### How long does iCBT Treatment need to be?

When a patient is undergoing treatment for their panic disorder, the amount of time that is recommended to spend on iCBT is disputed. In one study, it was shown that six to eight hours of iCBT relieved panic attack for most patients, and longer treatments increased efficacy. (Kenardy JA, 2003). NCID recommends 14 hours in weekly sessions of one to two hours to be completed over the course of four months (Taylor, 2006). Other experts argue that daily four-hour sessions in week 1, two two-hour sessions in week 2 and one two-hour session in week 3 of treatment can be just as effective (Bohni, Spindler, Arendt, Hougaard, & Rosenberg, 2009). In summary, there is no set length and duration for an iCBT program, but it is agreed upon that persistent effort from the patient over a prolonged period is most effective.  

### What Qualities Does a Good Panic CBT Program Possess? 

There is a large arsenal of activities that different CBT programs offer covering five basic categories: relaxation therapy, cognitive restructuring, mindfulness, systematic exposure treatment, and stress management (Cognitive Behavioral Therapy Los Angeles, 2019). 
In relaxation therapy, patients undergo breathing training, and muscle relaxation. Breathing training is present in every iCBT as this is a first intervention (Taylor, 2006). 
Cognitive restructuring is used to help people recognize destructive thought patterns and alter them. For example, a “Thought Record” is a CBT homework activity designed to help patients learn to isolate destructive thought patterns and consider alternative points of view. These are more commonly used to manage anxiety, but the Queen’s Health, Counselling and Disability Services released a Thought Record to help with panic. 


Mindfulness is used to help teach people to experience unpleasant sensations without reacting negatively to them. This is a way of focusing on panic self-efficacy and dealing with our catastrophic interpretations of what is going on (Cognitive Behavioral Therapy Los Angeles, 2019). Treatment that included interoceptive exposure homework (e.g. mindfulness) had the most effective post-treatment outcomes in a six-month follow up in terms of panic frequency, phobia, and general anxiety and functioning (Richards & Klein, 2006). Panic self-efficacy determines whether individuals will initiate appropriate coping behaviour in a feared situation rather than resorting to avoidance behaviours. A 2014 study noted that increased panic self-efficacy acted as a mediator for therapeutic change (Stald-Bolow, Jönsson, Grambye, & Ortiz, 2014). On top of that, a separate study focusing on general anxiety management noted that self-efficacy improvement heavily relied on exercises involving self care (Queens University Health, Counselling and Disability Services, 2014). By focusing on the individual’s coping abilities, this allows the patient to sustain their effort in facing future obstacles (Fentz, Arendt, O'Toole, Hoffart, & Hougaard, 2014). 


In systemic exposure treatment, once the patient is less anxious about future attacks, patients can confront anxiety-provoking situations under the conditions of perceived safety (Queens University Health, Counselling and Disability Services, 2014). Another term for this is “fear habituation” which is common among iCBT programs. 


Finally, stress management information is common amongst most programs; however, they only proved useful in the short term and are not associated with long term patient improvement (Richards & Klein, 2006). The inclusion of stress management information is less effective for the same reason that psychoeducation is non-effective. Simply telling someone what to do will not ensure that the patient will practice it, whereas focusing on exercises and homework ensures an active effort from the patient.  In a meta analysis on the efficacy of homework assignments in cognitive behavioural therapy, homework compliance can be a predictor of therapy outcome as this indicates increased motivation to reach target goals for the patient. Additionally, patient groups receiving a larger range of homework activities produce the most sustainable outcomes (Kazantzis, Deane, & Ronan, 2006). 
In summary, making a program that possesses a wide range of relaxation, cognitive restructuring, mindfulness and systematic exposure activities can provide a patient with the necessary tools to mitigate their panic.  

# Market Research

The first step in designing a robust application is to think about the users. Who is using the existing iCBT applications? What are the strengths of these applications and where are their downfalls? It is essential to think about how we can take the needs and criticisms of existing users, while also satisfying the requirements of an iCBT program, in order to create a unique and successful application. 

### Magellan FearFighter

FearFighter is an application recommended by the National Institute for Health and Clinical Excellence and has been shown to effectively reduce symptoms of anxiety, depression, and panic (Hayward, MacGregor, Peck, & Wilkes, 2007). The application primarily focuses on psychoeducation and uses videos to help users learn methods to mitigate their panic. Consequently, the application requires a high-quality connection since videos are being streamed to you directly. The application offers some interactive activities throughout the program, but these activities do not take feedback from the user in order to modify the program to individual needs. In other words, it is a one size fits all approach. It has the base cost of 200 CAD and 1.5 stars on the App Store with many users complaining of the app crashing, replaying the same video, and broken websites (Magellan Health Inc, n.d.). To put it concisely, the app is effective in a clinical setting but is lacking outside of that setting. The use of psychoeducation as the primary focus of treatment is largely disputed, but the app does offer some interactive activities as well.

### Fear Fighter Project: A context-aware solution for treating acrophobia 

The Fear Fighter Project is a study focusing on the design of motivating and captivating qualities necessary for an iCBT program (Stald-Bolow, Jönsson, Grambye, & Ortiz, 2014). They argue that there needs to be motivating elements within an iCBT program to push users to complete the exercises. One solution they posed is that goals should be divided into partial goals to give attainable checkpoints for the user to strive towards. An example is the Fear Ladder activity where users create a plan of exposure to different anxiety provoking situations (Queens University Health, Counselling and Disability Services, 2014). Users start with an activity that causes them the least amount of fear, habituate to it, then move on to the next rung in the ladder. For example, if you have a fear of dogs, then the progression of ladder rungs could be: “look at a dog in the park from a safe distance”, followed by “walk next to a dog on the sidewalk”, and finally “pet the dog”. Only once a rung of the ladder is completed can users comfortably move to the next step. An issue with this ladder is a lack of motivation to expose yourself to these fears. To combat this, Stald-Bolow suggests some form of gamification to help with motivation. This feature should help the users progress in the exercise, but not completely take over the goal. 

### Mindshift

Mindshift is an Android application developed by Anxiety Canada for the mitigation of anxiety (Anxiety Canada Association, 2019).  It offers a selection of relaxation therapy, cognitive restructuring, mindfulness, and systematic exposure exercises that are all part of an effective iCBT workbook. There is a daily journal feature that allows users to keep track of their feelings, thoughts, and moods. It has no advertisements, is free, and is well received by its users. That being said, there are some issues with the application. For example, users are not anonymous and consequently many feel uncomfortable sharing their anxiety information with an entity that is not a trusted clinician. Furthermore, users find it hard to track progression because it is difficult to access their past activity as journal entries do not allow you to have entry check-ins for comorbid feelings. This is a disadvantage as most people struggling with anxiety have other associated symptoms such as panic and depression. Moreover, entries are limited to 400 characters making users feeling restricted in what they can express. Overall, despite its shortcomings, this is a strong anxiety application as it provides the user with an arsenal of iCBT activities they can access. 

### Panic Relief

Panic relief is an app developed by MD Marianne Geoffroy that gives users four relaxation CBT activities for panic.  These techniques are discrete animations making it possible for users who are going through an attack able to practice the activity regardless of surroundings. This is a huge strength as many relation CBT require audio which might not necessarily be available to the user. A drawback is that to reach the exercise you need to click at least five times past instructions you might not need to read. When a user is having an attack, they should be able to navigate to the exercise that calms them down as fast as possible. Overall, despite the lack of user experience, the four relation CBT activities are still useful, especially when it comes to handling an attack. 

### Daylio – Mood Tracker and Micro Diary

The main feature of Daylio is a journaling app to track everything from exercise to mental health and mood. Unlike other mental health applications with journaling capabilities, Daylio allows users to customize their moods as well as which activities they want to track (Relaxio s.r.o., 2017). At the bottom of each entry, users can write a little note about their day, but, according to the reviews, users prefer a larger area to write a note so as to not feel constrained. Daylio is a general-purpose journaling app and, as such, lacks a lot of features necessary for a panic application. However, other journaling applications such as Mindshift and FearFighter can learn a lot from the customizability of Daylio’s journal entries. 

# User Profile

By taking information gathered through market research and background information, a target audience for the product can be defined. This audience is represented by a user profile which reflects similar characteristics and goals of the audience and forms the benchmark for creating an optimal user experience (Rocket55, 2020). This way, instead of trying to design an application that tailors itself to every user, we find the users that will want to use our application and tailor it accordingly (JustInMind, 2020). For the purposes of this paper, we will examine Jessy Williams as a representative of the application’s target market.

![Image](/assets/posts/panic/jessy.png)
### Demographics

Age: 19

Location: Cornwall, ON

Status: Single

Education: High school 

Occupation: Full-time student 

Family: Lives at home with her parents 

### Bio 

Jessy is a high school student living in a remote area where convenient psychological tools are inaccessible. She struggles with panic attacks and comorbid behaviours such as general anxiety. She is reluctant to seek out help and finds it difficult to communicate her anxiety to her family and friends. Jessy has explored existing panic mitigation tools online, but CBT workbooks are lengthy and make it hard for her to track her progress and stay motivated. Online applications cost a lot for her. 
She is looking for a mental health application that can target her panic. It will not replace in-person psychological care, but it will be her first step to take control of her situation.  

### Goals

Practice CBT exercises and self-care habitually.

Make consistent effort to work on her personal struggles.   

### Frustrations

Overcoming struggles. This seems like an unattainably large task. 

Quickly getting access to the CBT activity that best calms her panic during an attack.  
 
Lack of motivation to constantly practice CBT exercises and self care. 

### Motivations

Tracking the progress of how she is managing her personal struggles

# Scenario Maps

Scenario maps are essential to the product design process as they ensure that our design is grounded in the real world and force us to think about the user experience. Every user has a goal to achieve and we need to define the steps that the user will go through to get to their final goal (Lam, 2016). The focus is less on how the user will complete a step and more about what the user will do. Along the way we are capturing design ideas necessary for the steps the user will take to make it as easy as possible (UXM, 2010).

### Scenario 0

Goal: Completing a CBT activity

Subject: Jessy 

![Image](/assets/posts/panic/1.png)


Final Note: This section should have activities divided into the 5 basic categories of a successful iCBT program. These include relaxation, cognitive restructuring, mindfulness and systematic exposure activities. Depending on the type of activity, they will be integrated in other parts of the applications. 

### Scenario 1

Goal: Mitigate the onset of a panic attack 

Subject: Jessy 

![Image](/assets/posts/panic/2.png)

### Scenario 2

Goal: Add a journal Entry 

Subject: Jessy 

![Image](/assets/posts/panic/3.png)

Final Note: This will allow the user to track anything they have completed from their iCBT workbook that requires persistent attention. These are classified as “habit forming” activities. This could be mindfulness goals or tracking different symptoms. As well, users complete iCBT homework that is most helpful to them and so each journal entry will be different depending on the user. For example, some users want to track comorbidity while other are only dealing with panic. 

### Scenario 3

Goal: Tracking a goal. 

Subject: Jessy 

![Image](/assets/posts/panic/4.png)

Final Note: Different users have different long-term goals they are trying to achieve with their panic. For example, is the user pursuing a systematic exposure activity or a cognitive restructuring activity? These are long term goals that do not have progress being made on the daily but should always be visible to them to serve as a remainder of what they are working towards. 

<br>

### Scenario 4 

Goal: Reviewing their journal. 

Subject: Jessy 

![Image](/assets/posts/panic/5.png)

# User Flow

Now that we have a base knowledge on the scenario maps and user persona, we can construct the way in which we expect the user to move through the application. 

![Image](/assets/posts/panic/flow.png)

# Wire Frames 

Now that the screen requirements have been properly scoped, they can be designed. In order to create a successful layout, we need to incorporate the Laws of UX in Appendix 1 to ensure a well-informed design as well as some other important facets. First, the designs were developed with Miller’s Law in mind. This states that the average person can only keep seven items in working memory and so each screen only has up to seven elements visible to the user at any given time. Additionally, we use an infinite scroll for navigating content such as journal entries and CBT exercises as opposed to pagination. This ensures more user engagement and is best suited for mobile. Finally, almost all the components the user might read are written in first person. This helps users feel more motivated to click and increases interaction (Caglar, 2020).

### Home Screen 

![Image](/assets/posts/panic/01.png)

The time it takes the user to click the “Panic” button during an attack will be minimized due to its size (Fitt’s Law, Doherty Threshold). Because the panic button dominates the home screen view, there are less items that the user needs to think about clicking on when undergoing an attack (Hick’s Law). Additionally, the progress of long-term goals is shown on the home screen to serve as a reminder of what the user is striving towards (Zeigarnik Effect). Finally, the user can add journal entries by selecting “+” in a similar way you can add items in almost all of Google’s applications (Jakob’s law). 


### CBT Screen

![Image](/assets/posts/panic/02.png)

Exercises are organized according to CBT category membership (Law of Proximity) and each category has an artistic style associated with it (Law of Similarity). Consequently, we do not need to define borders to signify a category which will make the design feel cleaner. As well, an exercise within a CBT category that is most effective will always appear at the beginning of the sequence (Von Restorff Effect). Finally, to hint to the user that they need to horizontally scroll to discover more exercises, we should partially show half an exercise if the list requires. 

### Journal Screen 

![Image](/assets/posts/panic/03.png)

Users can manipulate the bar up and down to reveal the calendar or entry view. This is important as the entries and the calendar are intricately linked together and also minimizes the number of clicks for navigation (Law of Proximity). Entries are distinct and surrounded by boarders (Law of Common Region). 

### Entry Screen

![Image](/assets/posts/panic/04.png)

This is designed to match the user’s scanning pattern with the most important components at the start of the sequence (Serial Position effect). Users can submit an entry if and only if a mood is selected as this will allow us to make associations with the users mood and habits at a later point. 

### “Before you begin” activity Screen 

![Image](/assets/posts/panic/05.png)

Whereas the “Begin” button is the primary choice, the “Always Skip” is secondary and requires a different styling. Having a button visual hierarchy is an important factor when decreasing user’s decision time (Doherty Threshold). As well, “Always Skip” is placed before the “Begin” button as this will match the user’s scanning pattern (Caglar, 2020). A common mistake of many designers is to place the primary button before other options because they want the user to notice the primary selection first, but this is unnecessary as the primary button is already styled to be the most noticeable. As well, the “Always Skip” is left empty as pre-filling does not respect the user. Finally, there is a bar that the users can optionally use to bring up the instructions again at any point during the exercise. 

### Relaxing an Attack Example: 

Relaxation therapy category - Box Breathing

![Image](/assets/posts/panic/06.png)

This exercise will be a simple animation of the breathing exercise for the user. This exercise is a feature of almost every iCBT workbook because it is a first line treatment when dealing with an attack. Consequently, the design is minimal to allow the user to focus on one thing only: breathing (Law of Pragnanz). 

### Habit Goal Example: 

Mindfulness category - Self Care Buckets

![Image](/assets/posts/panic/07.png)

There are five different domains of self care that that form the basis of anxiety management: social, physical, emotional, mental, and spiritual (Queens University Health, Counselling and Disability Services, 2014). The user should be able to add as many inputs as they like to any of the five domains since each domain is unique to the user (Postel’s Law). Additionally, these domains will be separated by clearly defined boundaries (Law of Common Region), but there will be no boundaries within a domain to prevent a cluttered design.

### Long-term Goal Example:

Systematic Exposure - Fear Ladder

![Image](/assets/posts/panic/08.png)

This activity was highlighted in part 2 section 2. The fear ladder for the individual is unique in the number of steps they must go through to reach their goal so the ladder must be customizable (Postel’s Law).  

# Prototype 

A prototype was developed in React Native on GitHub. React Native is a JavaScript library that allows developers to build native user interfaces that operate on Android, IOS, and the web.  This way, my application is both open-source and cross platform in order to be accessible to users regardless of their device. 


# Conclusion and Future Work

I was able to make a prototype panic mitigation application by merging iCBT program requirements with user expectations. Most of the research went into how to structure an iCBT program and, consequently, lacks research on how to structure specific exercises for categories such as relaxation therapy, cognitive restructuring, mindfulness, and systematic exposure. As noted in section 1.4, users with a wide range of iCBT homework activities fare more successfully compared to those with a limited selection. This application was designed to be extensible so that in the future we can easily add specific exercises. Additionally, making a React Native prototype comes with its own advantages and disadvantages. React Native allows rapid creation of a backend which enables the product to be quickly shipped. However, by not using prototyping tools common in UX design, I could not test the efficacy of this design with tools such as Google Optimize. If I were to do this project again, I would have made this purely a design project to focus on the structure of the program, the specific exercises of the program, and modelling. I do not regret my choice of React Native, as this taught me a lot about frontend development, but the more thought that goes into the design of a product will result in a superior outcome.  Overall, I only partly achieved my goal, but this will serve as a solid foundation for future work. 


# Acknowledgments

I would like to thank Joseph Vybihal for the opportunity to pursue a project close to my heart this summer. Thank you for the meetings, the understanding, and the light side comments you gave at the start of each #lab-meeting. Thank you Julia O’Connor for the idea and Rachel Sutherland for correcting this essay.  

# Appendix 1: Laws of UX

(Yablonski, 2020)

1.	Aesthetic Usability Effect 
Users perceive aesthetically pleasing design as design that is more usable 
2.	Doherty Threshold
Productivity soars when a computer and its users interact in a way that ensures neither has to wait for the other
3.	Fitt’s Law
The time to acquire a target is a function of the distance to and the size of the target.  
4.	Hick’s Law
the time it takes to make a decision increases with the number and complexity of choices
5.	Jakob’s Law
Users spent most of their time on other sites. This means that users prefer your site to work the same way as all the other sites they know. 
6.	Law of Common Region
Elements tend to be perceived into groups if they are sharing an area with a clearly defined boundary
7.	Law of Pragnanz
People will perceive and interpret ambiguous or complex images as the simplest form possible. This requires the least cognitive effort. 
8.	Law of Proximity
Objects that are near or proximate to eachother tend to be grouped together 
9.	Law of Similarity
The human eye tends to perceive similar elements in a design as a complete picture, shape, or group even when those elements are separated. 
10.	Law of Uniform Connectedness
Elements that are visually connected are perceived as more related then elements with no connection. 
11.	Miller’s Law
The average person can only keep 7 (plus or minus 2) items in their working memory
12.	Occam’s Razor  
Among competing hypothesis that predict equally well, one with the fewest assumptions should be selected
13.	Pareto Principle
The pareto principal states that for many events, roughly 80% of the effects come from 20% of the causes 
14.	Parkinson’s Law
Any task will inflate until all of the available time is spent
15.	Peak-End Rule 
People judge an experience largely based on how they felt at its peak and at its end, rather than the average of every moment of the experience.  
16.	Postel’s Law
be liberal in what you accept, and conservative in what you send
17.	Serial Position Effect 
Users have a propensity to best remember the first and last items in a series. 
18.	Tesler’s Law
for any system there is a certain amount of complexity that cannot be reduced. 
19.	Von Restorff Effect
when multiple or similar objects are present, the one that differs from the rest is most likely to be remembered 
20.	Zeigarnik Effect
People remember uncompleted of interrupted tasks better than completed tasks 

<br>

# References

Andersson, G., Cuijpers, P., Carlbring, P., Riper, H., & Hedman, E. (2014). Guided Internet-based vs. face-to-face cognitive behavior therapy for psychiatric and somatic disorders: a systematic review and meta-analysis. World Psychiatry , 288–295.

Anxiety Canada Association. (2019). MindShift CBT - Anxiety Canada. Retrieved from Google Play: https://play.google.com/store/apps/details?id=com.bstro.MindShift&hl=en_CA

Biondi, M., & Picardi, A. (2003). Attribution of improvement to medication and increased risk of relapse of panic disorder with agoraphobia. Psychotherapy and Psychomomatics, 110-111.

Bohni, M. K., Spindler, Arendt, M., Hougaard, E., & Rosenberg, N. K. (2009). A randomized study of massed three‐week cognitive behavioural therapy schedule for panic disorder. Acta Psychiatrica Scandinavica.

Caglar, C. (2020). UI/UX Designer Tips. Retrieved from https://www.instagram.com/ux.cagla/?hl=en
Cognitive Behavioral Therapy Los Angeles. (2019). CBT for Panic Attacks: Panic Attack Treatment Without Medication. Retrieved from Cognitive Behavioral Therapy Los Angeles: http://cogbtherapy.com/cbt-for-panic-attacks

Fentz, H., Arendt, M., O'Toole, M., Hoffart, A., & Hougaard, E. (2014). The mediational role of panic self-efficacy in cognitive behavioral therapy for panic disorder: A systematic review and meta-analysis. Retrieved from Behaviour Research and THerapy: https://www.sciencedirect.com/science/article/abs/pii/S0005796714000849

Hayward, L., MacGregor, A., Peck, D., & Wilkes, P. (2007). The Feasibility and Effectiveness of Computer-Guided CBT (FearFighter) in a Rural Area. Retrieved from Cambridge University Press: https://doi.org/10.1017/S1352465807003670

JustInMind. (2020). Guide to creating user personas. Retrieved from JustInMind: https://www.justinmind.com/blog/user-persona/

Karras. (2019). This Person Does Not Exist. https://thispersondoesnotexist.com/.
Kazantzis, N., Deane, F. P., & Ronan, K. R. (2006). Homework Assignments in Cognitive and Behavioral Therapy: A Meta‐Analysis. Wiley Online Library.

Kenardy JA, D. M. (2003). A comparison of delivery methods of cognitive-behavioral therapy for panic disorder: an international multicenter trial. Retrieved from J Consult Clin Psychol.: https://doi.org/10.1037/0022-006X.71.6.1068

Klein, B., Richards, J., & Austin, D. (2006). Efficacy of internet therapy for panic disorder. Retrieved from Journal of Behavior Therapy and Experimental Psychiatry: https://doi.org/10.1016/j.jbtep.2005.07.001

Lam, T. (2016). 6 Steps in A Common UX Design Process. Retrieved from Prototypr.io: https://blog.prototypr.io/a-common-product-ux-design-process-55af4ab5665e

Magellan Health Inc. (n.d.). FearFighter - CCBT. Retrieved from App Store: https://apps.apple.com/us/app/fearfighter-ccbt/id1230258838

Queens University Health, Counselling and Disability Services. (2014). Your Best You: Managing your Anxiety. Retrieved from https://www.queensu.ca/studentwellness/sites/webpublish.queensu.ca.swswww/files/files/Counselling/Anxiety%20Workbook_To%20Print.pdf

Relaxio s.r.o. (2017). Daylio - Diary, Journal, Mood Tracker. Retrieved from Google Play: https://play.google.com/store/apps/details?id=net.daylio&hl=en_CA

Richards, J., & Klein, B. A. (2006). Internet cognitive behavioural therapy for panic disorder: Does the inclusion of stress management information improve. Clinical Psychologist, 2 – 15.

Rocket55. (2020). The Importance of User Experience. Retrieved from Rocket55: https://www.rocket55.com/lab-note/the-importance-of-user-experience/#:~:text=To%20put%20it%20simply%2C%20UX,most%20conducive%20to%20business%20success.

Sarris, J. O. (2014). Lifestyle medicine for depression. Retrieved from BMC psychiatry: https://doi.org/10.1186/1471-244X-14-107

Stald-Bolow, N. R., Jönsson, C., Grambye, E., & Ortiz, R. (2014). Fear Fighter Project: A context-aware solution for treating acrophobia. Retrieved from http://www.cse.chalmers.se/research/group/idc/ituniv/sider12/wp-content/uploads/stald-bolow_et_al_paper.pdf

Taylor, C. (2006). Panic disorder. Retrieved from BMJ: https://www.ncbi.nlm.nih.gov/pmc/articles/PMC1444835/

UXM. (2010). A step by step guide to scenario mapping. Retrieved from UXM: http://www.uxforthemasses.com/scenario-mapping/

Yablonski, J. (2020). Laws of UX. Retrieved from Laws of UX: https://lawsofux.com/








