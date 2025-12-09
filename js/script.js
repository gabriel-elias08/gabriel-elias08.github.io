const openPopupBtn = document.getElementById('openPopupBtn');
const closePopupBtn = document.getElementById('closePopupBtn');
const popupOverlay = document.getElementById('popupOverlay');

openPopupBtn.addEventListener('click', () => {
  popupOverlay.style.display = 'flex';
  popupOverlay.style.alignItems = 'center';
  popupOverlay.style.justifyContent = 'center';
});

closePopupBtn.addEventListener('click', () => {
  popupOverlay.style.display = 'none';
});

// Optional: Close popup when clicking outside the contact form
popupOverlay.addEventListener('click', (event) => {
  if (event.target === popupOverlay) {
    popupOverlay.style.display = 'none';
  }
});
function sendEmail(event) {
  event.preventDefault(); // Prevent the default form submission

  // Get form values
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Prepare the email parameters
  const templateParams = {
    from_name: name,
    from_email: email,
    message: message,
  };

  // Send the email using EmailJS
  emailjs.send('service_yourserviceid', 'template_yourtemplateid', templateParams)
    .then((response) => {
      console.log('Email sent successfully!', response.status, response.text);
      alert('Your message has been sent successfully!');
      // Close the popup after sending the email
      popupOverlay.style.display = 'none';
    }, (error) => {
      console.error('Failed to send email.', error);
      alert('There was an error sending your message. Please try again later.');
    });
}

// Attach the sendEmail function to the form submission
document.getElementById('contactForm').addEventListener('submit', sendEmail); 