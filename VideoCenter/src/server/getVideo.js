import api from '../api'

export const getList = () => {
    return api.get('/getvideo')
}

export const getSearchList = () => {
    return api.get('/getsearch')
}
