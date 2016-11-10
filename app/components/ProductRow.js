import React, {PropTypes} from 'react';

class ProductRow extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(<div>
            <p>{this.props.data.name} = {this.props.data.price}</p>
        </div>);
    }
}
ProductRow.propTypes = {
    data: PropTypes.object
};
module.exports = ProductRow;
