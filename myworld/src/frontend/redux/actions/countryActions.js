import { SELECT_COUNTRY } from '../../constants/actions/countryActions';

export const selectCountry = ({id,name,lang}) => ({
    type: SELECT_COUNTRY,
    payload: {id,name,lang}
});