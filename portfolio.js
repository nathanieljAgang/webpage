// Add your JavaScript validation logic here
// For example:
document.getElementById("submit-btn").addEventListener("click", function(event) {
    // Validate form fields
    var firstName = document.getElementById("txtApplicantFirstName").value;
    var surname = document.getElementById("txtApplicantFirstNameSurname").value;
    var nationality = document.getElementById("txtApplicantNationality").value;
    var stateOfOrigin = document.getElementById("txtApplicantStateOfOrigin").value;
    var lga = document.getElementById("txtApplicantLGA").value;
    var contactAddress = document.getElementById("txtApplicantContactAddress").value;
    var phoneNumber = document.getElementById("txtApplicantPhoneNumber").value;
    var email = document.getElementById("txtApplicantEmail").value;

    // Example validation: Check if first name is not empty
    if (firstName.trim() === "") {
        alert("Please enter your first name.");
        event.preventDefault(); // Prevent form submission
        return false;
    }

    // Add more validation rules for other fields

    // If all validations pass, allow form submission
    return true;
});
