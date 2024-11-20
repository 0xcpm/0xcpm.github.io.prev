
  // Update root html class to set CSS colors
  const toggleDarkMode = () => {
    const root = document.querySelector('html');
    root.classList.toggle('dark');
  }

  // Update local storage value for colorScheme
  const toggleColorScheme = () => {
    const colorScheme = localStorage.getItem('colorScheme');
    if (colorScheme === 'light') localStorage.setItem('colorScheme', 'dark');
    else localStorage.setItem('colorScheme', 'light');
  }

  // Set toggle input handler
  const toggle = document.querySelector('#color-mode-switch input[type="checkbox"]');
  if (toggle) toggle.onclick = () => {
    toggleDarkMode();
    toggleColorScheme();
  }

  // Check for color scheme on init
  const checkColorScheme = () => {
    const colorScheme = localStorage.getItem('colorScheme');
    // Default to light for first view
    if (colorScheme === null || colorScheme === undefined) localStorage.setItem('colorScheme', 'light');
    // If previously saved to dark, toggle switch and update colors
    if (colorScheme === 'dark') {
      toggle.checked = true;
      toggleDarkMode();
    }
  }
  checkColorScheme();

document.addEventListener("DOMContentLoaded", () => {
  const menuIcon = document.getElementById("menu-icon");
  const navLinks = document.getElementById("nav-links");

  menuIcon.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const toggleSwitch = document.getElementById("switch");
  const body = document.body;

  // Check localStorage for saved mode preference
  if (localStorage.getItem("dark-mode") === "enabled") {
    body.classList.add("dark");
    toggleSwitch.checked = true;
  } else {
    body.classList.remove("dark");
    toggleSwitch.checked = false;
  }

  // Add event listener to the toggle switch
  toggleSwitch.addEventListener("change", () => {
    if (toggleSwitch.checked) {
      body.classList.add("dark");
      localStorage.setItem("dark-mode", "enabled"); // Save the mode to localStorage
    } else {
      body.classList.remove("dark");
      localStorage.setItem("dark-mode", "disabled"); // Save the mode to localStorage
    }
  });
});