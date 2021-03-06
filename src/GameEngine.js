import React, { useReducer } from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import { Switch } from "react-router";
import { Game } from "./Game";
import { Home } from "./Home";
import { End } from "./End";
import * as tf from "@tensorflow/tfjs";

const model = tf.loadModel("./model/model.json");

// REQUIREMENT: Use of Context to avoid "prop-drilling"
const PointsContext = React.createContext();

function transferPointsReducer(points, action) {
  switch (action.transferredPoint) {
    case "increment":
      return points + 1;
    case "decrement":
      return points - 1;
    case "reset":
      return points = 0;
    default:
  }
}

function GameEngine() {

  const initialState = 0;

  // REQUIREMENT: Appropriate use of the useReducer() hook
  var [points, setPoints] = useReducer(transferPointsReducer, initialState);

  function setThePoints(increase) {
    if (increase === "plus") {
      setPoints({ transferredPoint: "increment" });
    }

    else if (increase === "minus") {
      setPoints({ transferredPoint: "decrement" });
    }

    else if (increase === "reset") {
      setPoints({ transferredPoint: "reset" });
    }

  }

  // REQUIREMENT: Use of Context to avoid "prop-drilling"
  return (
    <PointsContext.Provider value={{
      "points": points,
      "setThePoints": setThePoints
    }}>
      <AppRouter setThePoints={setThePoints} />
    </PointsContext.Provider>
  );
}

function HomeRouter() {
  return <Home />;
}

function GameRouter(props) {

  return (
    <Game setThePoints={props.setThePoints} model={model} />
  );
}

function EndRouter() {

  return (
    <End />
  );
}

function NoMatch() {

  return <Home />;
}

function AppRouter(props) {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={HomeRouter} />
          <Route
            path="/game"
            render={(routeProps) => (<GameRouter {...routeProps} {...props}
              setThePoints={props.setThePoints} />)}
          />
          <Route path="/end" component={EndRouter} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export { GameEngine };
export const PointsProvider = PointsContext.Provider;
export const PointsConsumer = PointsContext.Consumer;
export { PointsContext };
export { HomeRouter };
export { GameRouter };
export { EndRouter };