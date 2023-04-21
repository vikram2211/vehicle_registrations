import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export class FormVehicleDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
        <>
          <Dialog
            open
            fullWidth
            maxWidth='sm'
          >
            <AppBar title="Enter Vehicle Details" />
            <TextField
              placeholder="Enter Wheelers of a vehicle"
              label="Wheelers"
              onChange={handleChange('wheelers')}
              defaultValue={values.wheelers}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="Enter Vehicle Type"
              label="Type"
              onChange={handleChange('type')}
              defaultValue={values.type}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="Enter Model"
              label="Model"
              onChange={handleChange('model')}
              defaultValue={values.model}
              margin="normal"
              fullWidth
            />
            <br />

            <TextField
              placeholder="Enter Date"
              label="Date"
              onChange={handleChange('date')}
              defaultValue={values.date}
              margin="normal"
              fullWidth
            />
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
            >Continue</Button>
          </Dialog>
        </>
      </MuiThemeProvider>
    );
  }
}

export default FormVehicleDetails;
