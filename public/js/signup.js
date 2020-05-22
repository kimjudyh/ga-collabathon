console.log('signup.js is connected');
// TODO: check passwords match
// TODO: provide check and better error message for duplicate email

// disable form submissions if there are invalid inputs
(function() {
  'use strict';
  window.addEventListener('load', function () {
    const form = document.querySelector('.needs-validation');
    // get HTML child elements of form to loop through
    const formChildren = form.children;
    for (let child of formChildren) {
      // if the element is a div, look for the input field
      if (child.localName === "div") {
        for (let divChild of child.children) {
          // if element is an input, check for valid inputs
          if (divChild.localName === "input") {
            // when user leaves the input field, check validity
            divChild.addEventListener('focusout', (event) => {
              // remove existing is-invalid class
              if (divChild.classList.contains('is-invalid')) {
                divChild.classList.remove('is-invalid');
              }
              if (divChild.checkValidity() === true) {
                // add bootstrap class that visually shows validity
                divChild.classList.add('is-valid');
              } else {
                // add bootstrap class that visually shows invalidity
                divChild.classList.add('is-invalid');
              }
            })
          }
        }
      }
    }

    // check for validity on form submission as well
    // fetch all forms we want to apply custom bootstrap validation styles to
    const forms = document.getElementsByClassName('needs-validation');
    // loop over them and prevent submission
    const validation = Array.prototype.filter.call(forms, function (form) {
      form.addEventListener('submit', function (event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();