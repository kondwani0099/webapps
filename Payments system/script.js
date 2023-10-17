// JavaScript code to handle form submission and interactions

document.getElementById("payment-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const amount = document.getElementById("amount").value;

  // Call a function to initiate the payment and store data in the database
  initiatePayment(amount);
});

// Function to simulate initiating the payment and verification process
function initiatePayment(amount) {
  // Simulate storing data in the database
  // Update UI to show verification button enabled
  document.getElementById("verify-button").removeAttribute("disabled");
}

document.getElementById("verify-button").addEventListener("click", function () {
  // Call a function to verify payment on the blockchain and update status
  verifyPayment();
});

// Function to simulate verifying payment on the blockchain
function verifyPayment() {
  // Update UI to show verified status
  document.getElementById("status").textContent = "Verified";


}

//*****************************************seller************* */

// JavaScript code to handle interactions on the seller page

// Function to fetch payment details from the server
function fetchPaymentDetails() {
    // Simulate fetching payment details from the server
    const receivedAmount = 500; // Replace with actual received amount
    document.getElementById("amount-received").textContent = `$${receivedAmount.toFixed(2)}`;
  
    // Enable withdraw button if received amount is greater than zero
    if (receivedAmount > 0) {
      document.getElementById("withdraw-button").removeAttribute("disabled");
    }
  }
  
  // Function to simulate withdrawing funds
  function withdrawFunds() {
    // Simulate withdrawing funds process
    // Update UI to reflect withdrawal
    alert("Funds successfully withdrawn!");
  }
  
  // Fetch payment details when the page loads
  window.addEventListener("load", fetchPaymentDetails);
  
  // Attach event listener to the withdraw button
  document.getElementById("withdraw-button").addEventListener("click", withdrawFunds);

  
  //**********************admin**************************************8

  // JavaScript code to handle interactions on the admin page

// Function to fetch customer list from the server
function fetchCustomerList() {
    // Simulate fetching customer list from the server
    const customers = ["Customer 1", "Customer 2", "Customer 3"];
    const customerListUl = document.getElementById("customer-list-ul");
  
    customers.forEach(customer => {
      const li = document.createElement("li");
      li.textContent = customer;
      customerListUl.appendChild(li);
    });
  }
  
  // Function to fetch seller list from the server
  function fetchSellerList() {
    // Simulate fetching seller list from the server
    const sellers = ["Seller 1", "Seller 2", "Seller 3"];
    const sellerListUl = document.getElementById("seller-list-ul");
  
    sellers.forEach(seller => {
      const li = document.createElement("li");
      li.textContent = seller;
      sellerListUl.appendChild(li);
    });
  }
  
  // Function to fetch verification list from the server
  function fetchVerificationList() {
    // Simulate fetching verification list from the server
    const verifications = ["Verification 1", "Verification 2", "Verification 3"];
    const verificationListUl = document.getElementById("verification-list-ul");
  
    verifications.forEach(verification => {
      const li = document.createElement("li");
      li.textContent = verification;
      verificationListUl.appendChild(li);
    });
  }
  
  // Fetch lists when the page loads
  window.addEventListener("load", function () {
    fetchCustomerList();
    fetchSellerList();
    fetchVerificationList();
  });
  
