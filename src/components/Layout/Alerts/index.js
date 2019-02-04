import React from 'react';
import { Col, Row, UncontrolledAlert } from 'reactstrap';

function Alerts(props) {
    return (
        <Row>
            <Col sm="12" md={{ size: 6, offset: 3 }}>
                <UncontrolledAlert color={props.type}>
                    {props.message}
                </UncontrolledAlert>
            </Col>
        </Row>
    );
}

export default Alerts;