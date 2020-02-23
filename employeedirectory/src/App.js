import React, {useState} from 'react';
import './App.css';
import bootStrapTable from 'react-bootstrap-table-next';
import Wrapper from './components/wrapper'

function App() {
  const [employees, setEmployees] = useState([])
  
  return (
    <>
    <Wrapper>
    <h1>Employee Directory</h1>
    </Wrapper>
    </>
  );
}



export default App;
