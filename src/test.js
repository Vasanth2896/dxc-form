import React from 'react';
import axios from 'axios';

export default class softwareList extends React.Component {
    state = {
        software: []
    }

    componentDidMount() {
        axios.get(`http://localhost:3000/installed_software`)
            .then(res => {
                const software = res.data;
                this.setState({ software });
            })
    }

    render() {
        return (
            <select>
                {this.state.software.map(software => <option>{software.software_name}</option>)}
            </select>
        )
    }
}