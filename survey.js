const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let answers = [];

const whatName = () => {
  rl.question(`What's your name? Nicknames are also acceptable :\n`, (response) => {
    answers.push(response);
    whatActivity();
  });
};

const whatActivity = () => {
  rl.question(`What's an activity you like doing?\n`, (response) => {
    answers.push(response);
    whatMusic();
  });
};

const whatMusic = () => {
  rl.question(`What do you listen to while doing that?\n`, (response) => {
    answers.push(response);
    whatMeal();
  });
};

const whatMeal = () => {
  rl.question(`Which meal is your favourite (eg: dinner, brunch, etc.)\n`, (response) => {
    answers.push(response);
    whatFood();
  });
};

const whatFood = () => {
  rl.question(`What's your favourite thing to eat for that meal?\n`, (response) => {
    answers.push(response);
    whatSport();
  });
};

const whatSport = () => {
  rl.question(`Which sport is your absolute favourite?\n`, (response) => {
    answers.push(response);
    whatSuperpower();
  });
};

const whatSuperpower = () => {
  rl.question(`What is your superpower? In a few words, tell us what you are amazing at\n`, (response) => {
    answers.push(response);
    formatAnswers();
  });
};

const formatAnswers = () => {
  console.log(`${answers[0]} loves listening to ${answers[1]} while ${answers[2]}, devouring ${answers[3]} for ${answers[4]}, prefers ${answers[5]} over any other sport, and is amazing at ${answers[6]}.`);
  rl.close();
};

whatName();