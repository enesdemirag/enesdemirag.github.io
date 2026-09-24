---
title: "Symbolic Programming"
---

Symbolic programming is a programming paradigm in which the program can manipulate its own formulas and program components as if they were plain data. This medhod can help us solve many problems easily. Let me explain this consept with two example problems. 

### Heat Transfer
Heat transfer is a discipline of thermal engineering that concerns the generation, use, conversion, and exchange of thermal energy (heat) between physical systems.

<p align="center"><img src="https://www.onlinemathlearning.com/image-files/xspecific-heat-capacity.png.pagespeed.ic.aKrNOuBNTl.webp" width="300"/></p>

Ideally, given heat from one matter is equal to received heat from other. Using this approach and with the help of _**Specific Heat Capacity Formula**_ we can calculate the final (equilibrium) temperature when two different matter touch each other.

One way to find the final temperature value we can use below formula.

<table style="width: 393px;" border="0" cellspacing="0" align="center">
<tbody>
<tr>
<td style="width: 57px;" align="center" nowrap="nowrap">Final Temperature</td>
<td style="width: 16px;" align="center" nowrap="nowrap">=</td>
<td style="width: 139px;" align="center" nowrap="nowrap">
<table border="0" cellspacing="0">
<tbody>
<tr>
<td align="center" nowrap="nowrap">
<div>
<div>m1.c1.t1 + m2.c2.t2</div>
</div>
</td>
</tr>
</tbody>
</table>
<div class="hrcomp"><hr noshade="noshade" size="1" /></div>
<table border="0" cellspacing="0">
<tbody>
<tr>
<td align="center" nowrap="nowrap">
<div>
<div>m1.c1 + m2.c2</div>
</div>
</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>

But this classical approach is so easy to write.

Instead, we will use symbolic programming using Python's [SymPy](https://www.sympy.org/) package.

SymPy are capable of computing symbolic expressions with variables. Using symbolic programming we can we can solve problems like this. You can learn more about sympy from [this tutorials](https://docs.sympy.org/1.5.1/tutorial).

Here is the python code uses **Classical Approach**.

```python
class Matter(object):
    def __init__(self, mass, constant, temperature):
        self.mass = mass
        self.c = constant
        self.temp = temperature

def heatTransfer(m1, m2):  # Find equilibrium temperature
    # equilibrium = (m1*c1*t1 + m2*c2*t2) / (m1*c1 + m2*c2)
    equilibrium = (m1.mass * m1.c * m1.temp + m2.mass * m2.c * m2.temp) / (m1.mass * m1.c + m2.mass * m2.c)
    return equilibrium

hot_water = Matter(6, 1, 85) # Matter 1
cold_water = Matter(8, 1, 10) # Matter 2

t_balance = heatTransfer(hot_water, cold_water)
print(t_balance)
```

And here is the python code using **Symbolic Programing Approach**.

```python
class Matter(object):
    def __init__(self, mass, constant, temperature):
        self.mass = mass
        self.c = constant
        self.temp = temperature

m1 = Matter(6, 1, 85) # Matter 1
m2 = Matter(8, 1, 10) # Matter 2

# Import sympy
from sympy import *
# Define symbols
T = symbols('T') # T = equilibrium

# Q1 - Q2 = 0
q1 = m1.mass * m1.c * (T - m1.temp)
q2 = m2.mass * m2.c * (m2.temp - T)

e =  solve(q1 - q2, T) # Returns a list of rational number solutions

print(e[0].evalf()) # Print float value of first (and only) solution
```

### Line Intersection

In a 2D space, there are 3 ways how 2 lines interact with each other.

They can be parallel, which means they preserve the same distance apart every point and never cross. They can be intersecting in one point. Or they can be the same line, have same points in everywhere.

Write a program to find intersection point of two different lines in 2D space. If they are parallel, return None.

We can use also use Python's [SymPy](https://www.sympy.org/) package. It even has built-in Point and Line classes that we can use.

There are two ways to represent a line, using a point on the line and the slope of line, or using two different points on the line. We will use two points.

Implementing the **Classical Formula** can be like this.

<figure><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/c51a9b486a6ef5a7a08b92d75e71a07888034a9a"></figure>

```python
class Point(object):
    def __init__(self, x, y):
        self.x = x
        self.y = y

class Line(object):
    def __init__(self, point1, point2):
        self.p1 = point1
        self.p2 = point2

line1 = Line(Point(-3, 0.5), Point(1, 1))
line2 = Line(Point(-2,-5), Point(3, 3))

def findIntersection(l1, l2):
        x1, y1, x2, y2 = l1.p1.x, l1.p1.y, l1.p2.x, l1.p2.y
        x3, y3, x4, y4 = l2.p1.x, l2.p1.y, l2.p2.x, l2.p2.y
        
        px = ((x1*y2-y1*x2)*(x3-x4)-(x1-x2)*(x3*y4-y3*x4)) / ((x1-x2)*(y3-y4)-(y1-y2)*(x3-x4))
        py = ((x1*y2-y1*x2)*(y3-y4)-(y1-y2)*(x3*y4-y3*x4)) / ((x1-x2)*(y3-y4)-(y1-y2)*(x3-x4))
        return px, py

x, y = findIntersection(line1, line2)
print(x, y)
```

Here using **SymPy** can be just that easy.

```python
from sympy import Point, Line

line1 = Line(Point(-3, 0.5), Point(1, 1))
line2 = Line(Point(-2,-5), Point(3, 3))

intersect = line1.intersection(line2)
print(intersect)
```