import React from 'react';
import TextField from '@material-ui/core/TextField';

const RightPanel = (props) => {
    return (
        <TextField
        id="outlined-name"
        label="Country"
        value={props.countryName}
        // onChange={handleChange('name')}
        margin="normal"
        variant="outlined"
      />
    );
}

export default RightPanel;