import React from 'react'
import { product1 } from '../data/products';
import { ProductCard } from '../../src/components/ProductCard';

const ReactTestRenderer = require('react-test-renderer');


describe( "ProductCard", () => {
    test('Debe de mostrar el componente correctamente ', () => { 
        const wrapper = ReactTestRenderer.create(
            <ProductCard product={product1}>
                {
                    () => (
                        <h1>Product Card</h1>
                    )
                }
            </ProductCard>
        )
        expect(wrapper.toJSON()).toMatchSnapshot();
    });

    test('Debe de incrementar el contador', () => { 
        const wrapper = ReactTestRenderer.create(
            <ProductCard product={product1}>
                {
                    ({count, increaseBy}) => (
                        <>
                            <h1>Product Card</h1>
                            <span>{count}</span>
                            <button onClick={() => increaseBy(1)}></button>
                        </>
                    )
                }
            </ProductCard>
        )

        let tree = wrapper.toJSON();
        expect( tree ).toMatchSnapshot();

        (tree as any).children[2].props.onClick();

        tree = wrapper.toJSON();

        expect( (tree as any).children[1].children[0] === '1')
     })

})