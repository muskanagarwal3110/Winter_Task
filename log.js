function toggleElement() {
  const element = document.getElementById('sort_ToToggle');
  if (element.style.display === 'none') {
    element.style.display = 'block'; 
  } else {
    element.style.display = 'none';
  }
}

function ListElement() {
  const element = document.getElementById('List_ToToggle');
  if (element.style.display === 'none') {
    element.style.display = 'block'; 
  } else {
    element.style.display = 'none';
  }
}

const themeToggleBtn = document.getElementById('theme-toggle');
const body = document.body;

themeToggleBtn.addEventListener('click', function() {
    // Toggle between light and dark themes
    body.classList.toggle('light-theme');
    body.classList.toggle('dark-theme');
});
