import React, { Component, Fragment } from 'react';
import { Col, Row, Table, Badge } from 'reactstrap';
import Alerts from "../Layout/Alerts";
import { FormattedMessage } from 'react-intl';
import messages from "./messages";
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
                                    {products.data.map(p => (
                                        <th key={p.date}>
                                            <p>{p.dateText}</p>
                                            <p>({p.dateday})</p>
                                            <Badge color="danger" pill>{p.temperature}</Badge>
                                        </th>
                                    ))}
                                </tr>
                                </thead>
                                <tbody>
                                {products.data[0].products.map((prod, x) => (
                                    <tr key={x}>
                                        <th scope="row">
                                            <p>{prod.productClass}</p>
                                        </th>
                                        {products.data[x].products.map((p, y) => (
                                            <Fragment key={y}>
                                                {p.prices.map((price, z) => (
                                                    <td key={z} className={p.statusCode === '3' ? "sold-out" : "" }>
                                                        <p className="rrp">{price.currencySymbol}{price.rrp}</p>
                                                        <p className="rrpw">{price.currencySymbol}{price.rrpWithDiscount}</p>
                                                        <p>{p.status}</p>
                                                    </td>
                                                ))}
                                            </Fragment>
                                        ))}
                                    </tr>
                                ))}
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