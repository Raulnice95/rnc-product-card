import React from 'react'
import { ProductTitle } from '../../src/components/ProductTitle';
import { product1 } from '../data/products';
import { ProductCard } from '../../src/components/ProductCard';
const ReactTestRenderer = require('react-test-renderer');
describe('ProductTitle', () => { 
    test('Debe de mostrar el componente correctamente con el titulo personalizado', () => { 
        const wrapper = ReactTestRenderer.create(
            <ProductTitle title='Custom Product' />
        )
        expect(wrapper.toJSON()).toMatchSnapshot();
     });

     test('Debe de mostrar el componente con el nombre del producto', () => { 
        const wrapper = ReactTestRenderer.create(
            <ProductCard product={ product1} >
                {
                    () => (
                        <ProductTitle />
                    )
                }
            </ProductCard>
        )
        expect(wrapper.toJSON()).toMatchSnapshot();
      })
 })