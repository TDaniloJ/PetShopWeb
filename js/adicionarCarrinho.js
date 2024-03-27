function adicionarCarrinho(event) {
    const produto = event.target.parentNode;
    const produtoImage = produto.querySelector('img').src;
    const produtoNome = produto.querySelector('h3').innerHTML;
    const produtoPreco = produto.querySelector('p:nth-child(3)').innerText;


    const produtoData = {
        img: produtoImage,
        nome: produtoNome,
        preco: produtoPreco
    };

    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    cart = push(produtoData);

    localStorage.setItem('cart', JSON.stringify(cart));

}

const BtnComprar = document.querySelectorAll('.btn-buy');

BtnComprar.forEach(button => {
    button.addEventListener('click', adicionarCarrinho);
});
