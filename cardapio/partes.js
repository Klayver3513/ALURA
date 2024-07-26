document.addEventListener('DOMContentLoaded', () => {
    const menuItems = document.querySelectorAll('#menu .item input');
    const cartItems = document.getElementById('cart-items');
    const totalElement = document.getElementById('total');
    const checkoutForm = document.getElementById('checkout-form');
    let total = 0;

    menuItems.forEach(item => {
        item.addEventListener('change', () => {
            const itemName = item.getAttribute('data-name');
            const itemPrice = parseFloat(item.getAttribute('data-price'));
            const quantity = 1; // Default quantity

            if (item.checked) {
                const listItem = document.createElement('li');
                listItem.textContent = `${itemName} - R$ ${itemPrice.toFixed(2)}`;
                listItem.setAttribute('data-name', itemName);
                listItem.setAttribute('data-price', itemPrice);
                cartItems.appendChild(listItem);
                total += itemPrice * quantity;
            } else {
                const listItem = cartItems.querySelector(`li[data-name="${itemName}"]`);
                if (listItem) {
                    cartItems.removeChild(listItem);
                    total -= itemPrice * quantity;
                }
            }
            totalElement.textContent = total.toFixed(2);
        });
    });

    document.getElementById('checkout').addEventListener('click', () => {
        checkoutForm.style.display = 'block';
    });

    document.getElementById('cancel').addEventListener('click', () => {
        checkoutForm.style.display = 'none';
    });

    document.querySelector('form').addEventListener('submit', (event) => {
        event.preventDefault();
        alert('Pedido finalizado com sucesso!');
    });
});
