#JS Day 1 Homework

Go through each sample code and work out what the output will be and explain what happened.

### Episode 1
```js
var name = 'Keith';

var printName = function() {
  console.log('My name is ' + name );
};

printName();

```

// output - My name is Keith

### Episode 2
```js
score = 5;

var result = function() {
  var score = 3;
  return score;
};

console.log(result());

```

//Score is reset to 3 within the scope of the function therefore

//output - 3

### Episode 3
```js
var myAnimals = ['Chickens', 'Cats', 'Rabbits'];

var listAnimals = function() {
  myAnimals = ['Ducks', 'Dogs', 'Lions'];
  for(var i=0;i<myAnimals.length; i++){
    console.log(i + ": " + myAnimals[i]);
  }
}

listAnimals();

```


// myAnimals array is defined within the scope of the function therefore the array printed to the screen is

// output - 
// 1: Ducks
// 2: Dogs
// 3: Lions

### Episode 4

```js
var suspectOne = 'Jay';
var suspectTwo = 'Val';
var suspectThree = 'Keith';
var suspectFour = 'Rick';

var allSuspects = function() {
  var suspectThree = 'Harvey'
  console.log('Suspects include: ' + suspectOne + ', ' + suspectTwo + ', ' + suspectThree + ', ' + suspectFour)
};

allSuspects();
console.log( 'Suspect three is:' + suspectThree );
```


// Harvey is found within the scope of the function, however is not a global variable
// output -
// Suspects include: Jay, Val, Harvey, Rick
// Suspect three is: Keith

### Episode 5

```js
var detective = {
  name : 'Ace Ventura',
  pet : 'monkey'
};

var printName = function(detective) {
  return detective.name
};

var detectiveInfo = function() {
  detective['name'] = 'Poirot'
  return printName(detective);
};

console.log(detectiveInfo());
```

// the detective name is set to be Poirot within the scope of the function, therefore any functions called from within this function have the detective name as Poirot
// output -
// Poirot

### Episode 6
```js
var murderer = 'rick';

var outerFunction = function() {
  var murderer = 'marc';

  var innerFunction = function() {
    murderer = 'valerie';
  }

  innerFunction();
}

outerFunction();
console.log('the murderer is ', murderer);
```

// output -
// the murderer is rick

### Episode 7 - Make up your own episode/s!

// Make up your own episode which can be whatever you wish and the rest of the class will work out together what happened and what the output will be.


var murderer = "Logan";
var detective = "Jarrod";

var victim = {
  name: "Tegan",
  weapon: "Hammer"
};

var murder = function(){
  var murderer = "Cameron";
  detective = "John";
  getMurderer(detective);
}

var selectWeapon = function(murderer){
  switch(murderer){
    case "Logan":
    victim.weapon = "Knife";
    break;
    case "Cameron":
    victim.weapon = "Bouldering";
    break;
    case "Jarrod":
    victim.weapon = "Food";
    break;
    default:
    victim.weapon = null;
    console.log("There was no weapon?");
  };
};

var getMurderer = function(detective){
  switch(detective){
    case "Jarrod":
    murderer = "Logan";
    break;
    case "John":
    murderer = "Jarrod";
    break;
    default:
    murderer = null;
    console.log("There was no murderer?");
  }
  selectWeapon(murderer);
}

murder()

console.log("The murderer is", murderer,"The victim was killed with", victim.weapon, "the detective was", detective)