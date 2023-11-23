import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/App';

// // ! Hello world from Javscript --------------------------------------------
// const heading = document.createElement('h1');
// heading.textContent = 'Hello World from Javascript';

// const rootDOM = document.getElementById('root');
// rootDOM.appendChild(heading);

// // ! Hello world from React (it will replace anything inside the root "the element we run react in") --------------------------------------------------
// // ? React.creatElement  => React Element (JS Object) => HTMLElement(render)
// // heading from react core
// const headingReact = React.createElement(
//   'h1',
//   { id: 'heading' },
//   'Hello From React'
// );

// // heading from react JSX
// const headingJSX = <h1 className='heading'>Hello From JSX</h1>;

// console.log(headingReact, headingJSX, 'object'); // * React Element

// // * React functional Component
// const HeadingComponent = () => {
//   return <h1 className='heading'>React functional component</h1>;
// };

const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(headingJSX);
// root.render(<HeadingComponent />)

root.render(<App />)
