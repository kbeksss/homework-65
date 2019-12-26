import React, {Component} from 'react';
import {Button, Col, Form, FormGroup, Input} from "reactstrap";

class Admin extends Component {
    state = {
        pageName: '',
        title: '',
        description: '',
    };
    changeValue = e => this.setState({[e.target.name]: e.target.value} );
    submitForm = e => {
        e.preventDefault();
        console.log('submit')
    };
    render() {
        console.log(this.state);
        return (
            <div className='mt-5'>
                <Form onSubmit={this.submitForm}>
                    <FormGroup>
                        <Col sm={5}>
                            <Input type="text" name="title" id="title" placeholder="Title" onChange={this.changeValue}/>
                        </Col>
                    </FormGroup>
                    <FormGroup>
                        <Col sm={4}>
                            <Input type="select" name='pageName' onChange={this.changeValue}>
                                <option>Home</option>
                                <option>Contacts</option>
                                <option>About</option>
                            </Input>
                        </Col>
                    </FormGroup>
                    <FormGroup>
                        <Col sm={7}>
                            <Input type="textarea" name="description" id="text" onChange={this.changeValue}/>
                        </Col>
                    </FormGroup>
                    <Button>Save</Button>
                </Form>
            </div>
        );
    }
}

export default Admin;