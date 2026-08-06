// Controla a abertura/fechamento do menu hambúrguer (visível apenas em telas <= 768px)

const botaoMenu = document.getElementById('MenuHamburguer');
const menuLinks = document.getElementById('Links');

botaoMenu.addEventListener('click', () => {
    // toggle() adiciona a classe se ela não existir, e remove se já existir.
    // Ele retorna true quando a classe FOI adicionada (menu abriu).
    const menuEstaAberto = menuLinks.classList.toggle('MenuAberto');

    // Atualiza o aria-expanded para leitores de tela saberem o estado atual
    botaoMenu.setAttribute('aria-expanded', menuEstaAberto);
});

// Fecha o menu automaticamente se o usuário clicar em algum link da navegação
menuLinks.addEventListener('click', (evento) => {
    if (evento.target.tagName === 'A') {
        menuLinks.classList.remove('MenuAberto');
        botaoMenu.setAttribute('aria-expanded', false);
    }
});