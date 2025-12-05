export function DeliveryOption(props) {
    const {deliveryOptionId, radioOptionId, date, deliveryPrice} = props;
    const radioName = `radio-option-${radioOptionId}`;
    return (
        <div className="delivery-option">
            <input
                type="radio"
                checked={deliveryOptionId === radioOptionId}
                className="delivery-option-input"
                name={radioName}
            />
            <div>
                <div className="delivery-option-date">
                    {date}
                </div>
                <div className="delivery-option-price">
                    {deliveryPrice == "0" ? "Free Delivery" : deliveryPrice/100}
                </div>
            </div>
        </div>
    );
}