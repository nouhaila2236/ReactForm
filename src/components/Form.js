import 'bootstrap/dist/css/bootstrap.css';
import React from 'react'; 
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';


const  myForm = ({firstName,lastName,email,subject,message, setFirstname, setLastname,setEmail, setSubject,setMessage, setStatus}) =>{

      const handleFirstNameChange = (event) => {
        setFirstname(event.target.value)
      }
      const handleLastNameChange = (event) => { 
        setLastname(event.target.value)
     }
     const handleEmailChange = (event) => {
      setEmail(event.target.value)
     }
     const handleSubjectChange = (event) => {
      setSubject(event.target.value)
     }
     const handleMessageChange = (event) => {
      setMessage(event.target.value)
     }
     const handleSubmit = event => {  
      alert(`First name : ${firstName} \nLast name : ${lastName} \nEmail: ${email} \nSubject: ${subject} \nMessage :${message}`)
     }
    // render() {
    return(
      <Form className="container mt-3 mt-3 " onSubmit={handleSubmit}>
         <Row className="mb-3">         
          <Form.Group className="col col-sm-6" controlId="firstName">
            <Form.Label>First name</Form.Label>
            <Form.Control type="name" placeholder="your first name" value={firstName} onChange={handleFirstNameChange}/>
          </Form.Group>
          <Form.Group className="col col-sm-6" controlId="lastName">
            <Form.Label>Last name</Form.Label>
            <Form.Control type="name" placeholder="your last name" valur={lastName} onChange={ handleLastNameChange} />
          </Form.Group>
          <Form.Group className="col col-12" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" value={email} onChange={ handleEmailChange} />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group className="col col-12" controlId="subject">
            <Form.Label>Subject</Form.Label>
            <Form.Control type="subject" placeholder="your subject" value={subject} onChange={handleSubjectChange} />
          </Form.Group>
          <Form.Group className="col col-12" controlId="formBasicPassword">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows="5" name="message" placeholder="Message" value={message} onChange={handleMessageChange} />          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="submit">
          <Button variant="primary" type="submit">
            Submit
          </Button>
          </Form.Group>
      </Row>
    </Form>        
    );
    // }
}
export default myForm;