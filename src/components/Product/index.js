import React, { Fragment } from 'react';
import { Col, Row, Table, Badge } from 'reactstrap';

function ProductTable(props) {
    return (
        <Fragment>
            {props.products.data &&
                <Row>
                    <Col xs={12}>
                        <Row>
                            <Col className="mt-3">
                                <h1>Our Prices</h1>
                            </Col>
                        </Row>

                        {/*{props.products.data.map(p => (*/}
                            {/*<div key={p.date}>{p.date}</div>*/}
                        {/*))}*/}

                        <Table>
                            <thead>
                            <tr>
                                {props.products.data.map(p => (
                                    <th key={p.date}>
                                        <p>{p.dateText}</p>
                                        <p>({p.dateday})</p>
                                        <Badge color="danger" pill>{p.temperature}</Badge>
                                    </th>
                                ))}
                            </tr>
                            </thead>
                            <tbody>
                                {/*{props.products.data.map((p) => (*/}
                                    {/*<tr>*/}
                                        {/*{p.products.map((c, i) => (*/}
                                            {/*<td key={i}>*/}
                                                {/*{c.productClass}*/}
                                            {/*</td>*/}
                                        {/*))}*/}
                                    {/*</tr>*/}
                                {/*))}*/}

                                {props.products.data.map((c, i) => (
                                    <Fragment>
                                        {props.products.data[i].products.map((p) => (
                                            <tr>
                                                <td key={i}>
                                                    <p>{p.productClass}</p>
                                                    <p>{p.status}</p>
                                                </td>
                                            </tr>
                                        ))}
                                    </Fragment>
                                ))}

                            </tbody>
                        </Table>
                    </Col>
                </Row>
            }
        </Fragment>
    );
}

export default ProductTable;