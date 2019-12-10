import React, {useState, useEffect} from "react"
import axios from 'axios';
import './softwarelist.css';

const LicensedSoftware = () => {
    const [todos1, setTodos1] = useState([])
    const effect = () => {
        const response = axios.get('http://localhost:3000/software_license')
        response.then(
            res => {
                setTodos1(res.data)
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
            todos1.map(todo => {
                return (<tr>
                    <td>{todo.id}</td>
                    <td>{todo.software_name}</td>
                    <td>{todo.license}</td>
                    <td>{todo.number_of_licenses}</td>
                </tr>)
            })
        }
    </table >
    )
}

export default LicensedSoftware;