import React from 'react';
import Icofont from 'react-icofont';
import { InputGroup, InputGroupAddon, Button, Input } from 'reactstrap';
import './Tdsinputgroup.css';

class Tdsinputgroup extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <InputGroup className="news-box">
                <Input className="sub-control" placeholder="name@gmail.com" />
                <InputGroupAddon addonType="append">
                    <Button color="secondary"> <i class="icofont-email"></i></Button>
                </InputGroupAddon>
            </InputGroup>

        );
    }
}


export default Tdsinputgroup;
