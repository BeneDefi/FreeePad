// // Get the theme toggle button
// const themeToggleButton = document.getElementById('theme-toggle');

// // Check for saved user preferences in localStorage
// if (localStorage.getItem('theme') === 'dark') {
//   document.body.classList.add('dark-mode');
// } else {
//   document.body.classList.add('light-mode');
// }

// // Event listener for the toggle button
// themeToggleButton.addEventListener('click', () => {
//   // Toggle the theme classes on the body
//   document.body.classList.toggle('light-mode');
//   document.body.classList.toggle('dark-mode');

//   // Save the user's preference in localStorage
//   if (document.body.classList.contains('dark-mode')) {
//     localStorage.setItem('theme', 'dark');
//   } else {
//     localStorage.setItem('theme', 'light');
//   }
// });

// Function to show the mobile dropdown menu
function hamburg() {
  const navbar = document.querySelector(".dropdown");
  navbar.classList.add("open"); // Add the 'open' class to show the dropdown
}

// Function to close the dropdown menu
function cancel() {
  const navbar = document.querySelector(".dropdown");
  navbar.classList.remove("open"); // Remove the 'open' class to hide the dropdown
}

// Get the theme toggle button
const themeToggleButton = document.getElementById('theme-toggle');

// Check for saved user preferences in localStorage
if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark-mode');
} else {
  document.body.classList.add('light-mode');
}

// Event listener for the toggle button
themeToggleButton.addEventListener('click', () => {
  // Toggle the theme classes on the body
  document.body.classList.toggle('light-mode');
  document.body.classList.toggle('dark-mode');

  // Save the user's preference in localStorage
  if (document.body.classList.contains('dark-mode')) {
      localStorage.setItem('theme', 'dark');
  } else {
      localStorage.setItem('theme', 'light');
  }
});
