	function scrol(){ //scrol smooth ang go to the h1 place
	   const cartSection = document.querySelector('.h1');
       cartSection.scrollIntoView({ behavior: "smooth" });
	}
	function buy1(){
		document.getElementById("package").value="400";
		scrol();
	}
	function buy2(){
		document.getElementById("package").value="450";
		scrol();
	}
	function buy3(){
		document.getElementById("package").value="500";
		scrol();
	}
	function buy4(){
		document.getElementById("package").value="700";
		scrol();
	}
	function buy5(){
		document.getElementById("package").value="550";
		scrol();
	}
	function buy6(){
		document.getElementById("package").value="600";
		scrol();
	} 

  const packageList = document.getElementById("package-list");
  const addPackageBtn = document.getElementById("add-package-btn");
  const packageSelect = document.getElementById("package");
  const quantityInput = document.getElementById("quantity");
  const clearCartBtn = document.getElementById("clear-cart-btn");

  let totalCost = 0;
	
  // Add a new package element to the cart
  function addPackage() {
  const packageOption = packageSelect.options[packageSelect.selectedIndex];
  const packageName = packageOption.text;
  const packagePrice = parseInt(packageOption.value) * parseInt(quantityInput.value);
  const packageQuantity = quantityInput.value;

  const packageItem = document.createElement("div");
  packageItem.classList.add("package-item");
  packageItem.innerHTML = `
    <p>${packageName} x ${packageQuantity} = </p>
    <p>$${packagePrice}</p>
    <button class="remove-package-btn">Remove Package</button>
  `;
  packageList.appendChild(packageItem);

  totalCost += packagePrice;
   
  updateTotal();

  // Attach event listener to "Remove Package" button
    const removePackageBtn = packageItem.querySelector(".remove-package-btn");
    removePackageBtn.addEventListener("click", function() {
    packageList.removeChild(packageItem);
    totalCost -= packagePrice;
    updateTotal();
  });
}
  // Update the total cost displayed in the cart
	function updateTotal() {
    const totalElement = document.getElementById("total");
    totalElement.textContent = `Total: $${totalCost}`;
  }

  // Add an event listener to the "Add Package" button
	addPackageBtn.addEventListener("click", addPackage);

    // Add event listeners to all "Remove Package" buttons
	packageList.addEventListener("click", function(event) {
	if (event.target.classList.contains("remove-package-btn")) {
	removePackage(event.target.parentNode);
	}
	});
	
	const confirmBtnorder = document.getElementById('confirm-order-btn');
    confirmBtnorder.addEventListener('click', function() {
    if (totalCost === 0) {
      alert("Please add packages to your cart");
    }
	 else {
    alert("Successfully confirmed order!");
  }
  });
	//validate part click confirm button
	const confirmBtn = document.getElementById('confirm-btn');
    confirmBtn.addEventListener('click', function() {
		
  const firstName = document.getElementById('first-name');
  const lastName = document.getElementById('last-name');
  const email = document.getElementById('email');
  const address = document.getElementById('Adress');
  const phone = document.getElementById('phone');
  const nameOnCard = document.getElementById('name-on-card');
  const cardNumber = document.getElementById('card-number');
  const expireMonth = document.getElementById('expire-month');
  const expireYear = document.getElementById('expire-year');
  const cvv = document.getElementById('cvv');


  // Validate the inputs
  if (totalCost === 0) {
    alert("Please add packages to your cart");
	return;
  }
  
  if (firstName.value === '') {
    alert('Please enter your first name.');
    return;
  }

  if (lastName.value === '') {
    alert('Please enter your last name.');
    return;
  }

  // Regular expression for email validation ref:https://uibakery.io/regex-library/email
  const emailRegex = /^\S+@\S+.\S+$/;

  // Validate the email input
  if (email.value === '') {
    alert('Please enter your email.');
    return;
  } else if (!emailRegex.test(email.value)) {
    alert('Please enter a valid email.');
    return;
  }

  if (address.value === '') {
    alert('Please enter your address.');
    return;
  }

  // Regular expression for phone number validation
  const phoneRegex = /^\d{10}$/;

  // Validate the phone input
  if (phone.value === '') {
    alert('Please enter your phone number.');
    return;
  } else if (!phoneRegex.test(phone.value)) {
    alert('Please enter a valid 10-digit phone number.');
    return;
  }

  if (nameOnCard.value === '') {
    alert('Please enter the name on your card.');
    return;
  }
  //regular expression cardnumber 
  const cardNumberRegex = /^(?:[0-9]{4}-){3}[0-9]{4}$|^([0-9]{16})$/;
  if (cardNumber.value === '') {
    alert('Please enter your card number.');
    return;
  }else if(!cardNumber.value.match(cardNumberRegex)){
    alert('Please enter a valid credit card number.16 digit');
  return;}
  
  
  if (expireMonth.value === '') {
    alert('Please enter your card expiration month.');
    return;
  }
  if (expireYear.value === '') {
    alert('Please enter your card expiration year.');
    return;
  }
  //regular expresion cvv
  const cvvRegex = /^[0-9]{3}$/;
  if (cvv.value === '') {
    alert('Please enter your card CVV.');
    return;
  }else if (!cvvRegex.test(cvv.value)) {
    alert('Please enter a valid CVV.');
  return;}
	
  // If all inputs are valid, show a success message
  alert('Payment confirmed! Thank you for your purchase.');
  
  const confirmButton = document.getElementById("confirm-btn");
	confirmButton.addEventListener("click", generateInvoice());
	
  });
	//generate invoice part 
	function generateInvoice() {
	  const firstName = document.getElementById("first-name").value;
	  const lastName = document.getElementById("last-name").value;
	  const total = document.getElementById("total").innerText.split("$")[1];
	  const dateTime = new Date().toLocaleString();

	  const invoiceHTML = ` 
		<div class="invoice">
		  <h1>Invoice</h1>
		  <div class="details">
			<p>Name: ${firstName} ${lastName}</p>
			<p>Total: $${total}</p>
			<p>pavement Successfully</p>
			<p>Date and Time: ${dateTime}</p>
			<p>Thank you </p>
		  </div>
		   </div>
		 <button onclick="window.location.reload()">Go Back</button>
		</div>
		</div>
	  `;

	  const invoiceContainer = document.getElementById("invoice-container");
	  invoiceContainer.innerHTML = invoiceHTML;
	  invoiceContainer.classList.remove("invoice-hidden");
	}
	
	//click reset button all input get empty 
	const resetButton = document.getElementById("reset");
	resetButton.addEventListener("click", function() {
    document.getElementById("first-name").value = "";
    document.getElementById("last-name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("Adress").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("name-on-card").value = "";
    document.getElementById("card-number").value = "";
    document.getElementById("expire-month").value = "";
    document.getElementById("expire-year").value = "";
    document.getElementById("cvv").value = "";
	
  });
  
function showSection() {
    var section = document.querySelector('.personal-details');
    section.style.display = 'block';
    section.scrollIntoView({ behavior: 'smooth' });
  }

  function hideSection() {
    var section = document.querySelector('.personal-details');
    section.style.display = 'none';
    section.scrollIntoView({ behavior: 'smooth' });
  }
//show the edit case in web page
  function editcase() {
    const firstName = document.getElementById("first-name").value;
    const lastName = document.getElementById("last-name").value;
	const email = document.getElementById('email').value;
	const phone = document.getElementById('phone').value;
    const nameHTML = `
      <p>Name: ${firstName} ${lastName} </p>
	  <p>Contact details: ${email} , ${phone} <P>
    `;
    const nameDisplay = document.querySelector('#editcase');
    nameDisplay.innerHTML = nameHTML;
  }
