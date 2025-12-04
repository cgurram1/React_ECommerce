import './HomePage.css'
import { ProductContainer } from '../components/ProductContainer';
import { products } from '../data/products';

import { Header } from './Header';
export function HomePage() {

    return (
        <>
            <title>Ecommerce Project</title>
            <Header></Header>

            <div className="home-page">
                <div className="products-grid">
                    {products.map((product)=>{
                        return (
                            <ProductContainer 
                                productImage={product.image}
                                productName={product.name}
                                ratingsImage={product.rating.stars}
                                ratings={product.rating.count}
                                price={product.priceCents}
                            ></ProductContainer>
                        );
                    })}
                </div>
            </div>
        </>

    );
}