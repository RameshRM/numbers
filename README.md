numbers
=======

Collection of NPM Module dedicated for numbers and math

#### Happy Numbers

##### What Is Happy Number 

Happy Number is square every digit of a number left to right and keep adding up the sum until the result is 1

UnHappy Number will never result in 1 , mostly will reach a infinite loop.

###### Example

####### Input is 7 - Happy Number

```
  (7)*(7) = 49;
  (4*4) + (9*9) => 16 + 81 = 97
  (9*9) + (7*7) => 81 + 49 = 130
  (1*1) + (3*3) + (0*0) => 1 + 9 + 0 = 10
  (1*1) + (0*0) => 1 + 0 = 1
```

####### Input is 2 - UnHappy Number

```
  (2*2) = 4;
  (4*4) = 16;
  (1*1) + (6*6) => 1 + 36 = 37;
  (3*3) + (6*6) => 9 + 36 = 45;
  (4*4) + (5*5) => 16 + 25 = 41;
  (4*4) + (1*1) => 16 + 1 = 17;
  (1*1) + (7*7) => 1 + 49 = 50;
  (5*5) + (0*0) => 25 + 0 = 25;
  (2*2) + (5*5) => 4 + 25 = 29;
  (2*2) + (9*9) => 4 + 81 = 85;
  (8*8) + (5*5) => 64 + 25 = 89;
  (8*8) + (9*9) => 64 + 81 = 155;
  (1*1) + (5*5) + (5*5) => 1 + 25 + 25 = 51;
  (5*5) + (1*1) => 25 + 1 = 26;
  (2*2) + (6*6) => 4  + 36 = 40;
  (4*4) + (0*0) => 16 + 0; = 16; //inifinte loop @ 2nd step (4*4)
```


##### Installation 

```node

  var number-helpers = require('number-helpers');
  
  /* input number is 7 ***/
  number-helpers.ishappy(7); /*** Returns True ***/

  /* input number is 1 ***/
  number-helpers.ishappy(1); /*** Returns True ***/
  
  /* input number is 10 ***/
  number-helpers.ishappy(10); /*** Returns True ***/


  /* input number is 2 ***/
  number-helpers.ishappy(2); /*** Returns False ***/
  
```


