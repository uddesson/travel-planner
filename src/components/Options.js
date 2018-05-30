import React from "react";
import PropTypes from "prop-types";
import TextInput from "./TextInput";

class Options extends React.Component{

    state = {
        date: "",
        formattedDate: this.props.countDownSetByUser,
        note: this.props.noteSetByUser
    }

    componentDidMount(){
        /* Format and set the date that shows as input date-value,
        but only if there is a locally stored date to format */
        if(this.props.countDownSetByUser){
            this.formatAndSetDate(this.props.countDownSetByUser)
        }
    }

    validateDateInput = (event) => {
        event.preventDefault();

        let now = new Date();
        let input = event.target.value;

        this.setState( {date: input} );

        let inputDate = new Date(event.target.value);

        // Don't accept dates that have passed
        if(inputDate > now){
            let newDate = new Date(inputDate).getTime();
            this.setState({ formattedDate: newDate });
        }
    }

    validateNoteInput = (event) => {
        event.preventDefault();
        let note = event.target.value;
        this.setState( {note} );
    }

    handleOptionChange = (event) => {
        event.preventDefault();
        this.props.handleOptionChange(this.state.formattedDate, this.state.note);
    }


    formatAndSetDate = (newDate) => {
        let date = new Date(newDate)

        let month = "" + (date.getMonth() + 1);
        let day = "" + date.getDate();
        let year = date.getFullYear();

        if (month.length < 2){
            month = "0" + month;
        }
        if (day.length < 2){
            day = "0" + day;
        }

        date = year + "-" + month + "-" + day;
        this.setState( {date} )
    }

    // TODO: Separate these into components
    render(){
        return(
            <div id="options" className="options">
                <h3>Options</h3>

                <form onSubmit={ this.handleOptionChange }>
                    <TextInput
                        htmlFor={ "Date" }
                        label={ "Update departure date:" }
                        value={ this.state.date }
                        onChange={ this.validateDateInput }
                        placeholder="YYYY-MM-DD"
                    />
                    <input type="submit"></input>
                </form>

                <form onSubmit={ this.handleOptionChange }>
                <TextInput
                    htmlFor={ "Note" }
                    label={ "Current reminder:" }
                    onChange={ this.validateNoteInput }
                    value={ this.state.note || "" }
                    placeholder="Min 5 chars"
                />
                <input type="submit"></input>
                </form>
            </div>
        )
    };
}

Options.propTypes = {
    handleOptionChange: PropTypes.func,
    countDownSetByUser: PropTypes.number,
    noteSetByUser: PropTypes.string
}

export default Options;