document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('search');
    const productItems = document.querySelectorAll('.product-item');

    searchInput.addEventListener('keyup', function() {
        const searchTerm = this.value.toLowerCase(); 

        productItems.forEach(function(item) {
            const productName = item.querySelector('h3').textContent.toLowerCase(); 
            if (productName.includes(searchTerm)) {
                item.style.display = 'block'; 
            } else {
                item.style.display = 'none'; 
            }
        });
    });
});
