let currentIndex = 0; // Índice da imagem atual
const images = document.querySelector(".carrossel-images");
const totalImages = images.children.length;

function mudarImagem(direction) {
    currentIndex += direction;

    // Verifica se o índice está fora do limite
    if (currentIndex < 0) {
        currentIndex = totalImages - 1; // Vai para a última imagem
    } else if (currentIndex >= totalImages) {
        currentIndex = 0; // Volta para a primeira imagem
    }

    // Move as imagens para a posição correta
    images.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function enviarWhatsApp() {
    // Obtendo os valores do formulário
    const nome = document.getElementById("nome").value;
    const telefone = document.getElementById("telefone").value;
    const email = document.getElementById("email").value;
    const categoria = document.getElementById("categoria").value;
    const mensagem = document.getElementById("mensagem").value;
    const termos = document.getElementById("termos").checked;

     // Validação de campos obrigatórios
     if (!nome || !telefone || !email || !categoria || !mensagem) {
        alert("Por favor, preencha todos os campos obrigatórios.");
        return;
    }

    // Verificando se o usuário aceitou os termos
    if (!termos) {
        alert("Você precisa aceitar os termos de uso e política de privacidade.");
        return;
    }

    // Criando a mensagem para o WhatsApp
    const numeroWhatsApp = "55859********"; // Número do WhatsApp
    const texto = `Olá, meu nome é ${nome}.%0A
    Telefone: ${telefone}%0A
    E-mail: ${email}%0A
    Categoria: ${categoria}%0A
    Mensagem: ${mensagem}%0A`;

    // Criando o link do WhatsApp
    const linkWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${texto}`;

    // Redirecionando para o WhatsApp
    window.open(linkWhatsApp, "_blank");
}
