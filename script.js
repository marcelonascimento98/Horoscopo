const links = [
    { sign: "Áries", url: "https://www.personare.com.br/horoscopo-do-dia/aries" },
    { sign: "Touro", url: "https://www.personare.com.br/horoscopo-do-dia/touro" },
    { sign: "Gêmeos", url: "https://www.personare.com.br/horoscopo-do-dia/gemeos" },
    { sign: "Câncer", url: "https://www.personare.com.br/horoscopo-do-dia/cancer" },
    { sign: "Leão", url: "https://www.personare.com.br/horoscopo-do-dia/leao" },
    { sign: "Virgem", url: "https://www.personare.com.br/horoscopo-do-dia/virgem" },
    { sign: "Libra", url: "https://www.personare.com.br/horoscopo-do-dia/libra" },
    { sign: "Escorpião", url: "https://www.personare.com.br/horoscopo-do-dia/escorpiao" },
    { sign: "Sagitário", url: "https://www.personare.com.br/horoscopo-do-dia/sagitario" },
    { sign: "Capricórnio", url: "https://www.personare.com.br/horoscopo-do-dia/capricornio" },
    { sign: "Aquário", url: "https://www.personare.com.br/horoscopo-do-dia/aquario" },
    { sign: "Peixes", url: "https://www.personare.com.br/horoscopo-do-dia/peixes" }
];

let currentIndex = sessionStorage.getItem('currentIndex'); // Recupera o índice salvo
if (currentIndex === null) {
    // Se não houver valor, define um valor inicial com base no tempo atual (opcional)
    currentIndex = Math.floor(Math.random() * links.length);
} else {
    currentIndex = parseInt(currentIndex, 10); // Converte de volta para inteiro
}

const displayInterval = 3000; // Tempo em milissegundos (3 segundos) - Reduzido para ser mais rápido

function redirectToNextLink() {
    const { url, sign } = links[currentIndex];

    // Atualiza o texto com o signo atual
    const signElement = document.getElementById("current-sign");
    signElement.textContent = `Horóscopo de ${sign}`;

    // Torna o texto invisível antes do redirecionamento
    signElement.style.visibility = 'hidden';

    // Atualiza o índice de forma circular antes de redirecionar
    currentIndex = (currentIndex + 1) % links.length;

    // Armazena o novo índice no sessionStorage
    sessionStorage.setItem('currentIndex', currentIndex);

    // Aguarda o tempo mínimo de exibição do signo antes de redirecionar
    setTimeout(() => {
        window.location.href = url;
    }, 50); // Reduzido para 500ms (0,5 segundos)
}

// Redireciona imediatamente ao carregar a página (faz a troca antes do redirecionamento)
redirectToNextLink();
