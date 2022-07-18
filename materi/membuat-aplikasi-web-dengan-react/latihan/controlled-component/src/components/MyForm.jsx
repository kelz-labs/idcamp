import React from "react";

class MyForm extends React.Component {
    constructor(props) {
        super(props);

        // inisialisasi state 
        this.state = {
            name: '',
            email: '',
            gender: 'Man',
        }

        this.onNameChangeEventHandler = this.onNameChangeEventHandler.bind(this);
        this.onEmailChangeEventHandler = this.onEmailChangeEventHandler.bind(this);
        this.onGenderChangeEventHandler = this.onGenderChangeEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this)
    }

    onNameChangeEventHandler(event) {
        this.setState((prevState) => {
            return {
                ...prevState,
                name: event.target.value
            }
        })
    }

    onSubmitEventHandler(event) {
        // mengehentikan aksi default dari tombol submit
        event.preventDefault();

        const message = `
        Name: ${this.state.name}
        Email: ${this.state.email}
        Gender: ${this.state.gender}
        `;

        alert(message);
    }

    onEmailChangeEventHandler(event) {
        this.setState((prevState) => {
            return {
                ...prevState,
                email: event.target.value
            }
        })
    }

    onGenderChangeEventHandler(event) {
        this.setState((prevState) => {
            return {
                ...prevState,
                gender: event.target.value
            }
        })
    }

    // binding this context to event handler 
    render() {
        return (
            <div>
                <h1>Register Form</h1>
                <form action="" onSubmit={this.onSubmitEventHandler}>
                    <label htmlFor="name">Name: </label>
                    <br />
                    <input type="text" name="" id="name" value={this.state.name} onChange={this.onNameChangeEventHandler} />
                    <br />
                    <label htmlFor="email">Email: </label>
                    <input type="text" name="" id="email" value={this.state.email} onChange={this.onEmailChangeEventHandler} />
                    <br />
                    <label htmlFor="gender">Gender: </label>
                    <select name="" id="gender" value={this.state.gender} onChange={this.onGenderChangeEventHandler}>
                        <option value="Man">Man</option>
                        <option value="Woman">Woman</option>
                    </select>
                    <br />
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default MyForm; 