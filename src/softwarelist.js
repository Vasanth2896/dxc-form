import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './softwarelist.css';


const SoftwareList = () => {
    const [todos, setTodos] = useState([])
    const effect = () => {
        const response = axios.get('http://localhost:3000/installed_software')
        response.then(
            res => {
                setTodos(res.data)
            }
        )

    }
    useEffect(effect, [])
    return (< table >
        <tr>
            <th>id</th>
            <th>Software name</th>
            <th>Software Version</th>
            <th>Publisher</th>
        </tr>
        {
            todos.map(todo => {
                return (<tr>
                    <td>{todo.id}</td>
                    <td>{todo.software_name}</td>
                    <td>{todo.software_version}</td>
                    <td>{todo.publisher}</td>
                </tr>)
            })
        }
    </table >
    )
}
export default SoftwareList