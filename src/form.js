import React from 'react';
import './form.css';
import Form from "react-jsonschema-form";

const schema = {
  "title": "Software License form",
  "description": "License form for software",
  "type": "object",
  "src" : "http://localhost:3000",
  "required": [
    "softwareName",
    "softwareLicense"
  ],
  "properties": {
    "softwareName": {
      "title": "Software name",
      "type": "string",
      "enum": [{
        "$ref": "#/software_name"
      }],
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
};
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

const App = (props) => (
  <div>
    <Form schema={schema}
      uiSchema={uiSchema}
      onChange={(e) => console.log("changed", e)}
      onSubmit={(e) => console.log("submitted", e)}
      onError={() => console.log("errors")}
    />
  </div>
);
export default App;

