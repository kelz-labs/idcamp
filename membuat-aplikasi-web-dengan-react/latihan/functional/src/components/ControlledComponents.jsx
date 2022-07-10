import React from "react";

class NameForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: ''
        };
    }

    onEmailChangeHandler(event) {
        this.setState(() => {
            return {
                email: event.target.value
            }
        })
    }

    render() {
        return (
            <form action="">
                <input type="text" name="" value={this.state.email} id="" onChange={this.onEmailChangeHandler} />
            </form>
        )
    }
}