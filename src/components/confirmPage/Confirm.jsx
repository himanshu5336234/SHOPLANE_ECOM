import React from 'react';

import "./confirmPage.css";

const ConfirmPage = () => {
    const  confirmImage ="https://github.com/himanshu5336234/shoplane/blob/master/src/images/img_confirm.png?raw=true"
    return ( <div id="confirm-section">
        <img src={confirmImage} alt="confirm-order-image" />
        <h3>Order Placed Successfully!!</h3>
        <p>We have sent you an email with the order details</p>
    </div> );
}
 
export default ConfirmPage;