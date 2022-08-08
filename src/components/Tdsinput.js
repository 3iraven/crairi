import React, { useState } from 'react';
import {
    Button, Form, FormGroup, Label, Input, FormText

} from 'reactstrap';
// import logo from '../logo.svg';
import './Tdsheader.css';


class Tdsinput extends React.Component{

    constructor(props) {
        super(props);
       
    }
    render() {
        return (
            <FormGroup>
                <Label for="exampleEmail">Email</Label>
                <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
            </FormGroup>

        );
    }
}


export default Tdsinput;
