---
title: "Assignment 1 Solutions"
---

Part 1

Q1. 
Solution:

Every Inner product needs to satisfy the following properties:

1. Positivity
2. Definiteness
3. Additivity
4. Homogeneity
5. Symmetry

Q2

{% highlight ruby %}
import numpy as np
from math import hypot

def _givens_rotation_matrix_entries(a, b):
    r = hypot(a, b)
    c = a/r
    s = -b/r
    return (c, s)

def rq_de(Q,R):
	R = np.flipud(R.T)
	return R[:, ::-1], Q.T[::-1, :]

def givens_rotation(A):
    (num_rows, num_cols) = np.shape(A)

    Q = np.identity(num_rows)
    R = np.copy(A)

    (rows, cols) = np.tril_indices(num_rows, -1, num_cols)
    for (row, col) in zip(rows, cols):

        if R[row, col] != 0:
            (c, s) = _givens_rotation_matrix_entries(R[col, col], R[row, col])

            G = np.identity(num_rows)
            G[[col, row], [col, row]] = c
            G[row, col] = s
            G[col, row] = -s

            R = np.dot(G, R)
            Q = np.dot(Q, G.T)

    return rq_de(Q, R)

A = np.array([[6, 5, 1],
			  [5, 1, 4],
			  [0, 4, 3]])

print("Original matrix : ")
print(A)

(Q,R) = givens_rotation(A)

print ("R:")
print(R)
print("Q:")
print(Q)
{% endhighlight %}



Part 3
Q1

![alt text](https://raw.githubusercontent.com/AnuragSahu/Research_In_Progress/master/screenshots/a1p3q3.jpg)

Q3

{% highlight ruby %}
import numpy as np
import matplotlib.pyplot as plt
import matplotlib as mplb

fig = plt.figure()
ax = fig.add_subplot(111)
u = np.linspace(-3,3,50)
x ,y = np.meshgrid(u,u)
z = x**2 - y**2
ax.contour(x,y,z)
Ex,Ey = np.gradient(z)
Ex = - Ex
Ey = - Ey
 
ax.quiver(x,y,z,Ex,Ey)
plt.show()
{% endhighlight %}

Part 2

Q1

$$
\left(\begin{array}{cc} 
0.8944272 & 0.4472136\\
-0.4472136 & -0.8944272
\end{array}\right)
\left(\begin{array}{cc} 
10 & 0\\ 
0 & 5
\end{array}\right)
$$ 