import './App.css';
import React,{useState,useEffect} from 'react';

function App() {

  const [datetime,setDatetime] = useState('');
  useEffect(() => {
      setDatetime(new Date());
  }, []);

  const formattedDateTime = new Date(datetime).toLocaleString('en-US', {
    month: 'numeric',
    day: 'numeric',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
  return (
    <div className="App">
      <h1>Course Work1 (Task 1)</h1>
      <p>
        Name: Mouzam Azam
        <br />
        Student ID: s2250944
        <br />
        Current Time and Date: {formattedDateTime.toString()}
      </p>
    </div>
  );
}

export default App;
