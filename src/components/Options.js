import React from 'react';

class Options extends React.Component{

    state = {
        date: '',
        formattedDate: '',
        note: ''
    }

    handleDateInput = (event) => {
        event.preventDefault();
        let now = new Date();
        let input = event.target.value;
        this.setState({date: input});

        let inputDate = new Date(event.target.value);

        // Don't accept dates that have passed
        if(inputDate > now){
            let formattedDate = new Date(inputDate).getTime();
            this.setState({ formattedDate });
        }
    }

    handleNoteInput = (event) => {
        event.preventDefault();
        let note = event.target.value;
        this.setState({note});
    }

    handleChange = (event) => {
        event.preventDefault();
        this.props.handleChange(this.state.formattedDate, this.state.note);
    }

    // TODO: Separate these into components
    render(){
        return(
            <div id="options" className="options">
                <h3>Options</h3>
                <form onSubmit={this.handleChange}>
                    <label htmlFor="date">Update departure date:</label>
                    <br/>
                    <input
                        type="text"
                        name="date"
                        onChange={this.handleDateInput}
                        // value={this.state.formattedDate}
                        placeholder="YYYY-MM-DD">
                    </input>
                <input type="submit"></input>
                <br/>
                <label htmlFor="note">Current note:</label>
                    <br/>
                    <input
                        type="text"
                        name="note"
                        onChange={this.handleNoteInput}
                        value={this.state.note}
                        placeholder="Min 5 chars">
                    </input>
                <input type="submit"></input>
                </form>
            </div>
        )
    };
}

export default Options;