/*
* <div id="parent">
*   <div id="child1">
*       <h1> Hello world from child1!</h1>
*       <h2> Hello world from child1!</h2>
*   </div>
*   <div id="child2">
*       <h1> Hello world from child2!</h1>
*       <h2> Hello world from child2!</h2>
*   </div>
* </div> 
*/

const parent = React.createElement("div",
    { id: "parent" },
    [
        React.createElement("div", { id: "child1" },
            [
                React.createElement("h1", {}, "Hello world from child 1!"),
                React.createElement("h2", {}, "Hello world from child 1!")
            ]
        ),
        React.createElement("div", { id: "child2" },
            [
                React.createElement("h1", {}, "Hello world from child 2!"),
                React.createElement("h2", {}, "Hello world from child 2!")
            ]
        )]
);

//const heading = React.createElement("h1", { id: "heading" }, "Hello world from React!")

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);