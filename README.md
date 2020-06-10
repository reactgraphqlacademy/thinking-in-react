## React Fundamentals / Thinking in React

The learning objectives of this exercise are:
- Understand the difference between declarative and imperative programming
- Learn how to breaking down your UI into components
- Comprehend what's state, which components should hold it, and when to lift it up.

## Teaching method

1. Collaborative learning environment & pair programming.
   - Rooms with small groups
   - Work together, discuss, help each other.
2. We try to foster critical thinking.
   - ⬆️ Discovery ⬇️ Instruction
3. We don’t explain everything you need to know before the exercise:
   - Learn by doing (and teaching ;)
   - The exercise is meant to help you build a mental model

## Prerequisites

You need to be comfortable writing JavaScript and HTML to do this exercise. The exercise uses the following ES6 & ES5 features:

- Module system ([import](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)/ [export](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export))
- [Arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
- [Array.map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) and [Array.filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)

You need to have `node` and `npm` installed on your computer.

### If you find this exercise too difficult

If you find the exercise too difficult we recommend you to do the following basic React course from [freeCodeCamp](https://learn.freecodecamp.org/front-end-libraries/react/) before.

## Getting started

```console
git clone https://github.com/reactgraphqlacademy/thinking-in-react
cd thinking-in-react
npm install
npm start
```

## 🥑 Before we start the exercise

Before you start, we are going to use the [useState hook](https://reactjs.org/docs/hooks-state.html) in this exercise. 

```javascript
import React, { useState } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```

The goal of this exercise is to understand what's state and how to reason about it. The goal of this exercise is not to learn how the useState hook works. How we store the state is an implementation detail. The principles you'll learn in this exercise can be applied to classes & this.setState, hooks, and some other state management libraries. 

## 🤸‍♀️ Exercise

- [ ] 1. Refactor the “about” and “footer” sections by creating a function component for each.
      Make sure everything works.

- [ ] 2. Refactor the navbar by creating a Function Component.
      Pass the dependencies (`toggleMenu` in this case) via props.
      Make sure everything works by clicking on the "Training" button at the top right of the screen.

- [ ] 3. Refactor the books section by creating a function component and pass the dependencies via props.
      Make sure everything works.

- [ ] 4. Is there any state in app that should be in the Books component?
      Refactor `<Books>` if appropriate. 

- [ ] 5. Break `<Books>` down into `<BookList>` and `<BookFilter>`

## 🏋️‍♀️ Bonus exercise
- Abstract the `button` component that is inside the `Navbar` component and the `Menu` component into its own `Button` component. Do we know ahead of time who are the children of the `Button` component? Try to use the prop called `children` for the elements displayed inside the button.
- Can we move the `isMenuOpen` state inside the menu? Does it conflict with the idea of "lifting the state up".
- If you look at the [React Profiler](https://reactjs.org/blog/2018/09/10/introducing-the-react-profiler.html) when you open and close the menu, is the whole app being rendered? If so, how can we avoid that and still lift the state up?

## Articles and links

- [Lecture: Introduction to Thinking in React](https://reactgraphql.academy/react/introduction-to-thinking-in-react/)
- [A Beginner’s Guide to React](https://medium.com/leanjs/introduction-to-react-3000e9cbcd26)
- [Introduction to JSX](https://reactjs.org/docs/introducing-jsx.html)
- Basic React course from [freeCodeCamp](https://learn.freecodecamp.org/front-end-libraries/react/)
- [https://reactjs.org/docs/lifting-state-up.html](https://reactjs.org/docs/lifting-state-up.html)
- [https://reactjs.org/docs/thinking-in-react.html](https://reactjs.org/docs/thinking-in-react.html)
- [babel repl example](https://babeljs.io/repl#?browsers=&build=&builtIns=false&spec=false&loose=false&code_lz=JYWwDg9gTgLgBAJQKYEMDG8BmUIjgIilQ3wChS0IA7AZ3gAkkAbJiAYV0iqSvgF44ACgCUcPgD4CAC2D4A3OQA8AE2AA3OGiYoaNAHIoQSPvkq8UwblHzjScOCvWbtug0ZM4A7jbv2HjFnZOah54AHpbe0Uw1TVbaNjxIA&debug=false&forceAllTransforms=false&shippedProposals=false&circleciRepo=&evaluate=true&fileSize=false&timeTravel=false&sourceType=module&lineWrap=false&presets=es2015%2Ces2016%2Ces2017%2Creact%2Cstage-2&prettier=false&targets=&version=7.3.3&externalPlugins=)


## License

This material is available for private, non-commercial use under the [GPL version 3](http://www.gnu.org/licenses/gpl-3.0-standalone.html).
