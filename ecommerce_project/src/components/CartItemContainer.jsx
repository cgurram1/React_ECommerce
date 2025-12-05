import { DeliveryOption } from "./DeliveryOption";
import { useState, useEffect } from "react";

export function CartItemContainer(props) {
    const {deliveryDate, productName, productImage, productPrice, quantity, deliveryOption} = props;
    const delivery = `Delivery date: ${deliveryDate}`;
    const price = `$${productPrice*quantity}`;
    const radioName = `radio-option-${deliveryOption}`;

    const [deliveryOptions, setDeliveryOptions] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:8000/api/cart/deliveryOptions')
        .then(response => response.json())
        .then(data => {
            setDeliveryOptions(data);  
        })
    },[]);
    console.log("Chandra Kishore Reddy ");
    console.log(deliveryOptions);
    return (
        <div className="cart-item-container">
            <div className="delivery-date">
                {delivery}
            </div>

            <div className="cart-item-details-grid">
                <img className="product-image"
                    src={productImage} />

                <div className="cart-item-details">
                    <div className="product-name">
                        {productName}
                    </div>
                    <div className="product-price">
                        {price}
                    </div>
                    <div className="product-quantity">
                        <span>
                            Quantity: <span className="quantity-label">{quantity}</span>
                        </span>
                        <span className="update-quantity-link link-primary">
                            Update
                        </span>
                        <span className="delete-quantity-link link-primary">
                            Delete
                        </span>
                    </div>
                </div>

                <div className="delivery-options">
                    <div className="delivery-options-title">
                        Choose a delivery option:
                    </div>
                    {deliveryOptions.map(option => {
                        return (
                            <DeliveryOption 
                                key={option.id}
                                deliveryOptionId={deliveryOption}
                                radioOptionId={option.id} 
                                date={option.deliveryDay} 
                                deliveryPrice={option.priceCents} 
                            ></DeliveryOption>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}