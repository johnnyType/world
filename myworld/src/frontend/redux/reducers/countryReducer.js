import { SELECT_COUNTRY } from '../../constants/actions/countryActions';

const countryDefaultState = {
    selectedCountry: {
        id: "156",
        name: "中国",
        lang: "cn"
    }
}

const countryReducer = (state=countryDefaultState, action) => {
    const payload = action.payload;
    switch(action.type) {
        case SELECT_COUNTRY:
            return {
                selectedCountry: {
                    id: payload.countryId,
                    name: payload.name,
                    lang: payload.lang
                }
            }
        default:
            return state;
    }
}

export default countryReducer;