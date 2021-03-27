import React from "react";
import StripeCheckout from "react-stripe-checkout";

const onToken = token => {
    console.log(token);
    alert("Payment Successful");
}

const StripeCheckoutButton = ({price}) => {
    const priceInCents = price * 100;
    const publishableKey = "pk_test_51IZYgoG8WZ1YR9cltv8H635fRhJQwwUseJqPxujE4mUubbSPZT1sW7PfiVyI6wkrPNclbISCoqND3NAF17wvn2nQ00EPTLKkb0"
    return (
        <StripeCheckout label="Pay Now" name="CRWN Clothing Ltd." billingAddress shippingAddress
                        image="https://svgshare.com/i/CUz.svg"
                        token={onToken} stripeKey={publishableKey} amount={priceInCents} panelLabel="Pay Now"/>
    )
}

export default StripeCheckoutButton;