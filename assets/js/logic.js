// TODO: Create logic to toggle the light/dark mode styles for the page and circle. The mode should be saved to local storage.
// Function to set the theme.
function applyTheme(mode) {
  const body = document.querySelector('body');
  const savedMode = localStorage.getItem('mode');
  const aside = document.querySelector('aside');
  const emojiEl = document.querySelector('#toggle');

  if (body) {
    body.classList.toggle('dark', mode === 'dark');
    body.classList.toggle('light', mode === 'light');
    }
    if (aside) {

      //aside.style.setProperty('--circle-color', mode === 'dark' ? '#563d7c' : '#ffb100');
      document.documentElement.style.setProperty('--circle-color', mode === 'dark' ? '#563d7c' : '#ffb100');
  } 
  if (emojiEl) {
    emojiEl.textContent = mode === 'dark' ? '🌙' : '☀️';
  } 
}

window.onload = function () {
  const savedMode = localStorage.getItem('mode') || 'light'; // Default to 'light' if no mode is saved
  applyTheme(savedMode);
};

// Event listener to toggle between dark and light mode
document.querySelector('#toggle').addEventListener('click', function () {
  const currentMode = localStorage.getItem('mode') === 'dark' ? 'light' : 'dark';
  //document.documentElement.style.setProperty('--circle-color', mode === 'dark' ? '#563d7c' : '#ffb100');
  applyTheme(currentMode);
  localStorage.setItem('mode', currentMode);
});


// TODO: Create a function called `readLocalStorage` that reads from local storage and returns the data. If no data exists, return an empty array.
function readLocalStorage() {
  const existingData = localStorage.getItem('blogData');
  return existingData ? JSON.parse(existingData) : [];
} 


// TODO: Create a function called `storeLocalStorage` that takes a given object and saves the new data to the existing blog data in local storage.
function storeLocalStorage(props) {


  let existingData = readLocalStorage();
  
  const newData = {
    username: props.username,
    title: props.title,
    content: props.content
  };


   
  existingData.push(newData);
  localStorage.setItem('blogData', JSON.stringify(existingData));
}


// ! Use the following function whenever you need to redirect to a different page
let redirectURL = '';

const redirectPage = function (url) {
  redirectURL = url;
  location.assign(url);
};