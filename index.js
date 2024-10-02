const themes = document.querySelectorAll('.theme');
const products = document.querySelectorAll('.product');
let maxValue = 0;

// Encontre o maior valor entre todos os produtos
products.forEach((product) => {
  const numero = product.querySelector('#numero');
  const valor = parseInt(numero.textContent);
  if (valor > maxValue) {
    maxValue = valor;
  }
});

products.forEach((product) => {
  const numero = product.querySelector('#numero');
  const valor = parseInt(numero.textContent);
  let width = (valor / maxValue) * 100 + '%';

  const barra = document.createElement('div');
  barra.className = 'barra hidden';
  barra.style.width = width;
  product.appendChild(barra);

  product.addEventListener('click', () => {
    product.classList.toggle('active');
    product.classList.toggle('expand');

    if (product.classList.contains('expand')) {
      barra.classList.remove('hidden');
    } else {
      barra.classList.add('hidden');
    }
  });
});