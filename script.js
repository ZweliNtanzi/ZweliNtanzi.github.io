// JavaScript for dark mode toggle
const toggleButton = document.getElementById('dark-mode-toggle');

toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

function validateForm() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  // Check if name is empty
  if (name === "") {
    alert("Please enter your name.");
    return false; // Prevent form submission
  }

  // Validate email format (basic pattern)
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    alert("Please enter a valid email address.");
    return false; // Prevent form submission
  }

  // Check if message is empty
  if (message === "") {
    alert("Please enter your message.");
    return false; // Prevent form submission
  }

  // If all validations pass
  alert("Form submitted successfully!");
  return true;
}