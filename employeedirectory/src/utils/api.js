import axios from "axios";
import React, {useState, setState} from 'react';
import EmployeeCard from "../components/employeecard";
import Wrapper from "../components/wrapper";
import ReactDOM from 'react-dom'

// const API = {
//     getEmployees: function(){
//         return axios.get('https://randomuser.me/api/?results=5')
//         .then(res =>{
//             console.log(res)
//         })                
//     }
// }
// API.getEmployees();



// export default API;

// export default class EmployeeList extends React.Component {
//     state = {
//         employees: []
//     }
//     componentDidMount(){
//         axios.get('https://randomuser.me/api/?results=5')
//         .then(res => {
//             // console.log(res)
//             const employeess = res.data.results;
//             this.setState({employeess})
//             console.log(employeess)

//         })
//     }
//     render(){
//         return (
//             <Wrapper>
//                 <ul>
//                     <li>
//                 {this.state.employees.map(employee =>(
//                    <EmployeeCard name= {employee.name} /> 
//                 ))}
//                 </li>
//         </ul>
//         </Wrapper>
//         )
//     }
// }