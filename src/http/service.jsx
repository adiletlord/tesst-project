import instance from './Settings';

const getCountryAll = () => {
    return instance.get('all')
}

const getCountrySearch = (name) => {
    return instance.get(`name/${name}`)
}

export const service = {
    getCountryAll,
    getCountrySearch
}