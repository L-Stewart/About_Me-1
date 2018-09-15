'use strict';

var userName, questionOne, questionTwo, questionThree, questionFour, questionFive, questionSix, wrong, incorrect, correct;
correct = 0;
incorrect = 0;
wrong = ('You answered te question incorrectly. Try answering the question with yes or no');

console.log('Unfortunately you answered the question incorrectly. Try answering the question with yes or no response.');
console.log('incorrect', incorrect);
console.log('correct', correct);

userName = prompt('Welcome to my site, what\'s your name?');
alert('Hi ' + userName + ', that\'s such a cool name!');

function q1() {
  questionOne = prompt('Do I like to travel?');
  questionOne.toLowerCase();

  if(questionOne === 'yes' || questionOne === 'ya'){
    alert('You guessed right!!!');
    correct++;
    console.log('Answer 1: ' + questionOne);
  } else if(questionOne === 'no') {
    alert('No way I love it!');
    incorrect++;
    console.log('Answer 1: ' + questionOne);
  } else {
    alert(wrong);
  }
}

q1();

function q2() {
  questionTwo = prompt('Do I have any tattoos?');
  questionTwo.toLowerCase();

  if(questionTwo === 'yes' || questionTwo === 'ya'){
    alert('Good job!');
    correct++;
    console.log('Answer 1: ' + questionTwo);
  } else if(questionTwo === 'no'){
    alert('Think again!');
    incorrect++;
    console.log('Answer 1: ' + questionTwo);
  } else {
    alert(wrong);
  }
}

q2();
    
function q3() {
  questionThree = prompt('Do I like to fish?');
  questionThree.toLowerCase();
  if(questionThree === 'yes' || questionThree === 'ya'){
    alert('You guessed right!!!');
    correct++;
    console.log('Answer 1: ' + questionThree);
  } else if(questionThree === 'no') {
    alert('No way I love it!');
    incorrect++;
    console.log('Answer 1: ' + questionThree);
  } else {
    alert(wrong);
  }
}

q3();

function q4() {
  questionFour = prompt('Was I born in Alaska?');
  questionFour.toLowerCase();

  if(questionFour === 'yes' || questionFour === 'ya'){
    alert('Good job!');
    correct++;
    console.log('Answer 1: ' + questionFour);
  } else if(questionFour === 'no'){
    alert('Think again!');
    incorrect++;
    console.log('Answer 1: ' + questionFour);
  } else {
    alert(wrong);
  }
}

q4();

function q5() {
  questionFive = prompt('Do I enjoy living in Washington?');
  questionFive.toLowerCase();

  if(questionFive === 'yes' || questionFive === 'ya'){
    alert('You guessed right!!!');
    correct++;
    console.log('Answer 1: ' + questionFive);
  } else if(questionFive === 'no') {
    alert('No way I love it!');
    incorrect++;
    console.log('Answer 1: ' + questionFive);
  } else {
    alert(wrong);
  }
}

q5();

function q6() {
  var totalAttempts = 4;
  var rightAsnwer = 17;
  questionSix = prompt('How many tattoos do I have? ');

  while(totalAttempts > 1) {
  
    if(parseInt(questionSix) === rightAsnwer)
    {
      alert('Damn, you good!');
      correct++;
      totalAttempts = 0;
      console.log('how many attempts left', totalAttempts);
    }
    else if(questionSix > rightAsnwer)
    {
      questionSix = prompt('Wrong! Too high!');
      totalAttempts--;
      console.log('how many attempts left', totalAttempts);
    } 
    else if(questionSix < rightAsnwer)
    {
      questionSix = prompt('Wrong! Too low!');
      totalAttempts--;
      console.log('how many attempts left', totalAttempts);
    } 
    else {
      alert('Hey, you need to input a number value.');
      questionSix = prompt('Try again');
    }
  }
}
  
q6();
  
function q7() {
  
  // array of correct answers
  var arrayOfStates  = ['FLORIDA', 'ARIZONA', 'ILLINOIS', 'CALIFORNIA', 'WASHINGTON', 'OREGON', 'COLORADO', 'NEVADA'];   
    
  var trys = 6;
  var correctness = false;  
    
        
  while (trys > 0 && correctness === false) 
  {    
    var userGuess = prompt('What states have I traveled to?').toUpperCase();
        
    if (arrayOfStates.includes(userGuess))
    {
      correctness = true;
      alert('You are right!');
      alert('Here are all of the states I\'ve gotten tattooed in!\n ' + arrayOfStates.join(','));
      break;
    }
    else
    {
      trys--;
      alert('Wrong! Try again, ' + trys + ' attempts left');
    }
    
  }
       
  if (trys === 0)
  {
    alert('You ran out of attempts!');
    alert('Here are all of the states I\'ve gotten tattooed in!\n ' + arrayOfStates.join(','));
  }
       
}  
    
q7();
  
alert('You got ' + correct + ' out of 7 questions correct.');
console.log('correct: ' + correct);
console.log('incorrect: ' + incorrect);
  

