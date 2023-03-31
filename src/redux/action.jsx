export const countryAllAction = (data) => {
    return {
        type: 'LOAD_ALL_COUNTRY',
        payload: data //response data
    }
}

export const itemDetailAction = (data, errorMessage) => {
    return {
        type: "LOAD_ITEM",
        payload: data, 
        errorMessage 
    }
}