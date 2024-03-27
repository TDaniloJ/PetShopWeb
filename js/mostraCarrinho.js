// Função para exibir os itens do carrinho na página do carrinho
function displayCart() {
    const cart = JSON.parse(localStorage.getItem('cart'));
    const cartList = document.getElementById('cart');
  
    // Limpa o conteúdo atual do carrinho
    cartList.innerHTML = '';
  
    // Verifica se há itens no carrinho
    if (cart && cart.length > 0) {
      // Loop através de cada item do carrinho e adiciona à lista
      cart.forEach(item => {
        const cartItem = document.createElement('li');
  
        const itemImage = document.createElement('img');
        itemImage.src = item.image;
        itemImage.alt = item.name;
        cartItem.appendChild(itemImage);
  
        const itemName = document.createElement('p');
        itemName.textContent = item.name;
        cartItem.appendChild(itemName);
  
        const itemPrice = document.createElement('p');
        itemPrice.textContent = item.price;
        cartItem.appendChild(itemPrice);
  
        cartList.appendChild(cartItem);
    });
    } else {
      // Se o carrinho estiver vazio, exibe uma mensagem
      cartList.innerHTML = '<p>Carrinho vazio</p>';
    }
  }
  
  // Chama a função para exibir os itens do carrinho ao carregar a página
  window.onload = displayCart;