// Hello world from Javscript --------------------------------------------
const heading = document.createElement('h1');
heading.textContent = 'Hello World from Javascript';

const rootDOM = document.getElementById('root');
rootDOM.appendChild(heading);


// Hello world from React (it will replace anything inside the root "the element we run react in") --------------------------------------------------
const headingReact = React.createElement('h1', {id: 'heading'}, 'Hello From React');
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(headingReact);

console.log(headingReact, '<--'); // This is a plain JS Object