# RNC_Product-Card

Este es un paquete de pruebas de despliegue de NPM

### Raul Nieva

## Ejemplo

```
import { ProductCard, ProductImage, ProductTitle, ProductButtons } from 'rnc-product-card'
```

```
<ProductCard 
    key = {product.id} 
    product={ product } 
    initialValues={{
        count: 4,
        maxCount: 10
    }} 
>
    {
    ({reset, increaseBy, isMaxCountReached, count, maxCount}) => (
        <>
        <ProductImage />
        <ProductTitle />
        <ProductButtons />
        </>
    )
    }
</ProductCard>
```