const colorElements = document.querySelectorAll('.color');
const colorNameElement = document.querySelector('.color-name');

colorElements.forEach(colorElement => {
  colorElement.addEventListener('click', () => {
    const colorName = colorElement.classList[1];
    colorNameElement.textContent = colorName;
  });
});
       