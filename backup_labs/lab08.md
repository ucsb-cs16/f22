---
layout: lab
num: lab08
ready: true
desc: "Recursion"
assigned: 2022-11-16 13:00
due: 2022-11-23 14:00
---

<h3><span class="badge rounded-pill bg-primary">New</span> Hints!</h3>


## Goals for this lab


This lab will have you do programming exercises with C-strings, string class objects, recursive functions, and Makefiles. You will also get more practice writing programs from scratch with little skeleton code.

## Helpful things to review:

* For the `find` and `substr` function for working with C++ strings, see [zyBook Section 6.16](https://learn.zybooks.com/zybook/UCSBCMPSC16Fall2021/chapter/6/section/16)
* For linked lists, see [the video from 11/02](https://ucsb-cs16.github.io/f21/lectures/lect12/)
* For Makefiles, see [the video](https://gauchocast.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=79cd4753-20cc-4fd6-a4d4-ade2013e793b) and [the slides](https://docs.google.com/presentation/d/1-D-LByk2uNYYlDzLMzYJN5qaboc3L_kAtbQzkEsRJZc/edit#slide=id.g10044ac1284_0_501) from [11/09](https://ucsb-cs16.github.io/f21/lectures/lect14/) 
* For recursion, see the video and slides from [the lecture on 11/18](https://ucsb-cs16.github.io/f21/lectures/lect16/)

## Step by Step Instructions

### Step 1: Getting Ready

1. Go to github and find a repo for this lab assigned to your GitHub id.
2. Log on to your CSIL account.
3. Change into your `~/cs16` directory
4. Clone your empty lab06 repo into your `~/cs16` directory.
5. In your empty repo, do `git checkout -b main` to establish that you are on the `main` branch as your default branch.


### Step 2: Obtain the starter code

The starter code is in this repo:

* <https://github.com/{{site.github_org}}/STARTER-{{page.num}}>

The URL for cloning this repo is this: `git@github.com:{{site.github_org}}/STARTER-{{page.num}}.git`

Previous labs contain instruction for the process of:
* Adding a `starter` remote for this repo
* Pulling the code from that `starter` remote into your own repo.

Please do those steps now, and then do a `git push origin main` to populate your own repo with the starter code.

If you need help with these steps:
* First consult previous labs for more detailed instructions.   
* Then, if you are still having trouble, ask the staff for help during discussion section or office hours.

Once you've populated your repo, typing the `ls` command should show you the following files in your current directory

```
$ ls
linkedList.h            recLinkedListFuncs.cpp  strFuncs.h
linkedListFuncs.cpp     recLinkedListFuncs.h    tddFuncs.cpp
linkedListFuncs.h       strFuncs.cpp            tddFuncs.h
$ 
```

This lab will have you write two functions that are specified in `strFuncs.h` and two functions that are specified in `recLinkedListFuncs.h`. You must implement these functions in `strFuncs.cpp` and `recLinkedListFuncs.cpp`. 

You must follow the instructions carefully. It is not enough to pass the gradescope check as the instructor and the TAs *will* be checking your submitted code to make sure your solution is using recursion where required.  

* The functions in `strFuncs.cpp` may be implemented with either iteration or recursion, though you are encouraged to try to solve them with recursion.
* The functions in `recLinkedListFuncs.cpp` MUST be solved with recursion, or you will lose points.


For the `recLinkedListFuncs.cpp` functions, if you use an iterative solution (i.e. one that uses loops rather than recursion to solve the problem) you are missing the point of the assignment. S

So please do ask a staff member to check your solution during office hours or lab if you are not sure whether it qualifies.  (We will not accept requests over email or Campuswire to check solutions for recursion; you *must* come to either lab or office hours, either in person or via Zoom to request this check.)

### Program to find if two strings are anagrams

 In the file `strFuncs.cpp`, write a function called `isAnagram` that takes two strings as arguments and returns a boolean true if the two strings are anagrams, otherwise it returns false. 
 
 The function should not be case sensitive and should disregard any punctuation or spaces. Two strings are anagrams if the letters can be rearranged to form each other. For example, “Eleven plus two” is an anagram of “Twelve plus one”. Each string contains one “v”, three “e’s”, two “l’s”, etc. 
 
 Similarly "Rats and Mice" and "in cat's dream" are anagrams of each other (even though the apostrophe does occur in the string "Rats and Mice", and the uppercase/lowercase letters are different.
 
You may use any of the C-string library or string class functions to complete this code. You should follow a TDD style of coding where you write tests before writing your code. 
 
### Writing a helper function is strongly encouraged.

You may find the problem much easier to solve if you first 
write a helper function, perhaps with the name `simplifyString`  
that takes a string as a parameter, and then returns a new string where
all of the punctuation and spaces have been removed, 
and all of the letters have been converted to lowercase.

You can then use this function in both of your solutions: that is, the function `isAnagram` could 
first convert both of it's inputs to simplified strings, and then call a function `isSimpleAnagram` that
does the work of `isAnagram`, but can make the simplifying assumptions that there are no spaces or punctuation, and all letters are lowercase.

### Possible approaches

Let's see if the strings `I Am Lord Voldemort` and `Tom,marvolo,riddle` are anagrams. First, since the function is not case-sensitive and doesn't care about puctiation, we should do some work on the strings to bring them to the same format: use Lowercase characters and ignore puncutation. The strings become `iamlordvoldemort` and `tommarvoloriddle`. Then, we need to check if the cleaned strings contain the same characters - there are multiple paths we could take here. 
  
All of the approaches below depend on having cleaned the strings first, i.e. the strings have no
spaces or punctuation, and are converted to all lowercase.

**Approach 1:** Sort the strings based on characters' ASCII/Unicode values, and we expect the sorted strings to be exactly the same for anagrams.   (This is probably not the best approach if you want to try using
recursion, but it's a valid approach.)
  
**Approach 2:** Since you know that characters are all lowercase letters between 'a' and 'z', you could
count the characters in each of the two strings, and see if the counts match.
  
You can use two arrays of integers to count the number of occurences of each ASCII/Unicode value between
97 and 122.    You could define two arrays of 123 integers, and initialize all of the values in both to 
zero with:
  
```
int charCounts1[123]={0};
int charCounts2[123]={0};
```
(Remember that in C++, if an array initializer has fewer values than the array, the remaining value are set to zero, this initializes all values in both arrays to zero.)

You could then go through each string, and when you see a character, increment the character count
in the array based on the characters ASCII/Unicode value.

Finally, to tell whether the two strings are anagrams, count the occurences of each character, and then return true if all of the character counts match. 

**Approach 3**: Recursive approach.
  
For recursion, there are a few base cases:

1. If the strings are of unequal lengths, they are not anagrams of each other (return false)
2. If the length of both strings is zero, they are anagrams of each other (return true)
3. If the length of both strings is 1, they are anagrams of each other if they are equal (return true), otherwise return false.

Now, we get to the recursive step.

Take the first string, and divide it into the first character, and the rest of the first string.

Look inside the second string for the first character (you can use the C++ substr function for this.)

If the first character occurs inside the second string, then make a new string called "second rest", 
which is the second string, with the first character removed.

For example, if you are comparing `iamlordvoldemort` with `tommarvoloriddle`, you'll divide the first string into `i` and `amlordvoldermort`.  You'll see that `i` occurs in `tommarvoloriddle`, and you'll
remove `i` to get `tommarvolorddle`.   The recursive call is on `amlordvoldermort` and `tommarvolorddle`

Removing the character from the second string can be done with a combination of two functions:

* C++ `find`  function ([documentation here](https://www.cplusplus.com/reference/string/string/find/))
* C++ `substr` function ([documentation here](https://www.cplusplus.com/reference/string/string/substr/)) to pull apart the piece that comes before the character, and the part that comes after, and then `+` to concatenate them back together.

### Write your own test code and Makefile

Write your own test code in a separate file (you might call it `testStrFuncs.cpp` for example) and write a `Makefile` to compile all of your code.  Consult the Makefiles from previous labs, and the lecture notes on Makefiles to guide you in constructing your Makefile.    You may look at test code in previous labs to get an idea of how to write good test code.

You may find it helpful to consult the [slides from 11/09](https://docs.google.com/presentation/d/1-D-LByk2uNYYlDzLMzYJN5qaboc3L_kAtbQzkEsRJZc/edit?usp=sharing), particularly slide 11, that talks about the structure of a `Makefile`.   A few things to remember:

* Makefiles consist of targets, dependencies and recipes (see the slide)
* Remember that each target starts in the leftmost column, and is followed by a colon, and then a (possibly empty) list of dependencies.
* Remember that each "recipe" in the Makefile follows a target line, and must be on a line that starts with a "tab" character, not a sequence of spaces.

A few hints:

* A Makefile generally has a `clean` target like this (where `prog1` and `prog2` are names of executable programs).  Remember that the second line must start with a tab.

  ```makefile
  clean:
        /bin/rm -f *.o prog1 prog2
  ```

* A Makefile generally has an `all` target that has as it's dependency, all executable programs
  in the project.  For example:

  ```makefile
  all: prog1 prog2
  ```

* A Makefile then has rules to create `.o` file for any file that doesn't have a main program in it.
  For example, you'll want a rule like this to create `strFuncs.o`.  Here, `${CXX}` stands for the 
  name of the C++ compiler.

  ```makefile
  strFuncs.o: strFuncs.h strFuncs.cpp
       ${CXX} strFuncs.cpp -c 

  ```

* A Makefile needs a rule for any main program that relies on another .o file.  For example, if you
  write your own main program to test the functions in `strFuncs.cpp`, called `testStrFuncs.cpp`, you'll
  need rules such as these:

  ```makefile
  testStrFuncs.o: strFuncs.h testStrFuncs.cpp
       ${CXX} testStrFuncs.cpp -c

  testStrFuncs: testStrFuncs.o strFuncs.o
       ${CXX} testStrFuncs.o strFuncs.o -o testStrFuncs

  ```

This is not all you'll need in your Makefile; I haven't yet discussed what you'll need to do 
for the linked list functions, for example.  But it's a good start.

## Function to check if an input string is a palindrome

A palindrome is a word (or other sequence of characters) that read the same forwards and backwards (see [Wikipedia article](https://en.wikipedia.org/wiki/Palindrome).  For example: "redivide" is not a palindrome, while "detartrated" is a palindrome.  

Other examples of palindromes include "madam" and "racecar".

When asking whether a sentence is a palindrome, it it traditional to ignore case (`M` vs `m`), punctuation and spacing. Thus, the following sentences are palindromes:

* "Madam, I'm Adam."  (A person named "Adam" introduces himself, politely, to a woman.)
* "Able was I, ere I saw Elba".  (Attributed to the french leader Napolean, who suffered a military defeat at a place called Elba).

Think about what the base case is for a palindrome, and what the recursive step would be that moves you towards that base case.

In `strFuncs.cpp` you are asked to a function to check if a string is a palindrome.  Read the instructions in the file carefully to understand the constraints specified for the function. Ignore case when comparing characters of the string.  

```cpp
bool isPalindrome(const string s1);
```

The above function takes a C++ string as input and returns true if an input string is a palindrome and false if it is not. You can do this by checking if the first character equals the last character, and so on. 

Just as with the `isAnagram` function, it may help a lot to use a helper function (possibly the same one!) to return a cleaned string first, and do your palindrome checking on that string.

You may choose a recursive implementation in this case, although it is not required. If you chose a recursive implementation you may or may not choose to write one or more *helper functions*, where a helper function is one that would be called by `isPalindrome` (or another helper function) to help it compute its result (for example, `isPalindromeRecursive`)

There may be a way to do this without a helper function using the `substr` (substring) function appropriately in your recursive calls, but if having a helper function makes your solution easier, it's fine to take that approach.

## Possible approach

Dealing with a "raw" string with punctuation and a combination of upper/lowercase characters is hard. We recommend that you write a function to "clean" the string, and then call the recursive helper function to see if it is a palindrome.

This is a possible code block with a helper function:

```cpp
bool isPalindrome(const string s1) {
 // make a new string that is editable (the one passed in is constant)
 string myString;
 // assign myString to the cleaned up version of the parameter s1
 
 myString = ... // you decide what to write here.

 // call the recursive function
 bool isStringRecursive = isPalindromeRecursive(myString);
 
 // you decide what to return here.
}

bool isPalindromeRecursive(string s1) {
  // base case for when s1 has length <= 1.   What's the answer in that case?
  
  // Separate the string into the first character, the last character, and the rest.
  // Note that the "rest" might be the "empty string" if the length of the string is 2.

  // Compare the first and last characters.  If they don't match, you know the answer, so return it.

  // Otherwise, you'll want to make a recursive call on the rest 
  // (the part in the middle that excludes the first and last character.)  
  // Be sure you return the result!  Calling the function without returning the result is a common error.
}
```

### Program to recursively find the sum of elements of a linked list

```cpp
int recursiveSum(Node* head);
```

In `recLinkedListFuncs.cpp` you are asked to reimplement the sum function from [lab09](https://ucsb-cs16.github.io/f21/lab/lab09/), this time recursively. If there are no elements of the list, return the value 0;

Note that the sum of an empty list is zero, and a list is empty if it's head points to NULL.

A non-empty list has a first element, and the "rest of the list".  That should tell you what to do.

### Program to recursively find the largest value of a linked list

```cpp
int recursiveLargestValue(Node* head);
```

In recLinkedListFuncs.cpp you are asked to reimplement the largestValue function from [lab09](https://ucsb-cs16.github.io/f21/lab/lab09/) this time recursively. For this function, you may assume that the linked list contains at least one value. 

You will NOT want to do a recursive call of your `recursiveLargestValue` on a list that's empty.

So you need to ask: "how do I know if I have a list of just one element?"  If you have such a list,
you already know the maximum value, so just return it.

Otherwise, you can have a list with two or more elements. You can separate this into the first element,
and the rest of the list.  

* Suppose you compute the maximum value of the rest of the list, using recursion.
* Then you also have the value of the first item on the list.
* With those two values available, you should be able to compare those values and determine which one
  to return as the result of the function.

## Step 3: Turn in your code on Gradescope

Commit and push the latest version of your code on github

Then, submit all the code for this assignment on Gradescope via your github repo. Then visit Gradescope and check that you have a correct score.

* You must check that you have followed these style guidelines:

1. Indentation is neat, consistent and follows good practice (see below)
2. Variable name choice: variables should have sensible names.
   More on indentation: Your code should be indented neatly. Code that is inside braces should be indented, and code that is at the same "level" of nesting inside braces should be indented in a consistent way. Follow the examples from lecture, the sample code, and from the textbook.
3. Your solution to `isAnagram` and `isPalindrome` may use either an iterative or recursive approach, as you see fit.
4. However, Your solutions to the problems (e.g. `recursiveSum` and `recursiveLargestValue`) should use recursion. You will not receive credit otherwise (even if Gradescope marks your code as correct).  

<h2>
 <span class="badge rounded-pill bg-primary">
 New
 </span>
 Hints
</h2>

Here are a few hints that were posted to Campuswire on 11/30/2021.  I'm repeating them here so they get more visibility.

## My code works on CSIL but not on Gradescope

Under some conditions, your code may work perfectly on CSIL, but then you get this on Gradescope:

![image](https://user-images.githubusercontent.com/1119017/144485770-edcc567d-47d4-46a7-8be0-a38edb4526d5.png)

What this output literally means is that the Autograder was expecting to see a bunch of passed tests, but it didn't see those.  That's what the - signs mean in front of the lines of "missing output".

While there are a variety of reasons this *can* happen, the most common cause that I've seen in practice is one that is due to a limitation of the way that the autograder for this particular lab was written:

* The only two files from the student submission that are copied into the autograder are these two:
  - `recLinkedListFuncs.cpp`
  - `strFuncs.cpp`

Therefore, for Gradescope purposes, any helper functions that you write must be placed inside those two files.

If you put them into a separate file of helper functions, you can try, instead, moving those into `strFuncs.cpp` or `recLinkedListFuncs.cpp` as needed.

You may also need to define a function prototype (also known as a function definition) for your helper functions if they are used within `strFuncs.cpp` or `recLinkedListFuncs.cpp`  before they are defined.


Some students had problems because they defined their helper functions in separate `.h` and or `.cpp` files.  The solutions is to move the helper functions inside the two files listed above.  You may also need to put the function prototypes for those above the first place where they are used.

As an example: In some cases, students are getting errors such as these when running on Gradescope:

```
strFuncs.cpp:20:10: error: ‘recursiveIsAnagram’ was not declared in this scope
   return recursiveIsAnagram(s1, s2);
          ^~~~~~~~~~~~~~~~~~
```

The solution is to make sure that you have a function prototype such as: 

```
bool recursiveIsAnagram(string s1, string s2) ;
```

before the function where you call `recursiveIsAnagram`

## I don't understand how to write tests for my code

An example of what you might put inside the file testStrFuncs.cpp is something like this:

```
  ASSERT_EQUALS(true, isAnagram("cat","tar");
  ASSERT_EQUALS(false, isAnagram("cat","rat");
```

You'll need to do a `#include "tddFuncs.h" and you'll need to be sure that the makefile has a rule to compile `tddFuncs.cpp` into `tddFuncs.o`


You'll notice that inside of `tddFuncs.h` there are both these functions:

```
ASSERT_EQUALS(...)
ASSERT_TRUE(...)
```

You may use either one!  For example, you could write:

```
ASSERT_EQUALS(true, isAnagram("cat","tar"));
```

OR:

```
ASSERT_TRUE(isAnagram("cat","tar"));
```

You will also note that there are two different versions of each function, one in upper case and one in lower case.

For example:

```
void assertTrue(bool expression, std::string message="");
```
vs.

```
#define ASSERT_TRUE(expression) 
```

The `ALL_CAPS` versions are actually not functions, but something called *macros*.  They work similar to functions, but with a kind of "copy/paste" logic.   The easiest way to explain it is with an example.

If you use the lower case version, you'd have to write something like this:

```
assertEquals(true, isAnagram("tar","rat"), "isAnagram(\"tar\",\"rat\")");
```

And that's really kind of inconvenient.  You see how you have to write the function call twice: once as a real function call, and a second time as a string.

But, with the all caps version, you can just write:

```
ASSERT_EQUALS(true, isAnagram("tar","rat"));
```

and it will automatically convert it into the lowercase version!   This is done with the macro definition in tddFuncs.h:

```

#define ASSERT_EQUALS(expected,actual) assertEquals(expected,actual,#actual)
```

The syntax `#actual` is a special syntax that can only be used inside macro definitions; it turns regular code into a C++ string literal.  


