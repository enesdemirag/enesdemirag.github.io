---
title: "Introduction to Neural Networks & Deep Learnings"
---

*This is reffered from the Free Online Book (Michael A. Nielsen, "Neural Networks and Deep Learning")
- It starts off with the problem of understanding the Visual Cortex System, And produces to solve the problem of Optical Character Recogition. How a human would recognise the digit "9" it has a loop on the top and a vertical stroke in the bottom right, althouth this is difficult to code this approach, so how would you recogise it. Neural networks take a different approcach, It take a large number of handwritten digits ("Popularly termed as training examples"). The state of the art Neural Networks can have an accuracy upto 99% which is better than humans.

<h2> Perceptrons </h2>
- Perceptrons were developed in 1950s and 1960s by Frank Rosenblatt, inspired by earlier work by Warren McCulloch and Walter Pitts.
- So how does a perceptron works? A perceptron takes several binary inputs, x<sub>1</sub>, x<sub>2</sub>,..., and produces a single biary output:
![alt text](https://raw.githubusercontent.com/AnuragSahu/Research_In_Progress/master/screenshots/perceptron.png)

- The perceptron in the above example have 5 inputs and x<sub>1</sub>,x<sub>2</sub>,x<sub>3</sub>,x<sub>4</sub>,x<sub>5</sub>. In general it could have more or less inputs.
- Rosenblatt proposed a simple rule to compute the output the weights w<sub>1</sub>, w<sub>2</sub>,w<sub>3</sub>, w<sub>4</sub>, w<sub>5</sub>. real number expressing the importnace of the respective inputs to the output.
- The neuron's output 0 or 1, is determined by wheater the weigthed sum /sum<sub>j</sub>w<sub>j</sub>x<sub>j</sub> is less than or greater than some threshold value.

- More precise algebraic terms can be:
 outputs = { 0 if sum<sub>j</sub>w<sub>j</sub>x<sub>j</sub> <= threahold, 1 if sum<sub>j</sub>w<sub>j</sub>x<sub>j</sub> > threahold,  <b>(1)</b>

- This is a very basic model, it can be intuitively thought like a device that makes decisions by weighing evidence.
	- For example (A lame but realistic one though)
	- Suppose the weekend is commingup and you've heard that there's going to ve a cheese festival in your city. You like cheese and are trying to decide whether or not to go to the festival. You might make your decision by weighing up three factors:
		1. Is the weather good?
		2. Does your boyfriend / Girlfriend want to accompany you?
		3. Is the festival near public transit?(You don't own a car).
	- We can represent these factors by corresponding binary variables x<sub>1</sub>, x<sub>2</sub>. x<sub>3</sub>. we have x<sub>1</sub> = 1 if the weather is good, x<sub>2</sub> = 1 if your boyfriend/Girlfriend is accompnying you, x<sub>3</sub> = 1, if the festival is near a public transport.
	- Suppose that you adore cheese so much so that you are ready to sacrifise you boyfriend/girlfriend if he/she is unintrested and even if the festival is hard to reach, so one way to do this is w<sub>1</sub> = 6 and w<sub>2</sub> = 2, w<sub>3</sub> = 2, showing that weather matters to you a lot more than your friend and hardness to reach the fest.
	- With these choices, the percptron implements the desired decision-making model, outputting 1 whenever the weather is good and 0 whenever the weather is bad. It makes no Difference if your friend wants to go or wheater the public transit is nearby.
	- By varying weights and the threshold we can get different models, For example if the threshold is 3 then perceptron would decide that you should go whenever:
		- The weather is good 
		- Both the friend is willing to accompany you and Festival is near a public transport.
	- Decreasing the threshold means you are more willing to go to the Festival.
- The percptron isn't a complete model of human decision-making! 
- But a complex network of perceptron could make quie subtle decisions like this one 
![alt text](https://raw.githubusercontent.com/AnuragSahu/Research_In_Progress/master/screenshots/complexNN.png)
- In the Above network, the first column of perceptrons is makng three decisions, by weighting the input evidence.
- The perceptrons in secound layer is making decisions at more complex and abstract levels then the perceptrons at the first layers.
- and even more complex decisions can be made in the third layer, and similarly the perceptrons at higher levels can make more complex and abstract decisions then their previous layers.

- Lets simplify the way we describe perceptrons, the codition  sum<sub>j</sub>w<sub>j</sub>x<sub>j</sub> > threshold is cumbersome, and we make two notational changes to simplyfy it. The first is to write the sum<sub>j</sub>w<sub>j</sub>x<sub>j</sub> as a dot product, w.x = sum<sub>j</sub>w<sub>j</sub>x<sub>j</sub> where w and x are vectors whose components are the weights and input respectively. The seocund is to change is to move the threshold to the other side of the inequality, and to replace it by what's known as the perceptron's bias, b = - threshold. Using the bias instead of threshold, the perceptron rule can be rewritten as :

output = { 0 if w.x + b <= 0 and 1 if  w.x + b > 0 } (2)
 - All the logical gates can also be designed by the use if these Perceptrons.