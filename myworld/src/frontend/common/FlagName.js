import React from 'react';
import { connect } from 'react-redux';
import ReactCountryFlag from "react-country-flag";
import styled from 'styled-components';

import TextField from '@material-ui/core/TextField';

const Wrapper = styled.div`
      height: 100px;
      text-align: center;
`;
const FlagerWrapper = styled.div`
      text-align: center;
      margin-top: 20px;
      object-fit: fill;
`;

const FlagName = (props) => {
    const { selectedCountry } = props;
    return (
      <Wrapper>
        <FlagerWrapper>
           <ReactCountryFlag code={selectedCountry.lang} styleProps={{width:'150px',height: '80px'}} svg/>
        </FlagerWrapper>
        <TextField
        id="outlined-name"
        label="Country"
        value={selectedCountry.name}
        // onChange={handleChange('name')}
        margin="normal"
        variant="outlined"
      />
      </Wrapper>
    );
}

const mapStateToProps = state => ({
  selectedCountry: state.country.selectedCountry
});

export default connect(mapStateToProps)(FlagName);