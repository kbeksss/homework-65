import React, {Component} from 'react';
import axiosAPI from "../../axios-page";

class Pages extends Component {
    state = {
        description: '',
        title: '',
        data: null,
    };
    getData = async name => {
        const response = await axiosAPI.get('pages/' +name+ '.json');
        console.log(response.data);
        if(response.data){
            this.setState({description: response.data.description, title: response.data.title, data: response.data.data});
        }
        console.log(this.state);
    };
    componentDidMount() {
        return this.getData('home');
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.match.params.name !== this.props.match.params.name){
            return this.getData(this.props.match.params.name);
        }
    }

    render() {
        return (
            <div className='mt-5'>
                <h2>{this.state.title}</h2>
                <p className='pt-4'>{this.state.description}</p>
            </div>
        );
    }
}

export default Pages;