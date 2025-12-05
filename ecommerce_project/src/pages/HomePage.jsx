import './HomePage.css'
import { ProductContainer } from '../components/ProductContainer';
import { Header } from './Header';
import { useState, useEffect } from "react";

export function HomePage() {

    const [products, setProducts] = useState([]);   // empty array initially

    useEffect(() => {
        fetch("http://localhost:8000/api/products/")
            .then(response => response.json())
            .then(data => {
                setProducts(data);       // update state
            })
            .catch(error => {
                console.error("Error fetching products:", error);
            });
    }, []);   // empty dependency → runs once when page loads
    console.log(products);
    return (    
        <>
            <title>Ecommerce Project</title>
            <Header></Header>

            <div className="home-page">
                <div className="products-grid">
                    {products.map((product)=>{
                        return (
                            <ProductContainer 
                                key={product.id}
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