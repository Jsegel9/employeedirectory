import axios from "axios";

const API = {
    getEmployees: function(){
        return axios.get('https://randomuser.me/api/?results=5')
        .then(res =>{
            console.log(res)
        })                
    }
}

export default API;