// Function to handle the form submission
function handleFormSubmission(event) {
    event.preventDefault();  // Prevent the default form submission behavior

    // Display the thank you message
    document.getElementById('thank-you-message').hidden = false;

    // Clear the form fields
    document.getElementById('contact-form').reset();
}

// Attaching the event handler to the form's submit event
document.getElementById('contact-form').addEventListener('submit', handleFormSubmission);
