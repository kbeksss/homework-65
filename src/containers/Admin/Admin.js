import React, {Component} from 'react';
import {Button, Col, Form, FormGroup, Input} from "reactstrap";
import axiosAPI from "../../axios-page";

class Admin extends Component {
    state = {
        pageName: '',
        title: 'aaa',
        description: 'aa',
        pages: [],
    };
    changeValue = e => {
        this.setState({[e.target.name]: e.target.value} );
    };
    submitForm = e => {
        e.preventDefault();

        console.log('submit');
    };
    getData = async (name) => {
        let response = await axiosAPI.get('pages/' + name + '.json');
        this.setState({title: response.data.title, description: response.data.description});
    };
    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevState.pageName !== this.state.pageName){
            return this.getData(this.state.pageName);
        }
    }
    componentDidMount = async () => {
        let response = await axiosAPI.get('pages.json');
        console.log(response.data);
        this.setState({pages: Object.keys(response.data)});
    };

    render() {
        let pageNames = this.state.pages ? this.state.pages.map(pageName => <option key={pageName} value={pageName}>{pageName}</option>) : null;
        return (
            <div className='mt-5'>
                <Form onSubmit={this.submitForm}>
                    <FormGroup>
                        <Col sm={5}>
                            <Input type="text" value={this.state.title} name="title" id="title" placeholder="Title" onChange={this.changeValue}/>
                        </Col>
                    </FormGroup>
                    <FormGroup>
                        <Col sm={4}>
                            <Input type="select" name='pageName' onChange={this.changeValue}>
                                {pageNames}
                            </Input>
                        </Col>
                    </FormGroup>
                    <FormGroup>
                        <Col sm={7}>
                            <Input type="textarea" value={this.state.description} name="description" id="text" onChange={this.changeValue}/>
                        </Col>
                    </FormGroup>
                    <Button>Save</Button>
                </Form>
            </div>
        );
    }
}

export default Admin;