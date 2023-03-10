# Quadratic Equation Solver
## Description
This console application calculates the result of a quadratic equation, such as **ax^2 + bx + c = 0**. One of the conditions is that a != 0 and b and c are real numbers. This application supports two input modes interactive and non-interactive.

## Interactive input mode
In interactive mode, the application starts when no arguments have been passed to it. In this mode, the application asks to enter 3 coefficients in turn: a, b and c, displays the resulting equation on the screen and the found roots. To start interactive input mode, you need to write the following command:
```
$ node .\index.js
```
Result:
```
a = 1
b = 4
c = 3
Equation is: (1) x^2 + (4) x + (3) = 0
There are 2 roots
x1 = -1.0
x2 = -3.0
```
If the data was entered incorrectly, an error appears. Example:
```
$ node .\index.js
a = 0
Error. a cannot be 0
a = abc
Error. Expected a valid real number, got oi instead 
```
## Non-interactive input mode
In non-interactive mode, the program accepts one argument — the path to the file with the coefficients of the equation. The file contains 3 numbers: a b c separated by one space. A dot is expected as a decimal character. The last coefficient (c) is followed by a newline character (\n) and the file ends there.To start non-interactive input mode, you need to write the following command:
```
$ node .\index.js .\tests\test2.txt
```
Result:
```
Equation is: (-2) x^2 + (6) x + (8) = 0
There are 2 roots
x1 = -1.0
x2 = 4.0
```
If the data was entered incorrectly, an error appears. Example:
```
$ node .\index.js .\tests\test3.txt
Error. a cannot be 0
$ node .\index.js .\tests\test4.txt
invalid file format
$ node .\index.js .\tests\test6.txt
file .\tests\test6.txt does not exist
```
# [Revert-commit link](https://github.com/Illyakravchuk/Methodologies_lab1/commit/f4283e023ac6fdedf795ac02c251117c5cf160ec)

