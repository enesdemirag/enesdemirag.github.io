---
title: "Hands on Section on CIFAR 10 and Finetuning"
---

This was a hands on session with Sarthak Sir on Google Colab, We coded our Deep First Network with torch there. and the code for it is as shown.
I will also write the about the cell codes as well for reference.<br>

<i> This is the part where we import all the modules and also rename them for our convenience.</i><br>

{% highlight ruby %}
import torch
import torch.nn as nn
import torchvision.datasets as dsets
import torchvision.transforms as transforms
from torch.autograd import Variable
import torchvision
import torch.nn as nn
import torch.nn.functional as F
import torch.optim as optim
import numpy as np
{% endhighlight %}

 Now that we have imported all the required Libraries we need to look at our Training set and torch has the CIFAR10 Dataset avialabe so just as a part of our introduction we don't need to write our own classifier but when we do something hardcore we will have to do it. But for now we will use the inbuild Dataset.
 <i> We will now print the class of the trainset trainloader testset testloader and make them Iterrateable objects so that they can be fed to the network. </i>

{% highlight ruby %}
print(type(trainset))
print(type(trainloader))
print(type(testset))
print(type(testloader))
#converting into an iterable object
trainiter = iter(trainloader)
#print("Number of train samples",len(list(trainiter)))
testiter = iter(testloader)
#print("Number of test samples",len(list(testiter)))
#images, labels = trainiter.next()
{% endhighlight %}

Getting the Dataset
<i> We are now downloading the dataset into the our local machine and fitting them into the trainset and loader also defining the class names. </i>

{% highlight ruby %}
#Getting the dataset
transform = transforms.Compose([transforms.ToTensor()])
trainset = torchvision.datasets.CIFAR10(root='./data', train=True, download=True,transform=transform)
trainloader = torch.utils.data.DataLoader(trainset, batch_size=64, shuffle=True, num_workers=2)

testset = torchvision.datasets.CIFAR10(root='./data', train=False, download=True,transform=transform)
testloader = torch.utils.data.DataLoader(testset, batch_size=64, shuffle=False, num_workers=2)

classes = ('plane', 'car', 'bird', 'cat','deer', 'dog', 'frog', 'horse', 'ship', 'truck')
#LABELS 0,1,2,3,4,5,6,7,8,9
{% endhighlight %}

Done with dataset on downloading on the google server machine, now
<i> Making the data set dimentions according to the numpy array and showing the first image in the array we have appended </i>

{% highlight ruby %}
#Analyzing one sample and display one particular image
image, label = trainiter.next()
print(type(image))
print(image.size())

img = image[0,:].numpy();
img=np.transpose(img,(1,2,0))

import matplotlib.pyplot as plt
plt.imshow(img)
{% endhighlight %}

Now decalring the Network class, 
- we define the network in a class.
- In initiazation we always declare the FCs, Convultion Layers
- And then Define the Forward for making the connections between the layers and also the activation functions
- The fancy stuff can be found at their <a href="https://pytorch.org/docs/stable/nn.html?highlight=conv#torch.nn.Conv2d">official Documentation</a>.
{% highlight ruby %}
# inp -> c1(3,6,5) -> r -> p(2,2) -> c2(6,16,5) -> r -> p(2,2) -> fc1(120) -> fc2(84) ->fc3(10)
class Net(nn.Module):
    def __init__(self):
        super(Net, self).__init__()
        self.conv1 = nn.Conv2d(3, 6, 5)
        self.pool = nn.MaxPool2d(2, 2)
        self.conv2 = nn.Conv2d(6, 16, 5)
        self.fc1 = nn.Linear(16 * 5 * 5, 120)
        self.fc2 = nn.Linear(120, 84)
        self.fc3 = nn.Linear(84, 10)
        

    def forward(self, x):
      x = self.pool(F.relu(self.conv1(x)))
      x = self.pool(F.relu(self.conv2(x)))
      x = x.view(-1, 16 * 5 * 5)
      x = F.relu(self.fc1(x))
      x = F.relu(self.fc2(x))
      x = self.fc3(x)
      return x

{% endhighlight %}

Now we have defined the network architecture
we will now do some interesting stuff


{% highlight ruby %}

{% endhighlight %}