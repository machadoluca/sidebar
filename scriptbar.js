const sideBar = document.querySelector('.sidebar-container');
const hamburgerBtn = document.querySelector('.side-index button');
const searchBar = document.getElementById('search-input');

hamburgerBtn.addEventListener('click', () => {
  sideBar.classList.toggle('sidebar-resume');
});

searchBar.addEventListener('focus', () => {
  if (sideBar.classList.value == 'sidebar-container') {
    sideBar.classList.toggle('sidebar-resume');
  }
});
