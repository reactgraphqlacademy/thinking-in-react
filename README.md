## ReactJS Fundamentals - Thinking in React

The goal of this exercise is to learn how to think in React.

## Requirements
You need to be comfortable writing JavaScript (ES6: Module system, class syntax, destructuring assignment).
You need to have `node`and `npm`installed in your computer.

## Getting started:

`git clone git@github.com:leanjscom/thinking-in-react.git && cd thinking-in-react && npm install && npm start`

## Exercise

Before you start, there are two types of components [Functional Components and Class Components](https://reactjs.org/docs/components-and-props.html#functional-and-class-components).  Try to use a Functional component if the component doesn't have state, you'll need to refactor code a few times during the next exercise :)

### Tasks

1- Refactor the “about” and “footer” sections by creating a stateless component for each. Make sure everything works.


2- Refactor the navbar by creating a stateless component and pass the dependencies via props. Make sure everything works.


3- Refactor the books section by creating a stateless component and pass the dependencies via props. Make sure everything works.


4- Is there any state in app that should be in the Books component?  Refactor &lt;Books&gt; books if appropriate. Should &lt;Books&gt; be a Functional Component or a Class Component now?


5- Break &lt;Books&gt; down into  &lt;BookList&gt; and &lt;BookFilter&gt;


6- What do you think it would make sense to componentize next? Are there any parts on that view that you can reuse? Try to explain to a mentor what you want to refactor before you code :)

### Links

* [https://medium.com/leanjs/introduction-to-react-3000e9cbcd26](https://medium.com/leanjs/introduction-to-react-3000e9cbcd26)
* [https://reactjs.org/docs/introducing-jsx.html](https://reactjs.org/docs/introducing-jsx.html)
* [https://reactjs.org/docs/thinking-in-react.html](https://reactjs.org/docs/thinking-in-react.html)
* [babel repl example](https://babeljs.io/repl/#?babili=false&browsers=&build=&builtIns=false&code_lz=MYewdgzgLgBAEgUwDZJAYRAWwA7gWWAXhgAoBKGQgPlICgYYAeAEwEsA3K-hpgCwEYqiFCACEjAPQCuPJtioB1ZKEwIYUEEwCGMXgCcEAM0IAiXlCjYIALgkSDW4FABWEAHSOtzBJgCeJqgAlBEcoACkAZTcAQWAvH19JLSpJeW5JNk5aMgBuWloWDhhgJC0ICAA5LVVTUAItVjAEPQD0zOLS8qqakz0QAHdW2QBvYVQMHDwCAF90iUyuDI4qIA&debug=false&forceAllTransforms=false&shippedProposals=false&circleciRepo=&evaluate=true&fileSize=false&lineWrap=false&presets=es2015%2Creact%2Cstage-2&prettier=false&targets=&version=6.26.0&envVersion=)

## License

This material is available for private, non-commercial use under the [GPL version 3](http://www.gnu.org/licenses/gpl-3.0-standalone.html).
