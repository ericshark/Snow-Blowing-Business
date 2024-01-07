document.addEventListener('DOMContentLoaded', () => {
    
    const TAX_RATE = 0.07; 
    const SHIPPING_FEE = 15; 
    const orderForm = document.getElementById('orderForm');
    const totalElement = document.getElementById('total');
    const orderButton = document.getElementById('orderButton');

    function updateTotal() {
        let subtotal = 0;
        const services = orderForm.querySelectorAll('input[name="service"]:checked');

        services.forEach(service => {
            subtotal += parseFloat(service.dataset.price);
        });

        const tax = subtotal * TAX_RATE;
        const total = subtotal + tax + SHIPPING_FEE;

        totalElement.textContent = `Subtotal: $${subtotal.toFixed(2)} + Tax: $${tax.toFixed(2)} + Shipping: $${SHIPPING_FEE.toFixed(2)} = Total: $${total.toFixed(2)}`;
    }

    orderForm.addEventListener('change', updateTotal);

    orderButton.addEventListener('click', () => {
        if (orderForm.querySelectorAll('input[name="service"]:checked').length === 0) {
            alert('Please select at least one service to place an order.');
        } else {

            window.location.href = 'order-complete.html';
        }
    });
    updateTotal();
});
