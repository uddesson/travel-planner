import React from 'react';
import PropTypes from 'prop-types';

class Options extends React.Component{

    state = {
        date: '',
        formattedDate: this.props.countDownSetByUser,
        note: this.props.noteSetByUser
    }

    componentDidMount(){
        this.convertDate(this.props.countDownSetByUser)
    }

    convertDate = (formattedDate) => {
        let date = new Date(formattedDate)

        let month = '' + (date.getMonth() + 1);
        let day = '' + date.getDate();
        let year = date.getFullYear();

        if (month.length < 2){
            month = '0' + month;
        }
        if (day.length < 2){
            day = '0' + day;
        }

        date = year + '-' + month + '-' + day;

        console.log(date)
        this.setState({date})
    }

    validateDateInput = (event) => {
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

    validateNoteInput = (event) => {
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
                        onChange={this.validateDateInput}
                        value={this.state.date}
                        placeholder="YYYY-MM-DD">
                    </input>
                <input type="submit"></input>
                </form>
                <br/>
                <form onSubmit={this.handleChange}>
                <label htmlFor="note">Current note:</label>
                    <br/>
                    <input
                        type="text"
                        name="note"
                        onChange={this.validateNoteInput}
                        value={this.state.note}
                        placeholder="Min 5 chars">
                    </input>
                <input type="submit"></input>
                </form>
            </div>
        )
    };
}

Options.propTypes = {
    handleChange: PropTypes.func,
    countDownSetByUser: PropTypes.number,
    noteSetByUser: PropTypes.string
}

export default Options;