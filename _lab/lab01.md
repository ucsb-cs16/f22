---
desc: Getting started
assigned: 2022-09-29 13:00
due: 2022-10-06 14:00
layout: lab
num: lab01
ready: true

---


# Which Computer Should I Use

* If you have your own laptop, that's fine: just use that for today.  Students with their own laptops may like to use the round tables at the back of the room.  You are also welcome to use the other places if those are all full, or you just like sitting closer to the front.
* If you don't have your own laptop, there are 21 desktop computers you can use, but for those, you need a College of Engineering Account.
  * Set up your account here: <https://accounts.engr.ucsb.edu/create>

# What we are working on today

* You'll be introduced to the primary TA for your section, and the TAs/LAs helping them out.
* Then, please try your CSIL/ECI account if you haven't already 
  * If you already logged in to any of the desktop machines in Phelps 3525, you've already verified that your CSIL/ECI account works.
  * If you haven't, try the commands in the section `CSIL/ECI Account` below.  
  * This is preparation for next week's lab.
* Then you have a choice between a two activities:
  * Getting a head start on next week's lab by:
    * Learning some basic vim commands by playing this game: <https://vim-adventures.com/>
    * Then trying your hand at creating and compiling a "Hello World" program on your CSIL/ECI account.
  * Or: just continue working in the zyBook where you left off.
* If the TAs/LAs are not busy helping students with CS16 questions, you may also just ask your TAs/LAs general questions about the course, about Computer Science, and about UCSB; but please give priority to students with questions about CMPSC 16 material.

# Will every week be like this?

No!  Some weeks we'll ahve specific activities outside the zyBook that *only* take place during your discussion seciton.

Accordingly:
* You should participate during your assigned discussion section time.  
* You are encouraged to come in person if you can, but you may also participate over Zoom if you are unable to do so (e.g. due to quarantine, Covid symptoms, or other issues). We'll use the zoom link for office hours for this purpose: <https://bit.ly/cs16-f22-zoom-office-hours>

# Why you need to come to your assigned discussion section

With such a large number of students, we need to be sure that there is an appropriate number of staff deployed to help you.  If everyone just comes to "whatever discussion section suits their schedule", we'll have problems.

If you have a standing conflict with your section, please use the "Section swap request" discussion on Piazza to find someone to switch with.

<hr />

# CSIL/ECI Account

If you are using the desktop machines in Phelps 3525, you are already using your CSIL/ECI account; a terminal window there is a "CSIL/ECI account shell prompt".

Otherwise:
* On Windows, you can use Powershell
* On MacOS, use Terminal
* On a Linux system, use any terminal prompt
* For other systems, e.g. ChromeOS, ask a staff member for help in finding an ssh option for your platform.

At the command prompt, type the following, substituting your ECI/CSIL account in place of `username`

```
ssh username@csil.cs.ucsb.edu
```

The first time you connect, you may be presented with a one type prompt saying that the "credentials could not be verified", and asking a Yes/No question. Say "Yes".

Then, you are in.  You can use `pwd` and `ls` commands as shown in lecture, plus other Unix commands such as `vim` and `make`.

The command `logout` or `exit` can be used to return to your own system.

# Editing and compiling a Hello World program on ECI/CSIL

First, learn about vim, perhaps using one of these resources:

* <https://vim-adventures.com/> Learn vim while playing a game in your browser
* Intro articles about vim:
  * vim overview: <https://ucsb-cs16.github.io/topics/vim/>
  * vim basic eight commands: <https://ucsb-cs16.github.io/topics/vim_basic_eight/>
  * vim customization: <https://ucsb-cs16.github.io/topics/vim_customization/>

Then, to create a `Hello World` program in vim:

1. Type `vim hello.cpp`
2. Make sure you are in insert mode (you'll learn about that when you learn about vim)
3. Type in your program, e.g.
   ```cpp
   #include <iostream>
   using namespace std;
   
   int main() {
     cout << "Hello, World!" << endl;
     return 0;
   }
   ```
4. Press the escape key, then type `:wq` to save.
5. To compile the program: `make hello`
6. To run the program `./hello`

There is nothing to turn in *this* week, but next week, you'll be asked to show that you know how to do this with a live demo either during office hours, or during your discussion section.  So, practicing this week is good preparation.

# Will we always use vim? No!

We will pivot to using a better editor, VS Code, once we understand the basics of using `vim`.  However, we want to start with `vim`, because it is an essential skill for computing professionals, especially if you will be involved in Cloud Computing systems, backend web servers, Docker containers, etc.

# What if I'm completely stuck on this vim / ECI stuff?

No worries; you can ask the staff for help.  In the meantime, if you prefer, you can just make progress in the zyBook, up through Chapter 7.

Everything below this line is for TAs/LAs.  Students are welcome to read it&mdash;there are no secrets here&mdash;but you don't really need to.

# Instructions for Primary TA:

1. Try to arrive 10 minutes before the hour if possible.  If that isn't possible, because of your schedule, try to make sure at least one of your helpers for your section can commit to doing so.

2. Preparation: write  URL on the whiteboards around the room: 
   ```
   CS16 09/29: Instructions are here: https://ucsb-cs16.github.io/f21/lab/lab00
   ```
   
   Then, on one of the whiteboards, write "Login Problems (put your name here)", underline it, and leave space for students to put a list of names.  This will be a place for students having login problems to list their names and form a queue so you can help them.
   
   Finally, write 
   ```
   To create ECI account: https://acccounts.engr.ucsb.edu/create
   ```
   
   Then, write your name, and the names of your helpers on the whiteboard.  For example:
   
   ```
   CS16 2pm
   Primary TA: Vinothini
   Assisting: Alex (TA), Zack (LA)
   ```
   
   or
   
   ```
   CS16 3pm
   Primary TA: Alex
   Assisting: Vinothini (TA), Zack (LA)
   ```
  
   
   
3. Announce something like the following.  You may tailor it to your own style.

   Welcome to the discussion section for CS16.  
   
   If you brought your own laptop, you may like to use the round tables in the back.
   
   If you did not, there are 21 computers you can use; you'll need your College of Engineering account and password for those.
   If your username/password doesn't work, write your name

   My name is `____` and I'll be the primary TA for this sesssion.  I'll be assisted by  `____`  (introduce your helpers).
   
   Today we'll be working on lab00, and you can find the URL for that on the whiteboards.
   
   In future weeks, there may be activities that involved interacting with each other, and with the LAs/TAs, so please do continue to come to discussion section each week, either in person, or online.
   
   For today, though, we'd like you to just work in the zyBookL
   * You can go back to parts you had questions about and ask the TAs/LAs
   * Or you can just work ahead, starting from whereever you left off last.

   Before you get started, I'd like to tell you a little about myself, and ask the other helpers to do the same.
   
4. Then, share your name, what degree program you are in (e.g. BS, MS, PhD, and your major), a bit about your interests.

   Briefly mention any industry internships you may have had (students are very interested in this), and any professors/research areas, you may have worked
   with in the past, or are working with now. 
   
   You can also talk briefly about interests outside of computing if you like.  But keep it short: about 2 minutes each.

5. Then say: ok, let's get started.

   Then, help students with whatever problems they are having working on the labs.
   
6. At 45 minutes after the hour:

   Announce: Please start to finish up, since we have a full room of students in the next section.  
   
   (Or: if it's 8:50pm, announce: "In 5 mintues we need to start locking up the room so we can go home!")
 
7. At 50 minutes after the hour, announce:  Please save your work, put away your things, and go get some fresh air so the next class has a place to work.

    And then start going around student by student, and sort of shepherding them out of the room.
    
    If you yourself, have to be somewhere at the top of the next hour, enlist the help of the next set of TAs/LAs.

