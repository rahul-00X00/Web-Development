# React JS

React JS is javascript library used for front end development. Most popular library after jQuery. It follows component based web development strategy. It means we are dividing entire web page into small chunks of components.
For say there could be nav bar component, search component, filter components, product components, and many more.

The main reason for the development of `React` by `Facebook` was to minimize the burden caused by dom manipulation.

So using React we build different web components and merge them into a single application and present it to the user in the front end.

<!-- Basic Code for React in Sandbox -->

```
import { StrictMode } from "react"; // The StrictMode allows for easy debugging and fault finding in our react app
import { createRoot } from "react-dom/client"; // It is new method from react-dom. Earlier in React17 we directly call the ReactDom.render() method to render html content

import App from "./App"; // It is an another component we are attaching it here, one of the feature of react

const rootElement = document.getElementById("root"); // Normal Vanilla JavaScript to find id having name 'root'
const root = createRoot(rootElement); // Using createRoot() method we are specifying where we want to attach our main application react component

root.render(
  <StrictMode>
    <!-- <App /> -->
    <h1>Hello World</h1>
  </StrictMode>
); // This method will render html content inside the root element
```

JSX is a JavaScript XML using this we can write html like code in javascript file and the **react** package/module - the first imported package will handle this JSX and in that package there is tool named `Babel`. What babel does is it converts this JSX and Modern JavaScript Code(ES6) into plain vanilla javascript so that every browser can understand it.

> Note: We can only render one html element, means we cannot render multiple html elements separately at once. For a single component there should be only one html element that can be rendered. However we can use `div` element to wrap multiple html elements into one.

## JavaScript expressions in JSX

Currently we are rendering html content inside a javascript file, we can also add javascript expression inside the html in JSX.

```
var name = "XYZ";
const root = createRoot(document.getElementById('root'));
root.render(<h1>Hello My Name is {name}</h1>); // Using `{}` braces to render variable value
// Output -> Hello My Name is XYZ
```

> Note: We can render any Javascript expression inside the `{}` braces, but not conditional statements or any other statements. Expression should return a value. We can also call a function that returns a value.

```
function capitalize(name) {
    return name.toUpperCase();
}

var name = "xyz";
root.render(<p>Without Capitalization {name}. With Capitalization (capitalize(name))</p>)
```

## JSX Attributes and Styling React Elements

In html we can include styles to an element either directly or using an class attribute, similarly we can do in JSX, however since the `class` is a reserved keyword in Javascript we have to use `ClassName`.

We define css class in separate css file and then use that class in our JSX (Separation of concerns:-D)

Example:

```
.heading {
    font-weight: 'bold';
    height: 2rem;
}

JSX
<h1 className='heading'>This is a Heading</h1>
```

Similarly we can use all the attributes associated with html elements inside JSX. But if the attribute has name combined using two words like `contenteditable` or `spellcheck` it should be written in `camelCase` as `contentEditable`, `spellCheck` etc inside JSX.

## JSX Inline Styling

In HTML, inline styling can be done using `style` attribute, Similarly with the help of same style attribute we can add inline css inside jsx. However value of style attribute in JSX should be an **javascript object**.

> [!NOTE]
> Value of style attribute should be an **Javascript Object**
> Eg: style={{color: 'red'}};

> Note: The property name should be in Camel Case if we are using inline styling. Eg: font-size -> fontSize; font-weight -> fontWeight etc.

```
var customStyle = {
    color: "orange",
    fontSize: "2rem", // Unlike css we can directly use numbers, here we have to use strings even for numbers
    fontWeight: "bold"
}
<h1 style={customStyle}>Good Morning</h1> // Since we are adding javascript expression inside JSX we have to include in `{}` braces

or

<h1 style={{color:"red", fontSize:"2rem", fontWeight:"bold"}}>Good Morning</h1>
```

## React Components

One of the major feature of react is components and its reusability for different projects. We can define differnet functions for different react component. There could be component for Navbar, Searchbar, Heading, Image etc

```
// Heading Component (./Heading.jsx)
function Heading() {
    return <h1>Hello World</h1>
}
export default Heading; // We have to export the function in order to use it in another module

//App Component which contains all the component the application is going to use (./App.jsx)
import Heading from "./Heading";

export default function App() {
    <Heading />
}

./index.jsx
import {createRoot} from "react-dom/client";

const root = createRoot(document.getElementById("root"));
root.render(
    <App/>
)
```

Similar to HTML elements we can use the components using its name tag(Mostly we will use self closing tag)!

## Javascript ES6 import and export keyword

Here we have seen we have imported and exported react components, so in order to use another modules functionality or methods/attribute we have to use import keyword and if any functionality has to be made global so that it can be used inside different files we have to use export keyword.
ES6 allows to use import and export modules and this makes componentization meaning we are breaking modules into different standalone, reusable, application.

### Importing default

```
//math.js
const PI = 3.1415962

export default PI;


// custom module
import PI from "./math.js";

console.log(PI); -> Output: 3.1415962
```

So in the above example we are exporting const PI value so that it can be used inside any other modules if imported.
Now here we have use **default** keyword, it specifies that default thing which has to be exported.

Since we have declared default thing(variable/method) we can use any word to address it out during importing
Eg:
import pi from "./math.js" or
import pie from "./math.js" or
import PI from "./math.js"
All the above import function will work!

### Importing multiple functions or variables/constant

We can export more than one thing(variable/functions)

```
// math.js
def Add(a, b) {
    return a+b;
}

def Multiply(a,b) {
    return a*b;
}

export {Add, Multiply}; // Note: We just have to use function name

// custom module
import {Add, Multiply} from "./math.js"

console.log(Add(2,4)) -> Output: 6
console.log(Multiply(2,3)) -> Output: 6
```

In this example we are exporting Add and Multiply functionality and we have specified the function names in curly braces. Now inside another module when we are importing these functionalities we have to use exact same name as it was defined. Unlike default we can't give random name!

### Importing using `*` key

We can also import everything from the modules using `*`(wild card or asterik) key. But with this we are losing single default importing. Using default and particular functions makes our code very precise with the things we actually want.

Also when we use `*` we have to give it a name. For eg; `import * as mth`!

```
import * as mth from "./math.js";

console.log(mth.default); //3.1415962
console.log(mth.Add(2,4)); //6
console.log(mth.Multiply(2,4)); //6
```

## React local environment setup

To run react locally all we have to do is to run the following command inside terminal of the code editor

> npx create-react-app my-app

**Note**: Node should be installed.

After the installation of all necessary react packages, change directory to the `my-app` directory and then we have to run the following command;

> npm start

## React Props

Just like we can give additional information to a html element using attributes, similarly we can give additional information to custom components element which is known as **props**

Eg:

```
Generally what we do,

//Cards.jsx
function Cards() {
  return (
    <div>
      <h1>Tony Stark</h1>
      <img
        src="image-source"
        alt=""
      />

      <h1>Steve Roger</h1>
      <img
        src="image-source"
        alt=""
      />

      <h1>Peter Parker</h1>
      <img
        src="image-source"
        alt=""
      />
    </div>
  );
}

export default Cards;

//Apps.jsx
import Cards from "./Cards.jsx"

class App() {
    <Cards />
}

export default App;
```

Here in the above example we have repeatedly used same layout for multiple fictional characters. This can be avoided using react props where we just have to pass data to the component and the content is rendered dynamically without repetition.

Eg

```
//Cards.jsx
function Cards(props) {
    <h1>{props.name}</h1>
    <img src={props.img} alt={props.alt}>
}

//Apps.jsx
function App() {
    <Cards name="Tony Stark" img="img/stark" alt="tony stark image" />
    <Cards name="Steve Rogers" img="img/rogers" alt="steve roger image" />
    <Cards name="Peter Parker" img="img/parker" alt="peter parker image">
}
```

Here we have passed data using custom attributes to our custom component just similar to html attributes and through this same layout can be used without repetition.

So, Props are the information that you pass to a JSX tag.

> [!NOTE]
>
> - We can pass props only to custom elements not HTML like elements. HTML like elements in JSX has predefined limited props for example: img element has predefined props like 'src' 'alt' 'className' 'height' 'width' etc.
> - Any JSX/HTML attributes passed inside component will be treated as props and hence will not have effect explicitly.

## Javascript map()

If we have to render same component for different data it would be tidious to use custom component for each varying data, Instead we would use map() function similar to loop that allows us to render same component multiple times for different data.

Eg:

```
//Without using map function
render(
  <div>
    <Text name="Tony" />
    <Text name="Steve" />
    <Text name="Peter" />
  </div>
)

//With map function

const nameList = [
  {'name': 'Tony'},
  {'name': 'Steve'},
  {'name': 'Peter'}
]; //Array of name objects

function createText(textElement) {
  return <Text name=textElement.name />
}

render(
  <div>
    {nameList.map(createText)} // This will loop through all elements in the array nameList
  </div>
)
```

> [!Note]
> The map function works on javascript array and it expects callback function as a argument.
> `[javascriptArray].map(callbackFunction)`

## Javascript Arrow Function

An arrow function is similar to normal functions but more like anonymous functions,

Below is the example of arrow function

```
let print = () => {
  return "Hello World";
}
print(); //Output -> Hello World

Alternatively if it is single line function we can directly write like this
let print = () => "Hello World";
print(); //Ouput -> Hello World

Even we can have multi line functions
let doSomething = () => {
  var a = 2 + 2;
  var b = a * a;
  var c = b / a;
  return c;
}

doSomething() -> Output -> 4
```

> [!Note]
> Arrow function is extensively used as callback functions.
> `setTimeout(() => {//do something}, 2000);`

## Javascript **forEach()** **map()** **filter()** **reduce()** methods

### Javascript `forEach()` method

Using forEach() method we can loop through the javascript array and do something with it. It accepts callback function as argument(input)

```
var numbers = [1,2,3,4];
var doubleNumbers = [];

numbers.forEach(function (number) {
  doubleNumbers.push(number * 2);
})

console.log(numbers); // [1,2,3,4]
console.log(doubleNumbers); // [2,4,6,8]
```

### Javascript `map()` method

Using map() method we can loop through the javascript array and do something with it. It accepts a callback function as a argument(input) and it also accepts that callback function to return something.
What makes it different from the forEach() method that it returns a new array

```
var numbers = [1,2,3,4];

var tripleNumbers = numbers.map(function (number) {
  // This function will return 3 times the number
  return number * 3;
})

console.log(numbers); // [1,2,3,4]
console.log(tripleNumbers); // [3,6,9,12]
```

### Javascript `filter()` method

As the name suggest it would filter the given array and output the items in an array which returns true for a condition. It also accepts callback function as argument/input

```
var numbers = [2,10,45,3,20];

var numbersGreaterThan10 = numbers.filter(function(num) {
  return num > 10; // If num is greater than 10 that it would be returned
})

console.log(numbers); // [2,10,45,3,20]
console.log(numbersGreaterThan10); // [45,20]
```

### Javascript `reduce()` method

The reduce() method returns single integer output instead of an array. It accepts a callback function which has two arguments `accumulator`, `currentNumber`. So reduce() method accumulates a value by doing something to each element in an array.

Ex;

```
// We want to sum all the numbers present inside a numberList array
numberList = [2, 4, 6, 8, 10]

sum_of = numberList.reduce(function(accumulator, currentNum) {
    return accumulator + currentNum;
})

console.log(sum_of); // 30
```

> Couple of things to notice
>
> - reduce() method also takes intial value of accumulator as an argument. If not specified it takes first element of array as a value of accumulator
> - We don't have to assign like this to accumulator += currentNum, each time we return it gets assigned to accumulator

### Javascript `find()` method

The find() methods returns the first element of an array that returns true for specific condition. It accepts callback function as an argument.

```
numbers_list = [1, 5, 10, 4, 23];

const num_greater_10 = numbers_list.find((num) => {
  return num > 10;
})

console.log(num_greater_10); // 23
```

### Javascript `findIndex()` method

The findIndex() method works exactly like find() method but instead of returning an element from an array list it returns index of that element. So it returns the index of an first element of an array that returns true for specific condition. It accepts callback function as an argument.

```
numbers_list = [1, 5, 6, 10, 34];

const num_greater_5 = numbers_list.findIndex((num) => {
  return num > 5;
})

console.log(num_greater_5); // 2 (index of 6)
```

## React Conditional Rendering with Ternary Operator and && Operator

We can conditionally render different components, means if a particular condition is true we would render one component and if the condition is false we would render different component.

### Conditional Rendering Using Ternary Operator

`Syntax: expression[condition] ? expression[if condition is true] : expression[if condition is false]`

```
// Without Ternary Operator

isUserLoggedIn = false;

function checkIfUserLoggedIn() {
  if (isUserLoggedIn) {
    return (
      <h1>Hello User</h1>
    )
  } else {
    return (
      <form>
        <input type="email" placeholder="User Email"/>
        <input type="password" placeholder="Password">
        <button type="submit">Sign In</button>
      </form>
    )
  }
}


function App() {
  return (
    <div>
      {checkIfUserLoggedIn()}
    </div>
  )
}
```

```
// With Ternary Operator

/*Form Component*/
export default function Form (
  return (
    <div>
      <form>
        <input type="email" placeholder="User Email"/>
        <input type="password" placeholder="User Password"/>
        <button type="submit">Sign In</submit>
      </form>
    </div>
  )
)


/*App Component*/
import Form from "./Form";

isUserLoggedIn = false;

funtion App() {
    return (
      <div>
        {isUserLoggedIn ? <Form> : <h1>Hello</h1>}
      </div>
    )
}
```

### Conditional Rendering using && Operator

Sometimes we have to render something if a condition is true and nothing if condition is false, it can be achieved through Ternary Operator however there is a shorter syntax through && Operator

`Syntax: expression[conditon] && expression[if condition is true]`

For example let say we want to show user to go to bed if it 10pm at night and nothing if it is not

```
time = new Date().getHours();

// With using Ternary Operator

function App () {
  return (
    <div>
      {time >= 22 ? <h1>Go to bed</h1> : null}
    </div>
  )
}

// With using && Operator

function App() {
  return (
    <div>
      {time > 22 && <h1>Go to bed</h1>}
    </div>
  )
}
```

## State in React - Declarative vs Imperative Programming

The user interface(UI) has to be dynamic based on user actions or some values change. For example, the background turns black when the user selects dark mode or on clicking the card it should expand the card with full content.

Earlier with pure javascript through the event listener we change the element style or properties using DOM

Code to increase a number using vanilla javascript

```
  <h1>1</h1>
  <button>+</button>

  // js
  initial_num = 1;
  document.querySelector('button').addEventListner('click', () => {
    initial_num++;
    document.querySelector('h1').innerHTML = initial_num;
  });
```

The above code is imperative programming style, we are telling each every step to be performed.

Now in React the UI depends on function of state

> UI = func(state)

When the state changes the UI changes automatically means the component is rerendered. The state can be javascript variable

Simple Analogy: we see ice at -10 celsius and we see water at +60 celsius so based on state of temperature we see different form of water or UI

## React Hooks - useState()

Now if we want to change UI based on some action or state change we have to re-render entire web-page this means every component present inside the page will be re-rendered and it was highly ineffective. But using react hooks we can change a particular component based on some action or state change

UI can change based on states and it can be achieved using **useState()** hook.

> [!Note]
> One of the rule using useState() is that it should be added inside a functional component

```
function App() {
  const [count, setCount] = useState(0);

  function increase() {
    setCount(count++);
  }

  function decrease() {
    setCount(--count);
  }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increase}>-</button>
      <button onClick={decrease}>+</button>
    </div>
  )
}
```

Now in above code we have couple of things to note

- useState(0) -> we are setting a initial value of the state variable based on which our react component should be re-rendered it could be integer or string or any other primitive datatype
- On console logging useState(0) we get array of length 2, First one is the initial value we set and second is the function bound to it - using this function we can change the state value

## Javascript - Destructuring

In the above example we have seen how while declaring useState() we used two variables `const [count, setCount] = useState(0)` so basically we are destucturing what useState() returns!

Example:
const animals = [
{ name: "cat", sound: "meow"},
{ name: "dog", sound: "woof" },
];

We have a complex data here! In real world this is how most of the response looks like when we use API's

- const [cat, dog] = animals; // Here we are destructuring animals array which contains two objects to cat and dog constant simultaneously
  If we print cat or dog we get this output {name: "cat", sound: "meow"}

> [!Note]
> While destructuring if right side is an array then we should use arrays to destructure it and if right side is an object then we should use object

- We will further break down the cat object
  const {name, sound} = cat;
  console.log(name) -> cat
  console.log(sound) -> meow

> [!Note]
> While destructuring the object we should use the exact key name the object has

- Furthermore we can also specific keys from the object
  const { sound } = cat;
  console.log(sound) -> meow

- If we want to change the name of the keys of the object then we have to follow the below approach
  const {name: catName, sound: catSound} = cat;
  console.log(name); // undefined
  console.log(catName) -> cat
  Here we have used colon and renamed with the user-defined name

- Sometimes value for a particular object key exists and sometimes don't so we use default value when the value of particular key doesn't exists
  const {name = "Kitty"} = cat // let's assume the cat object doesn't have name attribute
  console.log(name) -> Kitty
  Since the cat object doesn't had name attribute it defaulted to Kitty

- Often times when we destructure an item then the destructured item might be an complex data type like array or object
  const animals = [
    {
      sound: "meow",
      feedingRequirements: {
        food: 2,
        water: 3,
      },
    }
  ];
  One approach is:

  1. [ cat ] = animals
     { feedingRequirements } = cat
     { food, water } = feedingRequirements


      OR

  2. [feedingRequirements: {food, water}] = cat;
