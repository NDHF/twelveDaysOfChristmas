# twelveDaysOfChristmas
A function that counts the total number of items in the Twelve Days of Christmas Song

# Overview

This simple function uses nested for-loops to produce a number. 

In essence, the function adds up all the items for each separate day of Christmas, and then adds that number to a running tally. 

First, we declare a counter variable, starting at zero. 

The first loop runs through all numbers from one to twelve.

At each step in the first loop, a second counter variable is declared, starting at zero. Then, a second loop is run. 

This loop will count through all the numbers from one, to whatever number the first loop has reached. For example, if the first loop is at 3, the second loop will count up to three. At each step of the second loop, the number will be added to the second counter. Again, if the first loop is at three, the second loop will first add one to the second counter, then two, and then three, giving the second counter a value of 6 (1 + 2 + 3 = 6).

Once the second loop is finished, the value of the second counter is added to the first counter, and the first loop moves on to the second number. 

Once the first loop is finished, the value of the first counter is returned. In this case, the value is printed to the DOM. 

# Results

The function does work, giving the correct value of 364. 

# Other Solutions

There is another solution which is, in some ways, easier if using a paper and pencil, that uses direct and inverse relationships between the number of days, the days items first appear, and the number of each item on each day. I will elaborate on this at a later date. 
