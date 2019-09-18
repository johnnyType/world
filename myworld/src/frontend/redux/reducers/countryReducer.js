import { SELECT_COUNTRY } from '../../constants/actions/countryActions';
import { country } from '../../constants/country';

const countryDefaultState = {
    id: "",
    name: "",
    intl: ""
}

const countryReducer = (state=countryDefaultState, action) => {
    const payload = action.payload;
    switch(action.type) {
        case SELECT_COUNTRY:
            return {
                id: payload.countryId,
                name: country[payload.countryId].name,
                intl: country[payload.countryId].intl
            }
        default:
            return state;
    }
}

export default countryReducer;