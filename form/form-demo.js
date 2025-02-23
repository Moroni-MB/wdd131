function togglePaymentDetails(e) {
    // get a reference to the form. We can access all the named form inputs through the form element.
    const theForm = document.querySelector('#checkoutForm');
    // we will also need the creditCardContainer and paypalUsernameContainer
    const creditCardContainer = document.getElementById("creditCardNumberContainer");
    const paypalContainer = document.getElementById("paypalUsernameContainer");
  
    const creditInput = document.querySelector('#creditCardNumberContainer input');
    const paypalInput = document.querySelector('#paypalUsernameContainer input');
    // Hide payment containers by adding the '.hide' class to each of them
  
    // Disable required for payment fields...if we hide a required field the browser will throw an error when we try to submit!

    // element.required=false
    // element.classList.add('hide')    .remove to remove hide
  
    // Show the container based on the selected payment method, and add the required attribute back.
    let value = e.target.value;   // another option is theForm.paymentMethod.value

    paypalContainer.classList.add('hide');
    creditCardContainer.classList.add('hide');
    creditInput.required = false;  // theForm.paypalUsername.required = false;
    paypalInput.required = false;

    if (value == "creditCard") {
        creditCardContainer.classList.remove('hide');
        creditInput.required = true;
    } else if (value == "paypal") {
        paypalContainer.classList.remove('hide');
        paypalInput.required = true;
    }
  }
// attach a change event handler to the paymentMethod input
const selectElement = document.getElementById("paymentMethod");

// attach a submit event handler to the form
selectElement.addEventListener('change', togglePaymentDetails);