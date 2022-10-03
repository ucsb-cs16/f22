---
layout: lab
num: lab03
ready: true
desc: "Crunching numbers: Loops and Functions"
assigned: 2021-10-18 12:00
due: 2021-10-25 23:59:00
---


# Collaboration policy 
* This lab must be completed with a pair partner. If you do not have a partner, use Piazza to find one or reach out to the primary TA for your section
* All work submitted for this lab should be your own and your pair partner's. Do not use code posted on the internet. If you are using any hints from a previous offering of this course that was posted publicly by a CS16 instructor, you must cite your source.

# Pre-lab prep
Watch this video on pair programming :<http://bit.ly/pair-programming-video> 
In the lab, plan to work with your partner using the style highlighted in the video


## Goals for this lab

In this lab you will get practice with:
* for loops and while loops
* calculating a series using for loops and if-else statements
* working with other data types (doubles)
* nested loops
* functions



## Step 0: Log on to COE/CSIL/ECI account, cd into `cs16`

Log into your CoE account on CSIL, open a terminal, and use `cd` to move into the `cs16` directory you created in a previous lab.

## Step 1: Find your lab03 repo on GitHub

You should have an empty repo on GitHub under the name `lab03-YOUR-GITHUB-ID`.   

Following the steps outlined in a previous lab, please use the SSH address to clone this repo, i.e.

```
git clone git@github.com:ucsb-cs16-f21/lab03-YOUR-GITHUB-ID.git
```

After that, you should have a directory under `cs16` called `lab03-YOUR-GITHUB-ID`.   Use the `cd` command to move into this directory:

```
cd lab03-YOUR-GITHUB-ID
```

You may want to practice moving between this directory and the parent directory a few times, and using the `ls` and `pwd` commands to understand
what is happening:

```
cd ..
pwd
ls
cd lab03-YOUR-GITHUB-ID
pwd
ls
```

Then, as a reminder, while in your `~/cs16/lab03-YOUR-GITHUB-ID` directory (remember that `~` stands for your home directory), use `ls -a` to see that while the directory 
may appear empty, there is a hidden folder called `.git` that marks this folder as a git repository (or repo for short):

```
$ ls -a
.  ..  .git
$
```

## Step 2: Create the `main` branch in your repo

Every git repo can have multiple *branches* of code; this is useful on  projects where there are multiple programmers collaborating on a solution.  Multiple branches allow for
different versions of the code to live side-by-side in a repository, and then be merged together at a later stage.

* Courses that involve group work (such as CMPSC 148 and/or CMPSC 156) may cover the use of git with multiple branches.
* However, in this course, to keep things simple, **we'll typically stick to just one branch** 

This single branch is sometimes called the *default branch*.
* Prior to October 1, 2020, the usual name for that branch was `master`.
* Starting October 1, 2020, GitHub started calling the default branch `main`

Not all `git` software is updated with this convention however.  Accordingly, when we clone a new repo, to align our local repo with GitHub,
our first step is to set the current branch to `main`, with this command (please type this now in your `~/cs16/lab03-YOUR-GITHUB-ID` directory:)

```
git checkout -b main
```

The `git checkout` command is the one that is used to switch from one branch to another, and the `-b` command says that we are creating a new
branch in our local repo.

For the time being, and probably throughout CS16, this is likely everything you need to know about branches (at least for the purposes of this course.)

Now we are ready to pull in some starter code.

## Step 3: Add a remote for starter code.

While in your `~/cs16/lab03-YOUR-GITHUB-ID` directory, type this command:

```
git remote -v
```

The `-v` here stands for `verbose`, and it means that the command will give lots of helpful information. The output should look like this:

```
$ git remote -v
origin	git@github.com:ucsb-cs16-f21/lab03-YOUR-GITHUB-ID.git (fetch)
origin	git@github.com:ucsb-cs16-f21/lab03-YOUR-GITHUB-ID.git (push)
$ 
```

Explanation:
* The word *remote* refers here to a Git repo that lives on some other computer; in this case, a GitHub.com server. 
* The output above shows that you have one *remote* called `origin` and it shows the URL associated with that name `origin`.  
* By convention, the name `origin` is used for the GitHub repo from which you cloned the current repo, i.e. the one that came after `git clone` in a previous step.

What we are doing to do next is add a second remote, called `starter`.  From this remote, you'll be able to pull in some starter code; your lab solution will involve
working with some of that starter code.

The starter code lives in this repo, which you can visit in a web browser to look at the starter code:
* <https://github.com/ucsb-cs16-f21/STARTER-lab03>

To add a remote for this repo, we'll use the ssh url, like this:

```
git remote add starter git@github.com:ucsb-cs16-f21/STARTER-lab03.git
```

To see if it worked, you can type the `git remote -v` command again. Output should look like this (with YOUR-GITHUB-ID replaced by your github id. 

```
$ git remote -v
origin	git@github.com:ucsb-cs16-f21/lab03-YOUR-GITHUB-ID.git (fetch)
origin	git@github.com:ucsb-cs16-f21/lab03-YOUR-GITHUB-ID.git (push)
starter	git@github.com:ucsb-cs16-f21/STARTER-lab03.git (fetch)
starter	git@github.com:ucsb-cs16-f21/STARTER-lab03.git (push)
$ 
```

Note that if the URLs are wrong for either the `origin` or the `starter` remotes, you can fix that by doing this command to remove a remote:
* `git remote remove origin` to remove the remote `origin`
* `git remote remove starter` to remove the remote `starter`

Then you can add the remote back with the correct URL, e.g.:
* `git remote add origin git@github.com:ucsb-cs16-f21/lab03-YOUR-GITHUB-ID.git`
* `git remote add starter git@github.com:ucsb-cs16-f21/STARTER-lab03.git`

This can be used, for example, if you accidently cloned the repo using the `https` url instead of the one that starts with `git@github.com` (which is the SSH based URL).

Assuming your remote for `starter` is now set up correctly, the next step is to pull in the starter code.

## Step 4: Pull in Starter Code

To pull in the starter code, use:

```
git pull starter main
```

Then use an `ls` command, and you should see new files in your directory.  That should look something like this:

```
$ ls
$ git pull starter main
remote: Enumerating objects: 10, done.
remote: Counting objects: 100% (10/10), done.
remote: Compressing objects: 100% (7/7), done.
remote: Total 10 (delta 2), reused 7 (delta 2), pack-reused 0
Unpacking objects: 100% (10/10), 2.45 KiB | 47.00 KiB/s, done.
From github.com:ucsb-cs16-f21/STARTER-lab03
 * branch            main       -> FETCH_HEAD
 * [new branch]      main       -> starter/main
$ ls
LICENSE  min2.cpp  min3v1.cpp  min3v2.cpp  README.md
$ 
```

With these files in place, you are ready to start coding.

If you don't see those files, go back through the instructions and make sure you didn't miss a step.


## Step 5: Solving the problems for this lab

This assignment consists of 3 problems, each of which is described below. The first one is worth 20 points each, and the last two are worth 40 points each. Each should be solved in its own file and all three must be submitted for full assignment credit. These exercises are inspired by the ones from the textbook (in Ch. 2 and Ch. 3) - but they are NOT the same, so follow the instructions for this lab carefully.

You will need to create <b>three files named `block.cpp`, `min4.cpp`, and `pi.cpp`</b>:
Each corresponds to one of the problems listed below, which make up this lab.

For a reminder on how to open and use a text editor to create and edit new source files, refer back to lab00.

For all the subproblems given in this assignment you must compile your code frequently (as you develop it), and test it extensively with as many inputs as you can think of.

<hr>

### Step 5a: Print a block

* Navigate to your `~/cs16/lab03-YOUR-GITHUB-ID` directory using the `cd` command
* Open a file called `block.cpp` using the `vim` editor you used for the previous lab.
* In that file, write a program that takes an input from a user for the number of rows and number of columns and prints out a block of characters that is based on these 2 parameters. The program should keep asking the user for input, and printing out the result, until the user enters zero for *either* of the input parameters.

A session should look <b><i>exactly</i></b> like the following example (including whitespace and formatting - note that there is no whitespace at the end of each of these lines), for all the different inputs and the output:

```
$ ./block
Enter number of rows and columns:
1 5
X.X.X.X.X.
Enter number of rows and columns:
2 2
X.X.
X.X.
Enter number of rows and columns:
2 5
X.X.X.X.X.
X.X.X.X.X.
Enter number of rows and columns:
10 5
X.X.X.X.X.
X.X.X.X.X.
X.X.X.X.X.
X.X.X.X.X.
X.X.X.X.X.
X.X.X.X.X.
X.X.X.X.X.
X.X.X.X.X.
X.X.X.X.X.
X.X.X.X.X.
Enter number of rows and columns:
0 1
```

Each string printed by the program should include a newline at the end, but no other trailing whitespace (i.e. extra space characters at the end of the line).

For this problem you have to use a for-loop, and a while or do-while loop. While loops are similar in that the code inside the body of the while is repeated as long as the while condition is true. We will talk about this more in lecture this week. Here is the syntax for a while loop:

```
while ('expression') {
	//Repeat these statements
}
```

'expression' should be replaced by the appropriate boolean expression. The body of the loop is executed as long as the expression is true. e.g.

```
int x = 5;
while (x > 0) {
	cout << x << " ";
	x--;
}
```
The above code prints 5 4 3 2 1.

To compile your code use the g++ command as in lab01 OR the simple make command.

`$ g++ -std=c++11 -o block block.cpp`

OR

```
make block
```

If you used the first option (`g++ ...`) note that the `-std=c++11` option in these commands is optional to use (that is, not critical to define). All this does is force the compiler to use the C++11 version of C++.

If you used the second option (`make...`) note that the make program is clever to compile only `block.cpp` into the `block` executable, even though there are other programs (cpp files) in that directory. Note that the C++11 compiler will not be used in the default make tool. But that should be okay for now.

<b>If you encounter an error, use the compiler hints and examine the line in question. If the compiler messsage is not sufficient to identify the error, you can search online to see when the error occurs in general.</b>

Run your executable as follows to test it out.
`$ ./block`

Remember to re-compile the relevant files after you make any changes to the C++ code.

Once your program works properly, you can use the commands in Step 6 to add the `block.cpp` C++ source code file to your repo.   Skip down to Step 6 for that
explanation, then return to Step 5b to continue with the next programming exercise.


### Step 5b: Calculate the approximate value of PI

Write a C++ program in a file named pi.cpp that approximates the value of the constant π. Once again you should not resort to using predefind constants and functions for π, that are provided by C++ standard libraries. Instead you should compute the value of π based on the Leibniz formula for π. The formula is given below:

```
 1 – 1/3 + 1/5 – 1/7 + 1/9 ...  = pi/4
```

Put another way, the formula can be written as:

```
pi = 4 · [ 1 – 1/3 + 1/5 – 1/7 + 1/9 ... + (–1 ^ n)/(2n + 1) ]
```

The Leibniz formula works well for high values of n.

The program takes an input from the user for the value of n, which determines the number of terms in the approximation of the value of pi. The program then outputs the approximated value of pi as calculated by the Leibniz formula. You must also include a loop that allows the user to repeat this calculation for new values of 'n' until the user says she or he wants to end the program by issuing an input of -1 (or any other negative number). You may assume that the user always inputs an integer.

The program should print a string of text to the terminal before getting each piece of input from the user. A session should look like the following example (including whitespace and formatting - note "term" in the output below is not plural when using 1, but is plural in other cases for example), showing the expected output for different inputs:

```
Enter the value of the parameter 'n' in the Leibniz formula (or -1 to quit):
0
The approximate value of pi using 1 term is: 4.000
Enter the value of the parameter 'n' in the Leibniz formula (or -1 to quit):
3
The approximate value of pi using 4 terms is: 2.895
Enter the value of the parameter 'n' in the Leibniz formula (or -1 to quit):
9
The approximate value of pi using 10 terms is: 3.042
Enter the value of the parameter 'n' in the Leibniz formula (or -1 to quit):
49
The approximate value of pi using 50 terms is: 3.122
Enter the value of the parameter 'n' in the Leibniz formula (or -1 to quit):
99
The approximate value of pi using 100 terms is: 3.132
Enter the value of the parameter 'n' in the Leibniz formula (or -1 to quit):
999
The approximate value of pi using 1000 terms is: 3.141
Enter the value of the parameter 'n' in the Leibniz formula (or -1 to quit):
9999
The approximate value of pi using 10000 terms is: 3.141
Enter the value of the parameter 'n' in the Leibniz formula (or -1 to quit):
-1
```
Be sure to have a newline after each "Enter the value..." prompt and no other white spaces.

Here is a link that gives the approximated values of pi for up to 1000 terms: [http://www.eveandersson.com/pi/gregory-leibniz](http://www.eveandersson.com/pi/gregory-leibniz)

In addition, all approximated floating pointer numbers must be displayed to exactly three digits after the decimal point. To do this you should use set the precision for displaying floating point numbers before any of the cout statements in your code. This is done as follows:

```
cout.setf(ios::fixed); 	   // Display in fixed point notation. For example, display 1e-1 as 0.1
cout.setf(ios::showpoint); // Always display the decimal point.
cout.precision(3);         // Set the number of digits to display after the decimal point to 3
```
To calculate x to the power of y, use the pow(x,y) function from the standard library. To do this you will need to include the header file: cmath

<hr>

Upload your files to your repo on github using github's web interface. (You will need to be on a csil machine and not remotely logged in to do this step)

### Step 5c: Calculate the minimum of 4 numbers

In this part of the lab you will write a program that compares 4 input numbers and prints out the smallest one.

**You should not use the *min()* function in C++ algorithm library or any other outside function that performs the minimum operation for you. Instead, you should base the program on the example programs provided to you that compare fewer inputs.**

Start by examining the given examples, also described below:

<b>min2.cpp</b>

This program takes two command line arguments, and converts them to integers. It then calls a function, smallest_of_two, that returns the smallest of the two numbers (or the value they share in case of a tie.) It then prints out the result of that function call.

<b>min3v1.cpp</b>

This is the first of two versions of a program that takes min2.cpp one step further, finding the smallest value from among three numbers. Again, if there is a tie, it prints the tie value. Look at the nested if/else statements and see if you can make sense of the logic. Seek help if you don't.

<b>min3v2.cpp</b>

This program does EXACTLY the same thing as min3v1.cpp, but does it with much cleaner, simpler code. Notice how we REUSE the smallest_of_two function to build up a smallest_of_three function.

Your job in this step is to test min2, min3v1 and min3v2 with many different values and convince yourself that they work properly.

In the next step, you will be taking these programs to the next logical step in this sequence.

<b><i>Your main task</i></b>: Write min4.cpp

* Write a program that works just like min2 and min3v1 and min3v2, except it takes four ints on the command line, and prints the smallest value, handling ties appropriately.

* We encourage you to follow the model of min3v2.cpp if you can understand how this works, since your code will be far cleaner than trying to build this out of nested if/else statements.

If you DO use nested if/else statements, though, be sure that you indent and format your code appropriately.

Follow the pattern in min2 and min3v1/min3v2 in terms of all other issues and how they are handled, including the usage message, etc. Your program should look **exactly** like these except that it works on 4 inputs (note, there are no trailing whitespacse):

```
./min4
Usage: ./min4 num1 num2 num3 num4
 Prints smallest of the four numbers
```
Here is the output of the program with the correct number of inputs:

```
$ ./min4 3 4 5 6
3
```
Here are two more example runs:

```
$ ./min4 92 35 12 17
12

$ ./min4 92 -35 12 17
-35

```

To compile your code use the g++ command as before.

`$ g++ -std=c++11 -o min4 min4.cpp`

Run your executable with different inputs to test it out.

Upload your files to your repo on github using github's web interface.

## Step 6: Commit your code to GitHub

When each of your programs is done, you can commit your code to GitHub.

You can wait until all three are finished, but you are encouraged, instead, to do this one by one as each program is complete.

For example, to commit the program `block.cpp` to GitHub, use these steps:


| Step | Command to type | What is happening |
|------|-----------------|-------------------|
| 1.   | `git add block.cpp`. | This adds the file `block.cpp` to something known as the *staging area*.  This prepares the file to be added to our git repo. |
| 2.   | `git status` | This command shows us the current status of our repo.  We should see that the file `block.cpp` appears in green, as a file "to be committed". |
| 3.   | `git commit -m "add block.cpp to repo"` | This commits the files in the staging area to the local repo on CSIL.  The `-m` stands for message, and the part in the quotes is the message.  Every commit has a message to our future selves and to other programmers about what we were doing when we made this commit.  Learning how to write good commit messages is an important skill. |
| 4.   | `git push origin main` |  This pushes the changes from our local repo on CSIL to the original repo that we cloned (i.e. `origin` on github.com |
{:.table .table-sm .table-striped .table-bordered}

You can repeat the steps above for the files `pi.cpp` and `min4.cpp` as/when you have them ready.

Note that if you subsequently make changes to any of the files `block.cpp`, `pi.cpp` or `min4.cpp`, the process to update GitHub *is the same*&mdash;that is, you still use `git add filename.cpp` when you want `git` to pick up changes to files that are already in the repo.

At any time, you can type the `git status` command and it will help you determine which files, if any, are out of date in your repo. For each out of date file, the sequence `git add filename.cpp`, then `git commit -m "message goes here"` then `git push origin main` should get the changes published to your GitHub repo.

You can visit your repo at any time by logging in to GitHub, and visiting <{{site.github-org-url}}>, where you should see it in the list of repos to which you have access.  If you don't see it there, ask the staff for assistance.


## Step 7: Submit your code on gradescope

Once you are satisfied that your program is correct, then it's time to submit it.

Log into your account on [https://www.gradescope.com/](https://www.gradescope.com/) and navigate to our course site: CMPSC 16.  Select this assignment. 

Then click on the "Submit" button on the bottom right corner to make a submission. You will be given the option of uploading files from GitHub.

You should receive 100/100 for a set of completely correct programs, and partial credit if one or two of the three is correct.

If any errors are shown, you can address that with this sequence of steps:
* Go back to edit the file with `vim filename.cpp` and make the needed changes
* Recompile with `make filename`
* Test interactively by running `./filename` 
* Use this sequence of steps to update GitHub:
  * `git add filename.cpp`
  * `git commit -m "message goes here explaining what you did"` 
  * `git push origin main`
* Resubmit on Gradescope from your GitHub repo.

## Step 8: Done!<a name="done"></a>

If you are logged in remotely, you can log out using the exit command:

`$ exit`

## Grading rubric

Though it does not apply to this lab, in future weeks, in addition to the points given by gradescope, our staff will be manually grading your code for style.   So you may want to look over your code for the following items.

Code style, includes but is not limited to the following:

1. Code can be easily understood by humans familiar with C++ (including both the author(s) of the code, and non-authors of the code.)
2. Code is neatly indented and formatted, following standard code indentation practices for C++ as illustrated in either the textbook, or example code given in lectures and labs.
3. Variable names choices are reasonable.
4. Code is reasonably "DRY" (as in "don't repeat yourself")&mdash;where appropriate, common code is factored out into functions.
5. Code is not unnecessarily or unreasonably complex when a simpler solution is available.

If you'd like feedback on your coding style, you may ask one of the staff during discusssion section or office hours.



