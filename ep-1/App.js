import React from "react";
import  ReactDOM from "react-dom/client"

// React element
// const title = (
//     <h1 className="head" tabIndex="5">
//         Namaste React using JSX 🚀
//     </h1>
// );

// React component
const Title = () => (
    <h1 className="head" tabIndex="5">
        Namaste React using JSX 🚀
    </h1>
);

// Component composition (component inside a component)
// const HeadingComponent = () => (
//     <div id="container">
//         <Title />
//         <Title></Title> // this also works the same way as the above line
//         <h1 className="heading">Namaste React Functional Component</h1>
//     </div>
// );

// React element inside a component
const HeadingComponent = () => (
    <div id="container">
        {Title()}
        <Title />
        <Title></Title>
        {/* {title()} if title were a function, you could have called it like this  */}
        <h1 className="heading">Namaste React Functional Component</h1>
    </div>
);

const root  = ReactDOM.createRoot(document.getElementById("root"));

// root.render(jsxheading); rendering react element
root.render(<HeadingComponent />); // rendering react functional component
