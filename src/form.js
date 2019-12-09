import React, {useEffect, useState} from 'react';
import './form.css';
import Form from "react-jsonschema-form";
import axios from "axios";

const schema = softwares => ({
    "title": "Software License form",
    "description": "License form for software",
    "type": "object",
    "src": "http://localhost:3000",
    "required": [
        "softwareName",
        "softwareLicense"
    ],
    "properties": {
        "softwareName": {
            "title": "Software name",
            "type": "string",
            "enum": softwares.map(x => x.software_name),
            "enumName": softwares.map(x => x.id),
            "default": ""
        },
        "softwareLicense": {
            "title": "Software license",
            "type": "string",
            "enum": ['licensed', 'opensource'],
            "enumName": ['licensed', 'opensource'],
            "default": "licensed"
        },
        "numberOfLicenses": {
            "type": "integer",
            "title": "Number of licenses"
        }
    }
});
const uiSchema = {
    "softwareName": {
        "ui:widget": "select"
    },
    "softwareLicense": {
        "ui:widget": "select"
    },
    "numberOfLicenses": {
        "ui:widget": "updown"
    }
};

const App = () => {
    const [softwares, setSoftwares] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:3000/installed_software`)
            .then(res => {
                setSoftwares(res.data);
            })
    }, []);

    return (
        <div>
            <Form schema={schema(softwares)}
                  uiSchema={uiSchema}
                  onChange={(e) => console.log("changed", e)}
                  onSubmit={(e) => {
                      const data = e.formData;
                      axios.post(`http://localhost:3000/software_license`, {
                          // TODO: Map the response with the table post
                      })
                  }}
                  onError={() => console.log("errors")}
            />
        </div>
    );
};
export default App;

