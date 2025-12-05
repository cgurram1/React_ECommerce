import './HomePage.css'
import { ProductContainer } from '../components/ProductContainer';
import { Header } from './Header';
import { useState, useEffect } from "react";
import axios from 'axios';

export function HomePage() {

    const [products, setProducts] = useState([]);   // empty array initially

    useEffect(() => {
        async function getProducts(){
            const response = await axios.get("http://localhost:8000/api/products/");
            setProducts(response.data); 
        }
        getProducts();
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