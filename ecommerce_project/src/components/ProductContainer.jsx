export function ProductContainer(props) {
    const {productImage, productName, ratingsImage, ratings, price} = props;
    const ratingsImageSrc = `images/ratings/${ratingsImage}.png`;
    const productPrice = `$${price/100}`;
    return (
        <>
            <div className="product-container">
                <div className="product-image-container">
                    <img className="product-image"
                        src={productImage}/>
                </div>

                <div className="product-name limit-text-to-2-lines">
                    {productName}
                </div>

                <div className="product-rating-container">
                    <img className="product-rating-stars"
                        src={ratingsImageSrc} />
                    <div className="product-rating-count link-primary">
                        {ratings}
                    </div>
                </div>

                <div className="product-price">
                    {productPrice}
                </div>

                <div className="product-quantity-container">
                    <select>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                    </select>
                </div>

                <div className="product-spacer"></div>

                <div className="added-to-cart">
                    <img src="images/icons/checkmark.png" />
                    Added
                </div>

                <button className="add-to-cart-button button-primary">
                    Add to Cart
                </button>
            </div>
        </>
    );
}