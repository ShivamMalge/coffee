
function navigateToBranches() {
  window.location.href = 'branches.html'; 
}
document.querySelectorAll('a[href="branches.html"]').forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault(); 
    navigateToBranches();   
  });
});
const productsLink = document.getElementById('products-link');
productsLink.addEventListener('click', function(event) {
  event.preventDefault();

  window.location.href = 'products.html';
});
