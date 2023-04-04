import React from "react";
import ReactDOM from "react-dom";
import { Button } from "../../src";

const App = () => {
  return (
    <div>
      <h1>Hello esbuild</h1>
      <Button label="Click Me" size="large" type="success" />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
