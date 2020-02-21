import React from 'react';
import './App.css';
import API from "./utils/api"
import bootStrapTable from 'react-bootstrap-table-next';

function App() {
  // API.getEmployees()
  // .then(res =>{
  //   console.log(res)
  // });
  return (
    <div>
    <h1>Employee Directory sorry I've had maybe 14 minutes of free time per week for the last month I'll get this done as soon as I can</h1>
  <div>test {API.getEmployees().then(res=>{
    console.log(res)
  })}</div>
    </div>
  );
}

export default App;
