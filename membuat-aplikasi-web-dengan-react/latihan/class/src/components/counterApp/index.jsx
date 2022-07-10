import React from "react";

const CounterDisplay = ({ count }) => {
    return (
        <p>{count % 3 === 0 && count % 5 === 0 ? "FizzBuzz" : count % 3 === 0 ? "Fizz" : count % 5 === 0 ? "Buzz" : count}</p>
    )
}

const IncreaseButton = ({ increase }) => {
    return (
        <div>
            <button onClick={increase}>+ increase</button>
        </div>
    )
}

const ResetButton = ({ reset }) => {
    return (
        <div>
            <button onClick={reset}>- reset</button>
        </div>
    )
}

class CounterApp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0
        }

        // binding event handler 
        this.onIncreaseEventHandler = this.onIncreaseEventHandler.bind(this);
        this.onResetEventHandler = this.onResetEventHandler.bind(this);
    }

    onIncreaseEventHandler() {
        this.setState((previousState) => {
            return {
                count: previousState.count + 1
            }

        })
    }

    onResetEventHandler() {
        this.setState(() => {
            return {
                count: 0
            }
        })
    }

    render() {
        return (
            <div>
                <IncreaseButton increase={this.onIncreaseEventHandler} />
                <CounterDisplay count={this.state.count} />
                <ResetButton reset={this.onResetEventHandler} />
            </div>
        )
    }
}

export default CounterApp; 