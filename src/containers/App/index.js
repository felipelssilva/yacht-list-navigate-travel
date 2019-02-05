import React, { Component, Fragment } from 'react';
import { Col, Container, Row } from 'reactstrap';
import { FormattedMessage } from 'react-intl';

import Search from '../../components/Layout/Forms/Search';
import messages from "./messages";

class App extends Component {

    render() {
        return (
            <Fragment>
                <Container className="container my-5">
                    <Row>
                        <Col xs="12" className="text-center mb-4 mb-xs-3 mb-sm-3 mb-md-3 mb-lg-0">
                            <h1>
                                <FormattedMessage {...messages.content.header} />
                            </h1>
                        </Col>
                    </Row>
                </Container>
                <Container>
                    <Row>
                        <Col xs="12">
                            <Search/>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default App;
