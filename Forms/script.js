function validateForm() {
  let form = document.forms[0];
  let fullname = form["fullname"].value.trim();
  let initial = form["initial"].value.trim();
  let gender = form["gender"].value;
  let dob = form["dob"].value;
  let fathername = form["fathername"].value.trim();
  let mothername = form["mothername"].value.trim();
  let email = form["email"].value.trim();
  let phone = form["phone"].value.trim();
  let street = form["street"].value.trim();
  let city = form["city"].value.trim();
  let state = form["state"].value.trim();
  let postal = form["postal"].value.trim();
  let country = form["country"].value.trim();
  let occupation = form["occupation"].value.trim();
  let company = form["company"].value.trim();
  let workemail = form["workemail"].value.trim();
  let workphone = form["workphone"].value.trim();
  let bankname = form["bankname"].value.trim();
  let accountholder = form["accountholder"].value.trim();
  let accountnumber = form["accountnumber"].value.trim();
  let branchname = form["branchname"].value.trim();
  let pancard = form["pancard"].value.trim();

 
  let namePattern = /^[A-Za-z\s]+$/; 
  let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  let phonePattern = /^[6-9]\d{9}$/;
  let postalPattern = /^\d{6}$/;
  let panPattern = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/; 
  let accountPattern = /^\d{9,18}$/; 


  if (!fullname.match(namePattern)) {
    alert("Please enter a valid Full Name (only letters).");
    return false;
  }

  if (initial && !initial.match(/^[A-Za-z]+$/)) {
    alert("Initial should contain only letters.");
    return false;
  }

  if (!gender) {
    alert("Please select your Gender.");
    return false;
  }

  if (!dob) {
    alert("Please enter your Date of Birth.");
    return false;
  }

  if (fathername && !fathername.match(namePattern)) {
    alert("Father Name should contain only letters.");
    return false;
  }

  if (mothername && !mothername.match(namePattern)) {
    alert("Mother Name should contain only letters.");
    return false;
  }

  if (!email.match(emailPattern)) {
    alert("Please enter a valid Email Address.");
    return false;
  }

  if (!phone.match(phonePattern)) {
    alert("Please enter a valid 10-digit Phone Number starting with 6, 7, 8, or 9.");
    return false;
  }

  
  if (!street) {
    alert("Street Address cannot be empty.");
    return false;
  }

  if (city && !city.match(namePattern)) {
    alert("City should contain only letters.");
    return false;
  }

  if (state && !state.match(namePattern)) {
    alert("State/Province should contain only letters.");
    return false;
  }

  if (postal && !postal.match(postalPattern)) {
    alert("Postal Code must be a 6-digit number.");
    return false;
  }

  if (country && !country.match(namePattern)) {
    alert("Country should contain only letters.");
    return false;
  }

 
  if (occupation && !occupation.match(namePattern)) {
    alert("Occupation/Job Title should contain only letters.");
    return false;
  }

  if (company && !company.match(namePattern)) {
    alert("Company Name should contain only letters.");
    return false;
  }

  if (workemail && !workemail.match(emailPattern)) {
    alert("Please enter a valid Work Email.");
    return false;
  }

  if (workphone && !workphone.match(phonePattern)) {
    alert("Please enter a valid 10-digit Work Phone Number.");
    return false;
  }

  
  if (bankname && !bankname.match(namePattern)) {
    alert("Bank Name should contain only letters.");
    return false;
  }

  if (accountholder && !accountholder.match(namePattern)) {
    alert("Account Holder Name should contain only letters.");
    return false;
  }

  if (accountnumber && !accountnumber.match(accountPattern)) {
    alert("Account Number should be between 9 and 18 digits.");
    return false;
  }

  if (branchname && !branchname.match(namePattern)) {
    alert("Branch Name should contain only letters.");
    return false;
  }

  if (pancard && !pancard.match(panPattern)) {
    alert("PAN Card Number must be in format: 5 letters, 4 digits, 1 letter (e.g., ABCDE1234F).");
    return false;
  }

 
  alert("Form submitted successfully ✅");
  return true;
}
