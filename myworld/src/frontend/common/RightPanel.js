import React from 'react';
import { connect } from 'react-redux';
import ReactCountryFlag from "react-country-flag";
import { styled } from 'styled-components';

import TextField from '@material-ui/core/TextField';

// const FlagWrapper = styled.div`

// `;

const RightPanel = (props) => {
    const { country } = props;
    return (
      <>
        <ReactCountryFlag code={country.intl} styleProps={{width:'200px',height: '100px'}} svg/>
        <TextField
        id="outlined-name"
        label="Country"
        value={country.name}
        // onChange={handleChange('name')}
        margin="normal"
        variant="outlined"
      />
      </>
    );
}

const mapStateToProps = state => ({
  country: state.country
});

export default connect(mapStateToProps)(RightPanel);