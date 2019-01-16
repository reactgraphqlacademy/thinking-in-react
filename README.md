## ReactJS Fundamentals - Thinking in React

The goal of this exercise is to learn how to implement hooks in a basic react app .


## Getting started:

`git clone git@github.com:leanjscom/thinking-in-react.git && cd thinking-in-react && npm install && npm start`


### Tasks

1- Run npm install and make sure everything works, you can print the version of React you're running using `React.Version`.


2- Refactor the App component in /src/components/App.js so that it is a functional component that uses hooks with useState() for the toggleMenu function. Make sure everything works.


3- Refactor the Books component in src/components/Books/index.js. Do you need a mergeState here? Make sure everything works.


4- To practice useEffect() replace the dummy data we are using in src/mocks/books.js and make an api call to replace the books with some other data. You can use this api that will return a list of block colors which have thumbnail images:
http://jsonplaceholder.typicode.com/photos?_limit=30. Don't forget the _limit=30 parameter at the end of the query or it will be slow. For an indivual image you can use this endpoint: http://jsonplaceholder.typicode.com/photos/<PHOTO_ID>

Feel free to use any other API of your chocie that returns images!

5- Implement a community hook such as useDocumentTitle or useLocalStorage

### Links

* [Hooks documentation](https://reactjs.org/docs/hooks-overview.html#-state-hook)
* [Tutorial video of live coding](https://youtu.be/8ejtnaOxXQE)

## License

This material is available for private, non-commercial use under the [GPL version 3](http://www.gnu.org/licenses/gpl-3.0-standalone.html).
