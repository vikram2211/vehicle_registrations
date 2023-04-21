import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { List, ListItem, ListItemText } from '@material-ui/core/';
import Button from '@material-ui/core/Button';

export class Confirm extends Component {


  continue = e => {
    e.preventDefault();

   this.submit()

    this.props.nextStep();
  };

  submit = async () => {
    let data = {
      "fname": this.props.values.firstName,
      "lname": this.props.values.lastName,
      "vehicle": this.props.values.wheelers,
      "vehicle_type": this.props.values.type,
      "vehicle_model": this.props.values.model,
      "date": this.props.values.date
  }
    console.warn(data);
    let result = await fetch("http://localhost:3000/register", {
      method: "post",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const {
      values: { firstName, lastName, wheelers, type, model, date }
    } = this.props;
    return (
      <MuiThemeProvider>
        <>
          <Dialog
            open
            fullWidth
            maxWidth='sm'
          >
            <AppBar title="Confirm User Data" />
            <List>
              <ListItem>
                <ListItemText primary="First Name" secondary={firstName} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Last Name" secondary={lastName} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Wheelers" secondary={wheelers} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Type" secondary={type} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Model" secondary={model} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Date" secondary={date} />
              </ListItem>
            </List>
            <br />

            <Button
              color="secondary"
              variant="contained"
              onClick={this.back}
            >Back</Button>

            <Button
              color="primary"
              variant="contained"
              onClick={this.continue}
            >Confirm & Continue</Button>
          </Dialog>
        </>
      </MuiThemeProvider>
    );
  }
}

export default Confirm;
