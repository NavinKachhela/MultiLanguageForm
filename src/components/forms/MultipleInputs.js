import React, { useState } from 'react';
import {Button,Row,Col} from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import { useTranslation } from 'react-i18next';
import Modal from 'react-modal'

Modal.setAppElement('#root')
const MultipleInputs = () => {
    
    const { t } = useTranslation();
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [UserRegistration, setUserRegistration] = useState({
        username: "",
        email: "",
        phone: "",
        password: ""
    });

    const [records,setrecords] = useState([]);
    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        //console.log(name, value);
        setUserRegistration({...UserRegistration,[name]:value})
    }
    const handleSubmit = (e) =>{
        e.preventDefault();

        const newRecord = { ...UserRegistration, id: new Date().getTime().toString()}

        setrecords([ ...records, newRecord])
        setUserRegistration({username:"",email:"",phone:"",password:""})
        
    }
    function modaldemo(){
        setModalIsOpen(true);
    }
    return (
        
        <Container className="mx-5 ">
            <Form className="md-auto mx-5" onSubmit={handleSubmit}>
            <Row>
                <Col>
                <Form.Group className="mb-1 " >
                <Form.Label>{t('FullName.1')}</Form.Label>
                <Form.Control type="text" placeholder={t('FullName.1')} name="username" id="username"  onChange={handleInput}/>
                </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col>
                <Form.Group className="mb-1" >
                <Form.Label>{t('PhoneNumber.1')}</Form.Label>
                <Form.Control type="text" placeholder={t('PhoneNumber.1')} name="phone" id="phone" onChange={handleInput}/>
                </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col>
                <Form.Group className="mb-1" >
                <Form.Label>{t('Emailaddress.1')}</Form.Label>
                <Form.Control type="email" placeholder={t('Emailaddress.1')} name="email" id="email" onChange={handleInput}/>
                </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col>
                <Form.Group className="mb-1" >
                <Form.Label>{t('Password.1')}</Form.Label>
                <Form.Control type="password" placeholder={t('Password.1')} onChange={handleInput}/>
                </Form.Group>
                </Col>
            </Row>
            <Button variant="primary" className="mt-5 ml-3" type="submit">{t('Submit.1')}</Button>
            <Button className="mt-2 mb-4"onClick={() =>modaldemo()}>{t('Preview.1')}</Button>
            </Form>
            <div>
                
                {
                    records.map((curElem)=>{
                        return (
                            <div>
                                <p>{curElem.username}</p>
                                <p>{curElem.email}</p>
                                <p>{curElem.phone}</p>
                                <p>{curElem.password}</p>
                            </div>
                        )

                    })
                }
            </div>
            <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        // shouldCloseOnOverlayClick={false}
      >
        <h2></h2>
        <div>{UserRegistration.username}</div>
        <div>{UserRegistration.phone}</div>
        <div>{UserRegistration.email}</div>
        <div>
          <button onClick={() => setModalIsOpen(false)}>Close</button>
        </div>
      </Modal>
            </Container>
        
    )
}

export default MultipleInputs;
