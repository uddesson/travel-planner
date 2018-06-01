import React from "react";
import PropTypes from "prop-types";
import TextInput from "./TextInput";
import StatusBar from "./StatusBar";
import UpdateButton from "./UpdateButton";
import Title from "./Title";

class Options extends React.Component{

    state = {
        dateSetAsInput: "",
        dateInCountDownFormat: this.props.countDownSetByUser,
        note: this.props.noteSetByUser,
        showStatus: false,
        statusMessage: ""
    }

    componentDidMount(){
        /* Format and set the date that shows as input date-value,
        but only if there is a locally stored date to format */
        if(this.props.countDownSetByUser){
            this.formatAndSetDate(this.props.countDownSetByUser)
        }
    }

    /* Recives a locally stored date in countdown-format
    and outputs it as a YYYY-MM-DD value in the date-input field */
    formatAndSetDate = (storedDate) => {
        let dateSetAsInput = new Date(storedDate)

        let month = "" + (dateSetAsInput.getMonth() + 1);
        let day = "" + dateSetAsInput.getDate();
        let year = dateSetAsInput.getFullYear();

        if (month.length < 2){
            month = "0" + month;
        }
        if (day.length < 2){
            day = "0" + day;
        }

        dateSetAsInput = year + "-" + month + "-" + day;
        this.setState( {dateSetAsInput} )
    }

    validateAndSetNewDateInput = (event) => {
        event.preventDefault();
        let dateSetAsInput = event.target.value;
        // Is set directly onChange because it's the the value of the inputfield
        this.setState( {dateSetAsInput} );

        let now = new Date();
        let inputDateToValidate = new Date(dateSetAsInput);

        // Expression for YYYY-MM-HH
        const regex = new RegExp(/([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/);

        /* This will validate both the input format (dateSetAsInput) and
        check so the date (inputDateToValidate) has not already passed */
        if(regex.test(dateSetAsInput) && inputDateToValidate > now){

            let dateInCountDownFormat = new Date(inputDateToValidate).getTime();

            // Date was valid, set to state in countdown-format
            this.setState({ dateInCountDownFormat, showStatus: false });

        } else {
            this.setState({ showStatus: true, statusMessage: "Invalid date." })
        }
    }

    setNoteInput = (event) => {
        event.preventDefault();
        let note = event.target.value;
        this.setState({ note });
    }

    handleOptionChange = (event) => {
        event.preventDefault();

        if(this.noteInputIsValid(this.state.note)){
            // Send new values up to App and other components
            this.props.handleOptionChange(this.state.dateInCountDownFormat, this.state.note);
        } else {
            return;
        }
    }

    noteInputIsValid = (note) => {
        if (note === undefined || note.trim() === "") {
            this.setState({
                showStatus: true,
                statusMessage: "You haven't entered a note."
            })
            return false;
        } else {
            let chars = note.split('');

            if (chars.length === 0) {
                this.setState({
                    showStatus: true,
                    statusMessage: "You haven't entered a note."
                })
                return false;
            }
            if(chars.length > 120) {
                this.setState({
                    showStatus: true,
                    statusMessage: "Your note exceeded 120 characters."
                })
                return false;
            }
            if(chars.length >= 1){
                this.setState({ showStatus: false, statusMessage: "" })
                return true;
            }
        }
    }

    render(){
        return(
            <div id="options" className="options">
                {this.state.showStatus &&
                    <StatusBar
                        statusMessage={ this.state.statusMessage }
                    />
                }

                <Title size={2} content="Update your trip" />

                <form onSubmit={ this.handleOptionChange }>
                    <TextInput
                        htmlFor={ "Date" }
                        label={ "Update departure date:" }
                        value={ this.state.dateSetAsInput }
                        className="u-block"
                        onChange={ this.validateAndSetNewDateInput }
                        placeholder="YYYY-MM-DD"
                    />
                </form>

                <form onSubmit={ this.handleOptionChange }>
                    <TextInput
                        textArea={true}
                        htmlFor={ "Note" }
                        label={ "Current reminder:" }
                        className="u-block"
                        onChange={ this.setNoteInput }
                        value={ this.state.note || "" }
                        placeholder="Max 120 characters"
                    />
                   <UpdateButton />
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