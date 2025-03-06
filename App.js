/**
 *
 * <div id="parent">
 *      <div id="child">
 *          <h1> I'm an h1 tag</h1>
 *          <h2> I'm an h2 tag</h2>   //if want to give siblings create an Array for 3rd Argument of create child.
 *      </div>
 * </div>
 *
 */

const parent = React.createElement(
  "div",
  { id: "parent" },
  [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I'm an h1 tag."),
    React.createElement("h2", {}, "I'm an h2 tag."),
  ]),

  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I'm an h1 tag."),
    React.createElement("h2", {}, "I'm an h2 tag."),
  ])
  ]
);

const header = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World from React!"
);

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
