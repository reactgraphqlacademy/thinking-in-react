## ReactJS Fundamentals - Thinking in React

The goal of this exercise is to learn how to think in React.

## Prerequisites

You need to be comfortable writing JavaScript and HTML to do this exercise. The exercise uses the following ES6 & ES5 features:

- Module system ([import](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)/ [export](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export))
- [Class syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes) (extends, constructor)
- [Arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
- [Array.map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) and [Array.filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)

You need to have `node` and `npm` installed on your computer.

### If you find this exercise too difficult

If you find the exercise too difficult we recommend you to do the following basic React course from [freeCodeCamp](https://learn.freecodecamp.org/front-end-libraries/react/) before.

## Getting started

```console
git clone git@github.com:reactjsacademy/thinking-in-react.git
cd thinking-in-react
npm install
npm start
```

## Exercise

Before you start, there are two types of components [Functional Components and Class Components](https://reactjs.org/docs/components-and-props.html#function-and-class-components).

```javascript
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

```javascript
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

Try to use a Functional component if the component doesn't have state, you'll need to refactor code a few times during the next exercise 😁

### Tasks

- [ ] 1. Refactor the “about” and “footer” sections by creating a functional component for each.
      Make sure everything works.

- [ ] 2. Refactor the navbar by creating a Functional Component.
      Pass the dependencies (`this.toggleMenu` in this case) via props.
      Make sure everything works by clicking on the "Training" button at the top right of the screen.

- [ ] 3. Refactor the books section by creating a functional component and pass the dependencies via props.
      Make sure everything works.

- [ ] 4. Is there any state in app that should be in the Books component?
      Refactor `<Books>` if appropriate. Should `<Books>` be a Functional Component or a Class Component now?

- [ ] 5. Break `<Books>` down into `<BookList>` and `<BookFilter>`

- [ ] 6. What do you think it would make sense to componentize next?
      Are there any parts on that view that you can reuse? Try to explain to a mentor what you want to refactor before you code 😁

## Articles and links


- [Introduction to Thinking in React](https://reactjs.academy/blog/introduction-to-thinking-in-react/)
- [A Beginner’s Guide to React](https://medium.com/leanjs/introduction-to-react-3000e9cbcd26)
- [Introduction to JSX](https://reactjs.org/docs/introducing-jsx.html)
- Basic React course from [freeCodeCamp](https://learn.freecodecamp.org/front-end-libraries/react/)
- [https://reactjs.org/docs/lifting-state-up.html](https://reactjs.org/docs/lifting-state-up.html)
- [https://reactjs.org/docs/thinking-in-react.html](https://reactjs.org/docs/thinking-in-react.html)
- [babel repl example](https://babeljs.io/repl#?babili=false&browsers=&build=&builtIns=false&spec=false&loose=false&code_lz=JYWwDg9gTgLgBAJQKYEMDG8BmUIjgIilQ3wCg0IA7AZ3gAkkAbRiAYV0kqUvgF44AFAEo4vAHwEAFsHwBuUqQA8AE2AA3OGkYpq1AHIoQSXvgo8UwLlHxjScOCvWbtug0ZM4A7jbv24AbwZmNg4qbhgAX19FAHpVNVtY-LEgA&debug=false&forceAllTransforms=false&shippedProposals=false&circleciRepo=&evaluate=true&fileSize=false&timeTravel=false&sourceType=module&lineWrap=false&presets=es2015,es2016,es2017,react,stage-2&prettier=false&targets=&version=7.3.3)


## License

This material is available for private, non-commercial use under the [GPL version 3](http://www.gnu.org/licenses/gpl-3.0-standalone.html).
