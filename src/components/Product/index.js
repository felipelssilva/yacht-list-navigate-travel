import React, { Component, Fragment } from 'react';
import { Col, Row, Table } from 'reactstrap';
import Alerts from "../Layout/Alerts";
import { FormattedMessage } from 'react-intl';
import messages from "./messages";
import HeaderProductTable from "./HeaderProductTable";
import BodyProductTable from "./BodyProductTable";
import './productTable.css';

class ProductTable extends Component {
    render() {

        const { products } = this.props;

        return (
            <Fragment>
                {products.data.length > 0 ? (
                    <Row>
                        <Col xs={12}>
                            <Table responsive hover>
                                <thead>
                                <tr>
                                    <th className="ours-prices">
                                        <h2><FormattedMessage {...messages.table.oursPrices} /></h2>
                                    </th>
                                    <HeaderProductTable products={products} />
                                </tr>
                                </thead>
                                <tbody>
                                    <BodyProductTable products={products} />
                                </tbody>
                            </Table>
                        </Col>
                    </Row>
                ) : (
                    <Alerts message={<FormattedMessage {...messages.notFound} />} type='danger'/>
                )}
            </Fragment>
        );
    }
}

export default ProductTable;