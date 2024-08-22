/*Cor do link ativo*/

const currentPageUrl = window.location.href;
const links = document.querySelectorAll('a[href]');

links.forEach((link) => {
  if (link.href === currentPageUrl) {
    link.classList.add('activelink');
  } else {
    link.classList.remove('activelink');
  }
});


/*Toggle nav */
function toggleNav() {
  document.body.classList.toggle("nav-open");
}