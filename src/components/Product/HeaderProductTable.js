import React, { Fragment, Component} from 'react';
import { Badge } from 'reactstrap';

class HeaderProductTable extends Component {
    render() {

    const { products } = this.props;

        return (
            <Fragment>
                {products.data.map(p => (
                    <th key={p.date}>
                        <p>{p.dateText}</p>
                        <p>({p.dateday})</p>
                        <Badge color="danger" pill>{p.temperature}</Badge>
                    </th>
                ))}
            </Fragment>
        );
    }
}

export default HeaderProductTable;