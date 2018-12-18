import axios from 'axios'
import {API_HOST} from '../../axios'

export const storelist = (obj) => {
    return axios.post(`${API_HOST}/user/socialInfo`,obj)
};