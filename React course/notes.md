## 1. About React

React is a JS library for building user interfaces.

- Developed by Facebook 2011
- Angular, Vue, Svelte
- Components = User Interfaces
- Root component, component tree
- Independence
- Reusability
- Speed

## 2. Dev Environment

- Node
- node --version, minimum 5.2.0
- Browser = Chrome
- Text Editor = Visual studio code
- React Developer Tools

## 3. Terminal

- PWD - Full pathname to current working directory
- LS - list of directories
- MKDIR - Create a Directory/folder
- CD - Change directory
- CD .. - Navigate to Parent / One level up
- Clear - clear console
- Arrow key up /down - previous commands

## 4. NPM

- NPM INIT - creates package.json (manifest) file, list dependencies
- NPM INSTALL `<package name>` -- save
  Install package locally (default) and add to package.json
- NPM INSTALL `<package name>` -g
  Install package globally (access anywhere) SUDO
- NPM INSTALL `<package name>` --save-dev
  Use it only in development

## 5. Create React app

`Create-react-app` uses the following technologies.

- `Babel` - is a transcompiler that is mainly used to convert newer JS code into backwards-compatible JS code that can run by older JS engines.
- `Webpack` - Webpakc takes modules with dependencies and generates static assets representing those modules.

## 6. Install Create-react-app

Quick Overview

```js
npx create-react-app my-app
cd my-app
npm start
```

## 7. Folder structure

If the `node_modules` are removed or deleted, you can run `npm install` to bring the `node_modules` folder back.

## 8. Clean Boilerplate

In the `src` folder, remore the following files:

- `App.css`
- `App.js`
- `App.test.js`
- `index.css`
- `logo.svg`
- `serviceWorker.js`
- `setupTests.js`

Leave only `index.js`, but remove all the content from it.

## 9. First compoponent

```js
import React from "react";
import ReactDom from "react-dom";

function Greeting() {
  return <h4>This is my first component</h4>;
}

ReactDom.render(<Greeting />, document.getElementById("root"));
```

## 10. Text Editor Setup

## 11. First component in detail

## 12. JSX Rules

1. Return a single element
2. Use the following attributes `div`, `section`, `article` or `Fragment`
3. Use camelCase for html attributes
4. Use `className` instead of `class`
5. Close every element

## 13. Nested Components and Tools

An example without nesting

<details>
  <summary>Without Nested components</summary>

```javascript
function Greeting() {
  return (
    <div>
      <h1>Jon Doe</h1>
      <p>This is my message</p>
    </div>
  );
}
```

</details>

---

An example with Nested component

<details>
  <summary>Nested Components</summary>

```javascript
import React from "react";
import ReactDom from "react-dom";

function Greeting() {
  return (
    <div>
      <Person />
      <Message />
    </div>
  );
}

// Implicit return
const Person = () => <h1>Jon Doe</h1>;

// Explicit return
const Message = () => {
  return <p>This is my message</p>;
};

ReactDom.render(<Greeting />, document.getElementById("root"));
```

</details>

## 14. Mini Book Project

<details>
  <summary>The mini book project code</summary>

```javascript
import React from "react";
import ReactDom from "react-dom";

function BookList() {
  return (
    <section>
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article>
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => (
  <img
    src="https://m.media-amazon.com/images/I/71I3CatXc8L._AC._SR360,460.jpg"
    alt=""
  />
);

const Title = () => <h1>Butter: The Cult new Japanese Bestselling Novel</h1>;
const Author = () => <h4>Asako Yuzuki </h4>;
ReactDom.render(<BookList />, document.getElementById("root"));
```

</details>

## 15. CSS Basics

- Add a new file `index.css` in the src folder.

```css
/* Codein the index.css file */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Courier New", Courier, monospace;
  background: #f1f5f8;
  color: #222;
}

.booklist {
  width: 90vw;
  max-width: 1170px;
  margin: 5rem auto;
  display: grid;
  gap: 2rem;
}

@media screen and (min-width: 768px) {
  .booklist {
    grid-template-columns: repeat(3, 1fr);
  }
}
```

- Import the css file into the `index.js` file

```js
import "./index.css";
```

<details>
  <summary>The index.js file</summary>

```javascript
import React from "react";
import ReactDom from "react-dom";

// CSS
import "./index.css";

function BookList() {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article className="book">
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => (
  <img
    src="https://m.media-amazon.com/images/I/71I3CatXc8L._AC._SR360,460.jpg"
    alt=""
  />
);

const Title = () => <h1>Butter: The Cult new Japanese Bestselling Novel</h1>;
const Author = () => <h4>Asako Yuzuki </h4>;
ReactDom.render(<BookList />, document.getElementById("root"));
```

</details>

## 16. JSX CSS

Adding CSS into the `index.js` file directly

```js
const Author = () => (
  <h4 style={{ color: "#617d89", fontSize: "0.75rem", marginTop: "0.25rem" }}>
    Asako Yuzuki{" "}
  </h4>
);
```

## 16. JSX Javascript

<details>
  <summary>Adding the refactored index.js file</summary>

```javascript
import React from "react";
import ReactDom from "react-dom";

// CSS
import "./index.css";

function BookList() {
  return (
    <section className="booklist">
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article className="book">
      <img
        src="https://m.media-amazon.com/images/I/71I3CatXc8L._AC._SR360,460.jpg"
        alt=""
      />
      <h1>Butter: The Cult new Japanese Bestselling Novel</h1>
      <h4>Asako Yuzuki </h4>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));
```

</details>

<details>
  <summary>Updating the index.css file</summary>

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Courier New", Courier, monospace;
  background: #f1f5f8;
  color: #222;
}

.booklist {
  width: 90vw;
  max-width: 1170px;
  margin: 5rem auto;
  display: grid;
  gap: 2rem;
}

@media screen and (min-width: 768px) {
  .booklist {
    grid-template-columns: repeat(3, 1fr);
  }
}

.book {
  background: #fff;
  border-radius: 1rem;
  padding: 1rem 2rem;
}

.book h1 {
  margin-top: 0.5rem;
}

.book h4 {
  color: #617d98;
  font-size: 0.75rem;
  margin-top: 0.25rem;
}
```

</details>

Updating the `index.js` file.

```js
const Book = () => {
  const title = "Butter: The Cult new Japanese Bestselling Novel";
  const author = "Asako Yuzuki";
  return (
    <article className="book">
      <img
        src="https://m.media-amazon.com/images/I/71I3CatXc8L._AC._SR360,460.jpg"
        alt=""
      />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};
```

## 17. Props

- Setup the new variables

```js
// Setup Variabled
const author = "Asako Yuzuki";
const title = "Butter: The Cult new Japanese Bestselling Novel";
const image =
  "https://m.media-amazon.com/images/I/71I3CatXc8L._AC._SR360,460.jpg";
```

- Trying `props` for first time

```js
const Book = (props) => {
  console.log(props);
  return (
    <article className="book">
      <img src={image} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};
```

- Refactor the variables into an object

```js
const firstBook = {
  img: "https://m.media-amazon.com/images/I/71I3CatXc8L._AC._SR360,460.jpg",
  title: "Butter: The Cult new Japanese Bestselling Novel",
  author: "Asako Yuzuki",
};
```

- Update the `BookList` and the `Book`

```js
function BookList() {
  return (
    <section className="booklist">
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      />
    </section>
  );
}

const Book = (props) => {
  console.log(props);
  return (
    <article className="book">
      <img src={props.img} alt="" />
      <h1>{props.title}</h1>
      <h4>{props.author}</h4>
    </article>
  );
};
```

## 18. Props Destructing

Option One:

```js
const Book = (props) => {
  const { img, title, author } = props;
  return (
    <article className="book">
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};
```

Option Two:

```js
const Book = ({ img, title, author }) => {
  return (
    <article className="book">
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};
```

## 19. Props - Children

Refactor the `BookList`

```js
function BookList() {
  return (
    <section className="booklist">
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio
          id dolores delectus voluptatibus aspernatur, at dicta fuga ex culpa
          recusandae.
        </p>
      </Book>
    </section>
  );
}
```

Refactor the Book

```js
const Book = ({ img, title, author, children }) => {
  // const { img, title, author } = props;
  return (
    <article className="book">
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
      {children}
    </article>
  );
};
```

## 20. Simple List

Refactor the `fistBook` and `secondBook` and rename it to `book`

```js
const books = [
  {
    img: "https://m.media-amazon.com/images/I/71I3CatXc8L._AC._SR360,460.jpg",
    title: "Butter: The Cult new Japanese Bestselling Novel",
    author: "Asako Yuzuki",
  },
  {
    img: "https://m.media-amazon.com/images/I/71UUUzTDmSL._AC._SR360,460.jpg",
    title: "On the Origin of Time: The instant Sunday Times bestseller",
    author: "Thomas Hertog",
  },
];
```

Create a simple list

```js
const names = ["john", "peter", "susan"];
const newNames = names.map((name) => {
  return <h1>{name}</h1>;
});

function BookList() {
  return <section className="booklist">{newNames}</section>;
}
```

## 21. Proper list

Creating a proper book list

```js
function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book book={book}></Book>;
      })}
    </section>
  );
}

const Book = (props) => {
  const { img, title, author } = props.book;

  return (
    <article className="book">
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};
```

## 22. Key prop and spread operator

Add a unique `id` in the `books` variable:

```js
books = {
  id: 1,
};
```

In the function `Booklist` pass the key `id`

```js
function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book key={book.id} book={book}></Book>;
      })}
    </section>
  );
}
```

Using the spread operator

```js
function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book key={book.id} {...book}></Book>;
      })}
    </section>
  );
}

const Book = (props) => {
  const { img, title, author } = props;

  return (
    <article className="book">
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};
```

## 23. Event Basics

- Reference example

```js
const Book = ({ img, title, author }) => {
  // Attribute, eventHandler
  // onClick, onMouseOver
  const clickHandler = () => {
    alert("hello");
  };
  return (
    <article className="book">
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
      <button type="button" onClick={clickHandler}>
        Reference example
      </button>
    </article>
  );
};
```

- Inline function

```js
<h1 onClick={() => console.log(title)}>{title}</h1>
```

- More complex example

```js
const Book = ({ img, title, author }) => {
  const complexExample = (author) => {
    console.log(author);
  };

  return (
    <article className="book">
      <img src={img} alt="" />
      <h1 onClick={() => console.log(title)}>{title}</h1>
      <h4>{author}</h4>
      <button type="button" onClick={() => complexExample(author)}>
        More complex example
      </button>
    </article>
  );
};
```

- `onMouseOver` event

```js
const Book = ({ img, title, author }) => {
  return (
    <article
      className="book"
      onMouseOver={() => {
        console.log(title);
      }}
    >
      <img src={img} alt="" />
      <h1 onClick={() => console.log(title)}>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};
```

## 24. Import and Export Statements

Under the `src` folder create two files `books.js` and `Book.js `

<details>
  <summary>Code in the books.js file</summary>

```javascript
export const books = [
  {
    id: 1,
    img: "https://m.media-amazon.com/images/I/71I3CatXc8L._AC._SR360,460.jpg",
    title: "Butter: The Cult new Japanese Bestselling Novel",
    author: "Asako Yuzuki",
  },
  {
    id: 2,
    img: "https://m.media-amazon.com/images/I/71UUUzTDmSL._AC._SR360,460.jpg",
    title: "On the Origin of Time: The instant Sunday Times bestseller",
    author: "Thomas Hertog",
  },
];
```

</details>

Add the import statement in the `index.js` file

```js
import { books } from "./books";
```

<details>
  <summary>Code in the Book.js file</summary>

```javascript
import React from "react";

const Book = ({ img, title, author }) => {
  // Attribute, eventHandler
  // onClick, onMouseOver
  const clickHandler = () => {
    alert("hello");
  };
  const complexExample = (author) => {
    console.log(author);
  };
  return (
    <article
      className="book"
      onMouseOver={() => {
        console.log(title);
      }}
    >
      <img src={img} alt="" />
      <h1 onClick={() => console.log(title)}>{title}</h1>
      <h4>{author}</h4>
      <button type="button" onClick={clickHandler}>
        Reference example
      </button>
      <button type="button" onClick={() => complexExample(author)}>
        More complex example
      </button>
    </article>
  );
};

export default Book;
```

</details>

Add the import statement in the `index.js` file

```js
import Book from "./Book";
```

## 25. Free Hosting

Use when releasing an application

```js
npm run built
```

## 25. Advanced Intro

Topics that will be covered:

- useState
- useEffect
- Conditional Rendering
- Form
- useRef
- useReducer
- Prop Drilling
- Context ART / useContext

To start the application `npm install` and then `npm start`

If the program doen't run in the `package.json` file change the line

```js
"start": "react-scripts start"
```

to

```js
"start": "react-scripts --openssl-legacy-provider start"
```

## 26. UseState - Simple Use Case

- To begin add the following code to the `app.js`

```js
import Setup from "./tutorial/1-useState/setup/1-error-example";
```

- In the `1-error-example.js` file, add a new variable, create the `React.Fragment `and add the `h2` with the `title`.

```js
import React from "react";

const ErrorExample = () => {
  let title = "random title";

  return (
    <React.Fragment>
      <h2>{title}</h2>
    </React.Fragment>
  );
};

export default ErrorExample;
```

- Add a new funcion and a button

```js
const ErrorExample = () => {
  let title = "random title";
  const handleClick = () => {
    console.log(title);
  };

  return (
    <React.Fragment>
      <h2>{title}</h2>
      <button type="button" className="btn" onClick={handleClick}>
        Change title
      </button>
    </React.Fragment>
  );
};
```

## 27. UseState - Basics

- Change the path to:

```js
import Setup from "./tutorial/1-useState/setup/2-useState-basics";
```

- The code for the `useState`

```js
import React, { useState } from "react";

const UseStateBasics = () => {
  const [text, setText] = useState("random title");
  const handleClick = () => {
    if (text === "random title") {
      setText("Hello world");
    } else {
      setText("random title");
    }
  };

  return (
    <React.Fragment>
      <h1>{text}</h1>
      <button type="button" className="btn" onClick={handleClick}>
        Change title
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;
```

## 28. General rules of hooks

## 29. UseState - array example

- Change the path in the `app.js` to

```js
import Setup from "./tutorial/1-useState/setup/3-useState-array";
```

- The code in the `3-UseState-Arrays.js`

<details>
  <summary>Removing all items</summary>

```javascript
import React from "react";
import { data } from "../../../data";

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data);

  return (
    <React.Fragment>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
          </div>
        );
      })}
      <button className="btn" onClick={() => setPeople([])}>
        Clear Items
      </button>
    </React.Fragment>
  );
};

export default UseStateArray;
```

</details>

<details>
  <summary>Removing individual items</summary>

```javascript
import React from "react";
import { data } from "../../../data";

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data);

  const removeItem = (id) => {
    let newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };

  return (
    <React.Fragment>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>Remove</button>
          </div>
        );
      })}
      <button className="btn" onClick={() => setPeople([])}>
        Clear Items
      </button>
    </React.Fragment>
  );
};

export default UseStateArray;
```

</details>

## 30. UseState - Object Example

Change the path in the `app.js` to:

```js
import Setup from "./tutorial/1-useState/setup/4-useState-object";
```
