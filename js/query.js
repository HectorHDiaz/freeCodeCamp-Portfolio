document.querySelectorAll(".carousel").forEach((carousel) => {
  const items = carousel.querySelectorAll(".carousel__item");
  const buttonsHtml = Array.from(items, () => {
    return `<span class="carousel__button"></span>`;
  });

  carousel.insertAdjacentHTML(
    "beforeend",
    `
        <div class="carousel__nav">
            ${buttonsHtml.join("")}
        </div>
    `
  );

  const buttons = carousel.querySelectorAll(".carousel__button");
  const buttonsPrev = document.getElementById("prev")
  const buttonsNext = document.getElementById("next")
  let itemsIndex = 0

  buttonsPrev.addEventListener('click', ()=>{
    items.forEach((item, i) =>{  
        item.classList.remove("carousel__item--selected")
        buttons[i].classList.remove("carousel__button--selected")
      });
      itemsIndex--
      if(itemsIndex < items.length - items.length){
        itemsIndex = 2
      }
        items[itemsIndex].classList.add("carousel__item--selected")
        buttons[itemsIndex].classList.add("carousel__button--selected");
      
  })

  buttonsNext.addEventListener('click', ()=>{
    items.forEach((item, i) =>{
      item.classList.remove("carousel__item--selected")
      buttons[i].classList.remove("carousel__button--selected")
    });
      itemsIndex++
    if(itemsIndex > items.length-1){
      itemsIndex = 0
    }
      items[itemsIndex].classList.add("carousel__item--selected")
      buttons[itemsIndex].classList.add("carousel__button--selected");
    
  })
   
  buttons.forEach((button, i) => {
    button.addEventListener("click", () => {
      // un-select all the items
      items.forEach((item) =>
        item.classList.remove("carousel__item--selected")
      );
      buttons.forEach((button) =>
        button.classList.remove("carousel__button--selected")
      );
      itemsIndex = i
      items[i].classList.add("carousel__item--selected");
      button.classList.add("carousel__button--selected");
    });
  });

  // Select the first item on page load
  items[0].classList.add("carousel__item--selected");
  buttons[0].classList.add("carousel__button--selected");
});