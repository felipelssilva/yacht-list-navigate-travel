import React, { Fragment, Component } from 'react';

class BodyProductTable extends Component {
    render() {

        const { products } = this.props;

        return (
            <Fragment>
                {products.data[0].products.map((prod, x) => (
                    <Fragment key={x}>
                        <tr>
                            <th scope="row">
                                <p>{prod.productClass}</p>
                            </th>
                            {products.data[x].products.map((p, y) => (
                                <Fragment key={y}>
                                    {/*{p.prices.map((price, z) => (*/}
                                    <td className={p.statusCode === '3' ? "sold-out" : ""}>
                                        <p className="rrp">{p.prices[0].currencySymbol}{p.prices[0].rrp}</p>
                                        <p className="rrpw">{p.prices[0].currencySymbol}{p.prices[0].rrpWithDiscount}</p>
                                        <p>{p.status}</p>
                                    </td>
                                    {/*))}*/}
                                </Fragment>
                            ))}
                        </tr>
                    </Fragment>
                ))}
            </Fragment>
        );
    }
}

export default BodyProductTable;