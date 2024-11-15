const form = document.querySelector('form');
const successCard = document.querySelector('.success-card');
form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent default form submission

  // Get form values
  const name = document.getElementById('Name')?.value;
  const lastName = document.getElementById('Last')?.value;
  const email = document.getElementById('Email')?.value;
  const query = document.querySelector('input[name="query"]:checked')?.value || false;
  const message = document.getElementById('Message')?.value;
  const consent = document.getElementById('consent')?.checked;

  // Validate fields
  const isValid = validateForm([name, lastName, email, query, message, consent]);

  if (isValid) {
    // Log the values to the console
    console.log('Name:', name);
    console.log('Last Name:', lastName);
    console.log('Email:', email);
    console.log('Query Type:', query);
    console.log('Message:', message);
    console.log('Consent:', consent);
    successCard.classList.add("show-success-card")
    setTimeout(() => {
      successCard.classList.remove("show-success-card")
    }, "4000");
    // You can also submit the form data to a server using AJAX or other methods
  }
});

function validateForm(arrayOfFields) {
  const errorMessages = document.querySelectorAll('.error-message');
  const errorBorder = document.querySelectorAll('.border-state');
  let isOk = true;

  arrayOfFields.forEach((element,index) => {
    if(element === "" || element === false || element === null) {
      isOk = false;
      errorMessages[index].style.display = 'block';
      errorBorder[index].classList.add("border-error")
    }else{
      errorMessages[index].style.display = 'none';
      errorBorder[index].classList.remove("border-error")
    }
  })

    return isOk;
  }


