document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.add-to-cart');
    const formSimplificado = document.getElementById('cadastroSimplificadoForm');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Produto adicionado ao carrinho!');
        });
    });

    formSimplificado.addEventListener('submit', (event) => {
        event.preventDefault();
        alert('Cliente cadastrado com sucesso!');
        formSimplificado.reset();
    });
});