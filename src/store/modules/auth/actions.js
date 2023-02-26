import { SIGNUP_ACTION } from "../../storeconstants";
import Axios from 'axios'

export default {
   async [SIGNUP_ACTION](context, payload) {
        let postData = {
            email: payload.email,
            password: payload.password,
            returnSecureToken: true
        }
        let response = await Axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyB0-7_9M0VNSvi-dMpsvA0REDsxVrggK6Y`
        , postData, 
        );

        console.log(response)
    }
};