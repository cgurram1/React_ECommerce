import { CartItemContainer } from '../components/CartItemContainer';
import './CheckoutPage.css'
import { Header } from './Header';
import { useState, useEffect } from "react";

export function CheckoutPage() {
    const [cart, setCart] = useState([]);
    useEffect(() => {
            fetch("http://localhost:8000/api/cart/")
                .then(response => response.json())
                .then(data => {
                    setCart(data);       // update state
                })
                .catch(error => {
                    console.error("Error fetching cart Items:", error);
                });
        }, []);
    return (
        <>
            <title>Checkout</title>
            <Header></Header>

            <div className="checkout-page">
                <div className="page-title">Review your order</div>

                <div className="checkout-grid">
                    <div className="order-summary">
                        {cart.map(cartItem => {
                            return (
                                <CartItemContainer
                                    key={cartItem.productId}
                                    deliveryDate={cartItem.deliveryDay}
                                    productName={cartItem.name}
                                    productImage={cartItem.image}
                                    productPrice={cartItem.priceCents/100} 
                                    quantity={cartItem.quantity}
                                    deliveryOption={cartItem.deliveryOptionId}
                                ></CartItemContainer>
                            );
                        })}
                    </div>

                    <div className="payment-summary">
                        <div className="payment-summary-title">
                            Payment Summary
                        </div>

                        <div className="payment-summary-row">
                            <div>Items (3):</div>
                            <div className="payment-summary-money">$42.75</div>
                        </div>

                        <div className="payment-summary-row">
                            <div>Shipping &amp; handling:</div>
                            <div className="payment-summary-money">$4.99</div>
                        </div>

                        <div className="payment-summary-row subtotal-row">
                            <div>Total before tax:</div>
                            <div className="payment-summary-money">$47.74</div>
                        </div>

                        <div className="payment-summary-row">
                            <div>Estimated tax (10%):</div>
                            <div className="payment-summary-money">$4.77</div>
                        </div>

                        <div className="payment-summary-row total-row">
                            <div>Order total:</div>
                            <div className="payment-summary-money">$52.51</div>
                        </div>

                        <button className="place-order-button button-primary">
                            Place your order
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}