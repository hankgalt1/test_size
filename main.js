
const width = window.innerWidth;
const height = window.innerHeight;
 
console.log("Ширина экрана: " + width + "px");
console.log("Высота экрана: " + height + "px");
const changeText = () => {
    // Выбираем элемент на странице, и меняем содержимое нужного поля
    document.getElementsByClassName('text')[0].textContent = `width:${width},height:${height}`;
  }
  