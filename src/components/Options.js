import React from 'react';

class Options extends React.Component{

    state = {
        newCountDownDate: ''
    }

    handleDateInput = (event) => {
        event.preventDefault();
        let now = new Date();
        let inputDate = new Date(event.target.value);

        // Don't accept dates that have passed
        if(inputDate > now){
            let newCountDownDate = new Date(inputDate).getTime();
            this.setState({ newCountDownDate });
        }
    }

    handleChange = (event) => {
        event.preventDefault();
        this.props.handleChange(this.state.newCountDownDate);
    }

    render(){
        return(
            <div id="options">
                <h3>Options</h3>
                <form onSubmit={this.handleChange}>
                    <label htmlFor="date">Update departure date:</label>
                    <br/>
                    <input
                        type="text"
                        name="date"
                        value={this.state.date}
                        onChange={this.handleDateInput}
                        placeholder="YYYY-MM-DD">
                    </input>
                <input type="submit"></input>
                </form>
            </div>
        )
    };
}

export default Options;