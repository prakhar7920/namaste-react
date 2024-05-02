const heading = React.createElement("h1",{id:"heading"},"Hello World from React !!");

console.log(heading); // returns a React object.

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
