import './App.css';
import Form from './components/Form';
import React, {useState} from "react";

function App() {
  // const [firstName,lastName,email,subject,message, setFirstname, setLastname,setEmail, setSubject,setMessage] = useState("");
  const [firstName,setFirstname] = useState("");
  const [lastName,setLastname] = useState("");
  const [email,setEmail] = useState("");
  const [subject,setSubject] = useState("");
  const [message,setMessage] = useState("");
  const [setStatus] = useState('all');
  return (
    <div className="App">
      <header className="App-header">
        <Form   
         firstName={firstName}
         lastName={lastName}
         email={email}
         subject={subject}
         message={message}
         setFirstname={setFirstname}
         setLastname={setLastname}
         setEmail={setEmail}
         setSubject={setSubject}
         setMessage={setMessage}
         setStatus={setStatus}/>
      </header>
  
    </div>
  );
}

export default App;
