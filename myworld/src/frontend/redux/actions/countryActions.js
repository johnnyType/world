import { SELECT_COUNTRY } from '../../constants/actions/countryActions';

export const selectCountry = (countryId) => ({
    type: SELECT_COUNTRY,
    payload: {countryId}
});