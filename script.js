const paragrafo = document.querySelector('p.center-text');
const meio = document.querySelector('main.main-content');
const centro = document.querySelector('section.center-content');
const titulo = document.querySelector('h1');
const primeiroParagrafo = document.querySelector('p.primeiro-paragrafo');
const rodape = document.querySelector('p.rodape');

function changeText() {
  const blocosDeTexto = [
    'Dentro de dois anos, me vejo trabalhando em um cargo mais voltado',
    'para a área de análise de dados, aplicando minhas habilidades em',
    'programação e estatística para resolver problemas complexos e',
    'contribuir para o crescimento da empresa. Além disso, pretendo',
    'continuar aprimorando meus conhecimentos em tecnologias emergentes',
    'e metodologias ágeis, buscando sempre me manter atualizado com',
    'as tendências do mercado.',
  ];

  paragrafo.textContent = blocosDeTexto.join(' ');
}
changeText();

function changeBackgroundColor() {
  const color = 'rgb(76, 164, 109)';
  meio.style.backgroundColor = color;
}
changeBackgroundColor();

function midColor() {
  const color = 'white';
  centro.style.backgroundColor = color;
}
midColor();

function changeTitle() {
  const newTitle = 'Desafio - JavaScript';
  titulo.textContent = newTitle;
}
changeTitle();

function changeParagraph() {
  const upperCaseText = primeiroParagrafo.textContent.toUpperCase();
  primeiroParagrafo.textContent = upperCaseText;
}
changeParagraph();

function changeFooter() {
  const filhas = centro.children;
  // 1. Transforma a lista de elementos em um array de textos
  const textos = Array.from(filhas).map((p) => p.textContent);

  // 2. Junta todos os textos com um espaço entre eles
  rodape.textContent = textos.join(' ');
}
changeFooter();
