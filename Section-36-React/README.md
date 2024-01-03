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
const root = createRoot(rootElement); // Using createRoot() method we are specifying where we want to attach our react component

root.render(
  <StrictMode>
    <!-- <App /> -->
    <h1>Hello World</h1>
  </StrictMode>
); // This method will render html content inside the root element
```

JSX is a JavaScript XML using this we can write html like code in javascript file and the **react** - the first imported package will handle this JSX and in that package there is tool named `Babel`. What babel does is it converts this JSX and Modern JavaScript Code(ES6) into plain vanilla javascript so that every browser can understand it.

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

Similarly we can use all the attributes associated with html elements inside JSX. But if the attribute has name combined using two words like `contenteditable` or `spellcheck` should be written in `camelCase` as `contentEditable`, `spellCheck` etc inside JSX.

## JSX Inline Styling

In HTML, inline styling can be done using `style` attribute, Similarly with the help of same style attribute we can add inline css inside jsx. However value of style attribute in JSX should be an **javascript object**.

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
