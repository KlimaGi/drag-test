import React from "react";
//import Home from "./Home";
//import About from "./About";
import { Route, Switch } from "react-router-dom";
import { Button } from "@material-ui/core";
// import Jobs from "./Jobs";
// import Engineer from "./Engineer";
// import Marketer from "./Marketer";
// import Designer from "./Designer";
import BasicBreadcrumbs from "./Breadcrumbs";

export default function App() {
  return (
    <>
      <BasicBreadcrumbs />
      <Switch>
        <Route exact from="/" render={props => <Home {...props} />} />
        <Route exact path="/about" render={props => <About {...props} />} />
        <Route exact path="/jobs" render={props => <Jobs {...props} />} />
        <Route
          exact
          path="/jobs/engineer"
          render={props => <Engineer {...props} />}
        />
        <Route
          exact
          path="/jobs/marketer"
          render={props => <Marketer {...props} />}
        />
        <Route
          exact
          path="/jobs/designer"
          render={props => <Designer {...props} />}
        />
      </Switch>
    </>
  );
}

const Engineer = () => {
  return <div>Apply to be an engineer!</div>;
};

const Designer = () => {
  return <div>Apply for our designer position!</div>;
};

const About = (props) => {
  return <div>About page there</div>;
};

const Home = props => {
  const { history } = props;
  return (
    <>
      <Button onClick={() => history.push("/about")}>ABOUT</Button>
      <Button onClick={() => history.push("/jobs")}>JOBS</Button>
    </>
  );
};


const Jobs = props => {
  const { history } = props;
  return (
    <>
      <Button onClick={() => history.push("/jobs/engineer")}>engineer</Button>
      <Button onClick={() => history.push("/jobs/marketer")}>marketer</Button>
      <Button onClick={() => history.push("/jobs/designer")}>designer</Button>
    </>
  );
};

const Marketer = () => {
  return <div>Become a marketer for our company!</div>;
};
