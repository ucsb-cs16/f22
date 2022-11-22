---
layout: lab
num: lab08
ready: true
desc: "Recursion"
assigned: 2020-03-03 09:00:00.00-8
due: 2020-03-10 23:59:00.00-8
---

# Goals of this lab

The goal of this lab is get more practice with recursion, linked-lists, and string functions. Continue to practice code tracing to reason about your code. We request that you DO NOT ask the staff to debug your code. They have been specifically instructed not to debug for you, rather to guide in the process.

You are also required to apply the style guidelines as described in this presentation: [link to style guide](https://docs.google.com/presentation/d/16ExuzjlRWClQe-GbX_FNYKsSJnrd0Z5ef7N1c0sezUA/edit?usp=sharing)

If you are using a style different from what is recommended and feel strongly about continuing in that style, you may include a note as a comment in the README of your project explaining the rationale behind your choices. Cite any sources as relevant.

If you are using any instructor written code or hints from a previous offering of this course, cite your source. Remember that code that is not written by you is in violation of the academic honesty for this class.


# Step by Step Instructions: PLEASE READ CAREFULLY!

## Step 1: Getting Started

1. Decide if you are working alone, or working in a pair. Pair programming is OPTIONAL for this lab.

2. Choose who will be the first driver and who will start as navigator, and then remember to switch (at least once) during the lab.

3. Go to github and create a git repo for this lab following the naming convention specified in previous labs (this step carries style points, see our feedback on previous labs to understand what we are looking for). If you are working with a partner only one of you needs to create the repo.

4. If you are working with a partner and you are the one who created the github repo, add your partner as a collborator on the repo

5. Decide on initial navigator and driver.

6. Driver, log on to your CSIL account.

7. Open a terminal window and log into the correct machine.

8. Change into your CS 16 directory

Note: Remember to push your work to github at the end of EVERY work session. That way, both partners always have access to the latest version of the code even if the code is being developed on one partner's CoE account.



## Step 2: Obtaining the starter code

* Navigate to your cs16 directory and clone the git repository you created
```
git clone git@github.com:ucsb-cs16-mirza/lab08_alily_jgaucho.git
```
* cd into this new directory
```
cd lab08_alily_jgaucho
```

* Copy the starter code by typing the following command:

```
cp /cs/faculty/dimirza/cs16/labs/lab08/* ./
```

Typing the list (ls) command should show you the following files in your current directory

```
[dimirza@csil-03 lab08-startercode]$ ls
Makefile   linkedListFuncs.cpp  linkedListTest.cpp        spliceTest.cpp  strFuncs.h   sumTest.cpp   tddFuncs.h
README.md  linkedListFuncs.h    removeKFromFrontTest.cpp  strFuncs.cpp    strTest.cpp  tddFuncs.cpp
[dimirza@csil-03 lab08-startercode]$
```


## Step 3: Reviewing the files and what your tasks are

Here is a list of your tasks for this lab:

### Step 3a: Familiarize yourself with the big picture

Type "make tests" and you will see some tests pass, but some fail. Note: if you get a warning about comparing signed and unsigned integers, please ignore it.

You are finished when all the tests pass. You will need to edit two files: <code>linkedListFuncs.cpp</code> and <code>strFuncs.cpp</code>

Please note that this lab may be more difficult than the previous labs you have worked on. Don't be afraid to ask questions on Piazza and attend open lab hours.

### Step 3b: Work on the linked list and string functions

Please note that all of these functions **must** be written recursively. You will not get credit if you implement them iteratively.
There are 4 functions you will need to write for this lab, one of which is a bonus:


In strFuncs.cpp:
- **Recursively check if a string is a palindrome**
  - A palindrome is a word or phrase that reads the same backwards & forwards 
  - Palindromes **are not** case-sensitive - disregard spaces as well
  - Examples
    - *Noel sees Leon* reads *noeL sees leoN* backwards, and as we disregard spaces and capitalization, it is a palindrome
    - *HelloN* reads *olleH* and is not a palindrome
    
In linkedListFuncs.cpp:
- **Recursively delete k nodes from a linked list**
  - Given the head of a linked list, delete the first k nodes from the linked list
    - k will always be less than or equal to the length of the linked list
    - Return NULL if there are no nodes left after deleting.

- **Recursively find the sum of two linked lists**
  - Given two head nodes, return the head of a **new** linked-list where each element is the sum of the corresponding element of the other two
    - if one linked-list is shorter, fill the rest of the result with elements from the other (i.e., treat the non-existent nodes as a value of zero)
    - Do **NOT** change the values of the original linked list - you must make a new one
    -Examples
      - Linked List 1: 1 &rarr; 2 &rarr; 3 &rarr; 4 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Linked List 2: 5 &rarr; 6 &rarr; 7 
        - Output: 6 &rarr; 8 &rarr; 10 &rarr; 4 

- **Recursively find the kth Node of a linked list**
  - Given a head node and integer k, return the address of the kth node
    -You do not know whether the linked-list contains k or more nodes; if k is greater than the length of the linked-list, return NULL
    - Example: 
      - list:  2 &rarr; 3 &rarr; 4 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        - findKthNode(list, 1) = 2
        - findKthNode(list, 3) = 4
        - findKthNode(list, 4) = NULL


- **BONUS: Recursively splice together two linked lists**
  - This is a bonus problem; doing it is optional
  - Given two linked lists, splice the two linked lists together
    - Splice two linked lists by interweaving the nodes - the second linked list's nodes should be inserted at alternating positions into the first linked list
    - If the size of the two linked lists differ, after successfully splicing, finish the combined linked list with the remaining elements of the larger linked list
   - Examples
      - Linked List 1: 1 &rarr; 2 &rarr; 3 &rarr; 4 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Linked List 2: 5 &rarr; 6 &rarr; 7 &rarr; 8 
        - Output: 1 &rarr; 5 &rarr; 2 &rarr; 6 &rarr; 3 &rarr; 7 &rarr; 4 &rarr; 8

      - Linked List 1: 1 &rarr; 2 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Linked List 2: 3 &rarr; 4 &rarr; 5 &rarr; 6
        - Output: 1 &rarr; 3 &rarr; 2 &rarr; 4 &rarr; 5 &rarr; 6 
        
  - You CANNOT create another linked list - doing so will fail both the local tests and Gradescope tests. Instead, splice the lists together by rearranging the *next* pointers of each linked list. You are allowed to declare additional nodes, but the returned linked list should only contain nodes from each linked list, in some order. 
  
Each one has a set of tests which can be found under its corresponding heading when you type <code>make tests</code>. For example, the addIntToEndOfList tests look like this to start: 

```
./llTests 1
--------------REMOVE_K_NODES_FROM_THE_FRONT_OF_THE_LIST--------------
   FAILED: Remove 3 from front of 1->2->3->4->5
     Expected: 4 5  Actual:
```

You should replace each function stub with the correct code for the function until all of the tests for each one pass. It is recommended that you work on the functions one at a time in the order that they are presented above. That is, get all the tests to pass for addIntToStartOfList then addIntToEndOfList and so on. When all the tests pass, move on to the next step. 

## Step 4: Checking your work before submitting

When you are finished, you should be able to type  <code>make clean</code> and then <code>make tests</code> and see all of the tests pass.

At that point, you are ready to try submitting on gradescope.


## Step 5: Submitting via gradescope

Submit the strFuncs.cpp and linkedListFuncs.cpp files on gradescope. Make sure to add your partner as a collaborator if you had one.

# Grading Rubric

Most of the points will be awarded based on gradescope automatic grading. Other points will be assigned after visual code inspection by TAs - if a function is not implemented recursively, you will receive **NOT** receive any credit for that function at all.

The *splice* function is a bonus question - note that it is intended to be difficult. Although Gradescope will be display a score out of 110, your lab is only worth 100 points - should you successfully complete the bonus, you will receive 110/100. We will manually adjust the grades afterwards.

## Gradescope automatic points

<table border="1">
<tr><th>Test Name</th><th>Value</th></tr>
<tr><td><p style="color:green;margin:0;padding:0;">isPalindrome</p></td><td>(10 pts)</td></tr>
<tr><td><p style="color:green;margin:0;padding:0;">findKthNode</p></td><td>(10 pts)</td></tr>
<tr><td><p style="color:green;margin:0;padding:0;">removeKFromFront</p></td><td>(10 pts)</td></tr>
<tr><td><p style="color:green;margin:0;padding:0;">sum</p></td><td>(20 pts)</td></tr>
<tr><td><p style="color:green;margin:0;padding:0;">splice</p></td><td>(10 pts - BONUS)</td></tr>
</table>

## Code inspection human-assigned points

* (40 pts) Used recursion to implement every function.
* (10 pts) Code style, including but not limited to:
1. Code can be easily understood by humans familiar with C++ (including both the author(s) of the code, and non-authors of the code.)
2. Code is neatly indented and formatted, following standard code indentation practices for C++ as illustrated in either the textbook, or example code given in lectures and labs
3. Variable names choices are reasonable
4. Code is reasonably "DRY" (as in "don't repeat yourself")&mdash;where appropriate, common code is factored out into functions
5. Code is not unnecessarily or unreasonably complex when a simpler solution is available
6. Other guidelines as discussed in the style guide for this class: [link to style guide](https://docs.google.com/presentation/d/16ExuzjlRWClQe-GbX_FNYKsSJnrd0Z5ef7N1c0sezUA/edit?usp=sharing)
7. Fix any style issues (inconsistencies or other problems) in the starter code.

## An important word about academic honesty and the gradescope system

We will test your code against other data files too&mdash;not just these.  So while you might be able to pass the tests on gradescope now by just doing a hard-coded "cout" of the expected output, that will NOT receive credit.    

To be very clear, code like this will pass on gradescope, BUT REPRESENTS A FORM OF ACADEMIC DISHONESTY since it is an attempt to just "game the system", i.e. to get the tests to pass without really solving the problem.

I would hope this would be obvious, but I have to say it so that there is no ambiguity: hard coding your output is a form of cheating, i.e. a form of "academic dishonesty".  Submitting a program of this kind would be subject not only to a reduced grade, but to possible disciplinary penalties.    If there is <em>any</em> doubt about this fact, please ask your TA and/or your instructor for clarification.


