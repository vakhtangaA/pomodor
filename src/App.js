import React from "react";
import "./App.css";
import TimeControl from "./components/TimeControl";
import Timer from "./components/Timer";
import "../node_modules/font-awesome/css/font-awesome.min.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      session: true,
      breakLength: 5,
      sessionLength: 25,
    };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);
  }

  increment = (event) => {
    if (
      this.state.sessionLength === 60 &&
      event.target.id === "session-increment"
    ) {
      this.setState({ sessionLength: 60 });
    } else if (
      this.state.breakLength === 60 &&
      event.target.id === "break-increment"
    ) {
      this.setState({ breakLength: 60 });
    } else {
      event.target.id === "session-increment"
        ? this.setState((prevState) => ({
            sessionLength: prevState.sessionLength + 1,
          }))
        : this.setState((prevState) => ({
            breakLength: prevState.breakLength + 1,
          }));
    }
  };

  decrement = (event) => {
    if (
      this.state.sessionLength === 1 &&
      event.target.id === "session-decrement"
    ) {
      this.setState({ sessionLength: 1 });
    } else if (
      this.state.breakLength === 1 &&
      event.target.id === "break-decrement"
    ) {
      this.setState({ breakLength: 1 });
    } else {
      event.target.id === "session-decrement"
        ? this.setState((prevState) => ({
            sessionLength: prevState.sessionLength - 1,
          }))
        : this.setState((prevState) => ({
            breakLength: prevState.breakLength - 1,
          }));
    }
  };

  reset() {
    this.setState({ breakLength: 5, sessionLength: 25 });
  }

  render() {
    return (
      <div className="App">
        <div className="timer">
          <TimeControl
            handleIncrement={this.increment}
            handleDecrement={this.decrement}
            id="break-label"
            name="Break Length"
            decrementId="break-decrement"
            incrementId="break-increment"
            lengthId="break-length"
            defaultLength={this.state.breakLength}
            key="first"
          />
          <TimeControl
            id="session-label"
            handleIncrement={this.increment}
            handleDecrement={this.decrement}
            name="Session Length"
            decrementId="session-decrement"
            incrementId="session-increment"
            lengthId="session-length"
            defaultLength={this.state.sessionLength}
            key="second"
          />
          <Timer
            session={this.state.session}
            handleReset={this.reset}
            sessionLength={this.state.sessionLength}
            breakLength={this.state.breakLength}
          />
        </div>
      </div>
    );
  }
}

export default App;
