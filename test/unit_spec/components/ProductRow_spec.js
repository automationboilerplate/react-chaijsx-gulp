/* eslint-disable no-trailing-spaces, no-unused-vars, camelcase */
require('../../setup');
const {expect} = require('chai');
const chai = require('chai');
const React = require('react');
const chaiJsx = require('chai-jsx');
const ProductRow = require('../../../app/components/ProductRow');
chai.use(chaiJsx);

describe('ProductRow Spec', () => {
    beforeEach(() => {});

    afterEach(() => {});
    it('ProductRow validation with single row of data', () => {
        const productRow = new ProductRow();
        productRow.props = {
            data: {name: 'test', price: 12.99}
        };
        const renderedElement = productRow.render();
        const expectedElement = (<div>
            <p>
              test = 12.99
            </p>
          </div>);
        expect(renderedElement).jsx.to.equal(expectedElement);
    });
});
