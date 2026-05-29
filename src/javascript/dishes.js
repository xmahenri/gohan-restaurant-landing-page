import { list_dishes } from "./data.js"

const dishes = document.querySelector("#dishes")

function createDishes(obj) {
    const rawContent = `
    <div class="dish">
    <div class="dish-heart">
    <i class="fa-solid fa-heart"></i>
    </div>
    <img src="${obj.image}" class="dish-image" alt="Prato 1">
    
    <h3 class="dish-title">
    ${obj.title}
    </h3>
    <span class="dish-description">
    ${obj.description}
    </span>
    <div class="dish-rate">
    ${obj.rate}<i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    <span>(500+)</span>
    </div>
    <div class="dish-price">
    <h4>${obj.price}</h4>
    <button class="btn-default">
    <i class="fa-solid fa-basket-shopping"></i>
    </button>
    </div>
    </div>
    `
    let elementDiv = document.createElement("div")
    elementDiv.innerHTML = rawContent
    
    return elementDiv
}

list_dishes.forEach((dish) => {
    console.log(dish)
    dishes.appendChild(createDishes(dish))
}) 

