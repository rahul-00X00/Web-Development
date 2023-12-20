# JavaScript-DOM

## Everything about javascript and DOM

### Adding Event Listeners

> We have button and we want to execute a function when the button got clicked, so how we do that?

We add `event listeners` to the button and tell it what type of event we want to use and what to do when event got triggered basically executing a function.

And we something like below,

`element(obj).addEventListener('click', name_of_function)`

Eg:

```
handleClick() {
    console.log('I got clicked');
} // this will be the function that will be triggered when the click event has been identified
button_obj = document.querySelector('button');
button_obj.addEventListener('click', handleClick);
```

> Note: we don't add parenthesis when we use function name in addEventListener method, instead of straight forward call we are using this function

Out in the wild, people use anonymous function

```
button_obj.addEventListener('click', function() {
    console.log('I got clicked');
});
```

### Higher Order Functions: Passing Functions as Input

We have passed function name without parenthesis inside the addEventListener Function and that is what is exactly known as higher order function.

> Higher Order functions are the functions that take other functions as input

Example;

```
function add(num1, num2) {
   return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function calculator(num1,  num2, operator) {
    return operator(num1, num2);
}

//Function call
calculator(2, 3, add); --> 5
calculator(4, 2, subtract); --> 2
```

### Adding Sound and dealing with JavaScript this keyword

To add a sound we use Audio() class and then we create a object from it

```
var audio = new Audio('/path to audio file');
audio.play();
```

:index pointing up: Here we have created a audio object and then we used one of it's method name play()

**JavaScript $${\color{yellow}this}$$**

On adding eventListener to the button and then we console.log `this` we get whole element as output

```
<button>Click me</button>

document.querySelector('button').addEventListener('click', function() {
    console.log(this); // will print the button element
    this.style.color = 'red'; // we can also manipulate the element using this
})
```

### JavaScript Object and Custructor Function

#### JavaScript Object

JavaScript object allows us to have a variable with properties and methods. Just think of it as real world objects
for say **Humans** have properties like name, age and many more, Similarly we can create a object which can have many features and functionality

Syntax for declaring an object

```
var object = {
    property1: something...,
    property2: something...
}

var student = {
    name: 'Jack',
    age: '15',
    id: 23
}
```

We can access the properties of object using dot(.) notation or using key
For eg:
student.name -> Jack
student['age']

#### JavaScript Constructor Function

Let's suppose if we want to create records for 100 students then by using above declaration it would take long time. Since every students will have same properties so instead of declaring each properties again for every student we will create a constructor function which will behave as a blueprint for the student objects

> Note: Initials should be capital while defining name of the constructor function

Syntax for declaring constructor function

```
function StudentsRecord(name, age, yearOfJoining, courses) {
    this.name = name, // we are using **this** for object
    this.age = age,
    this.yearsOfJoining = yearsOfJoining
    this.courses = courses
}

Initializing an StudentsRecord Object
var student1 = new StudentsRecord('Jack', 14, 2000, ['Maths', 'Physics', 'Chemistry']);
var student2 = new StudentsRecord('Rose', 15, 1999, ['Maths', 'Economics', 'Statistics']);
```

> Here we use **new** for calling the constructor function

We can access the properties each student similar to accessing objects
student1.name;
student2['age'];

### JavaScript Switch

JavaScript Switch statement is a control structure which is an alterante to if-else statements allows to check multiple cases values for an expression

> For example day can have multiple values and based on the value we can console particular day using switch stament

Syntax for switch statements

```
switch(expression) {
    case value1:
        console.log(value1);
        break;
    case value2:
        console.log(value2);
        break;
    default:
        console.log("nothing!);
        break;
}
```

Here an expression can have multiple cases and based on case check we execute code associated with the case

> Note: switch and case keyword is used along with break keyword. case keyword uses (colon-:) instead of curly braces and each case have break keyword in order for halting further execution of codes. Along with this defualt case is passed if no cases match with the expression value

Eg:

```
var day = 'Monday';
switch(day) {
    case 'Monday':
        console.log('Boring Monday');
        break;
    case 'Tuesday':
        console.log('Good day Tuesday');
        break;
    case 'Wednesday':
        console.log('Get set Wednesday');
        break;
    case 'Thursday':
        console.log('Burst Thursday');
        break;
    case 'Friday':
        console.log('Happy Friday');
        break;
    default:
        console.log('Enjoy Weekends');
        break;
}
```

### Methods Associated with Objects

Objects can also have methods associated with which basically describes what functionality that particular object can do - behaviour of the object

Syntax

```
var object = {
    property1: '...',
    property2: '...',
    method : function () {
        do something // this can be  a anonymous function or calling a function
    }
}

Eg:

var car = {
    model: 'SUV',
    color: 'Navy Blue',
    openSunroof : function() {
        // Open's sunroof
    }
}
```

Constructor function can also have methods associated with. All we have to do is assign function to the variable.

Syntax

```
function NameOfConstructorFunction(property_value) {
    this.property1 = property_value,
    this.method = function() {
        <!-- do something -->
    }
}

Eg:
function Car() {
    this.run = function() {
        //run...
    }
}

No matter any numbers of object been made from it will have the functionality of run
```

### Detecting keydown events

Just as we added click event we can also add keydown events, but in click event we specified the target on which the click event has to be applied but for keydown we take entire `document` as the target

Syntax: similar to click event

```
document.addEventListener('keydown', function() {
    //do something
})
```

The above code will work for any keys on the keyboard
How to respond to particular keyboard character?

> Well during the function call we pass an parameter called `event` which is an object passed by the browser when that particular event is triggered. This event has many properties and methods, but one we are interested is `key` property which basically which character was pressed from the keyboard

Syntax

```
document.addEventListener('keydown', function(event) {
    if (event.key === 'a') {
        console.log("character 'a' was clicked from the keyboard!");
    }
})
```

### JavaScript Callback functions

When a function is passed to another function as an argument or input then that function is known as `*Higher Order Function*` and function which is passed to the higher order function is known as `*Callback function*`

```
functionA(functionB) {
    // do something with functionB
    functionB()
}

// functionA -> Higher Order Function
// functionB -> Call back function
```

### Javascript setTimeout function

setTimout() function allows us execute a function after a particular interval of time
params:
function or handle: function which has to be executed after a particular interval of time
time(millisecond): specified time after the above handler should be called

```
setTimeout(function(){
    console.log("Hello World");
}, 1000);
// The above setTimeout function will console log 'Hello World' after 1 sec
```
