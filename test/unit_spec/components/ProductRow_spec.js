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
    it('Should display the single row when provided with valid data', () => {
        const productRow = new ProductRow();
        productRow.props = {
            data: {name: 'test', price: '$12.99'}
        };
        const renderedElement = productRow.render();
        const expectedElement = (<div>
            <p>
              test = $12.99
            </p>
          </div>);
        expect(renderedElement).jsx.to.equal(expectedElement);
    });

    it('Should display the single row when provided with invalid strings', () => {
        const productRow = new ProductRow();
        productRow.props = {
            data: {name: 'test', price: '$%#@'}
        };
        const renderedElement = productRow.render();
        const expectedElement = (<div>
            <p>
              test = $%#@
            </p>
          </div>);
        expect(renderedElement).jsx.to.equal(expectedElement);
    });

    it('Should not display the row when provided no data', () => {
        const productRow = new ProductRow();
        productRow.props = {
            data: {}
        };
        const renderedElement = productRow.render();
        const expectedElement = (<div>
            <p> = </p>
          </div>);
        expect(renderedElement).jsx.to.equal(expectedElement);
    });
});
