import React from 'react'
import { ProductImage } from '../../src/components/ProductImage';
import { product2 } from '../data/products';
import { ProductCard } from '../../src/components/ProductCard';

const ReactTestRenderer = require('react-test-renderer');

describe( "ProductImage", () => {
    test('Debe de mostrar el componente correctamente con la imagen personalizada', () => { 
        const wrapper = ReactTestRenderer.create(
            <ProductImage img="https:www.asd.jpg"/>
        )
        expect(wrapper.toJSON()).toMatchSnapshot();
     })

     test('Debe de mostrar el componente con la imagen del producto', () => { 
        const wrapper = ReactTestRenderer.create(
            <ProductCard product={ product2} >
                {
                    () => (
                        <ProductImage img={ product2.img }/>
                    )
                }
            </ProductCard>
        )
        expect(wrapper.toJSON()).toMatchSnapshot();
      })
})