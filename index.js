// Gestion du défilement doux pour les liens d'ancrage
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Informations sur les cartes produits
var card = document.querySelector(".card-product");

var card_info = [
  {
    reviews: "2050 avis",
    img: "/assets/img/png/mochup1.png",
    taste: "Fruit du dragon et menthe",
    produit: "/product.html#items1",
  },
  {
    reviews: "3000 avis",
    img: "/assets/img/png/mochup2.png",
    taste: "Citron et gingembre épicé",
    produit: "/product.html#items2",
  },
  {
    reviews: "1200 avis",
    img: "/assets/img/png/mochup3.png",
    taste: "Pomme verte et kiwi",
    produit: "/product.html#items3",
  },
  {
    reviews: "1200 avis",
    img: "/assets/img/png/mochup4.png",
    taste: "Framboise et litchi",
    produit: "/product.html#items4",
  },
  {
    reviews: "1200 avis",
    img: "/assets/img/png/mochup5.png",
    taste: "Orange sanguine et goyave",
    produit: "/product.html#items5",
  },
  {
    reviews: "1200 avis",
    img: "/assets/img/png/mochup6.png",
    taste: "Cerise noire et grenade",
    produit: "/product.html#items6",
  },
  {
    reviews: "1200 avis",
    img: "/assets/img/png/mochup7.png",
    taste: "Myrtille et açaï",
    produit: "/product.html#items7",
  },
  {
    reviews: "1200 avis",
    img: "/assets/img/png/mochup8.png",
    taste: "Ananas et noix de coco",
    produit: "/product.html#items8",
  },
  {
    reviews: "1200 avis",
    img: "/assets/img/png/mochup9.png",
    taste: "Pêche et fruit de la passion",
    produit: "/product.html#items9",
  },
];

// Insertion dynamique des cartes produits dans le DOM
document.getElementById("test1").innerHTML = card_info
  .map(
    (card) =>
      ` <div class="card-product">
          <div class="product_info">
            <div class="rate">
              <div class="stars">
                <img src="/assets/img/svg/start_filled.svg" alt="" />
                <img src="/assets/img/svg/start_filled.svg" alt="" />
                <img src="/assets/img/svg/start_filled.svg" alt="" />
                <img src="/assets/img/svg/start_filled.svg" alt="" />
                <img src="/assets/img/svg/star_half.svg" alt="" />
              </div>
              <p class="body-font">${card.reviews}</p>
            </div>
            <p class="body-font2">2,99€</p>
          </div>
          <div class="product-img">
           <img  src=${card.img} alt="" />
          </div>
          <div class="product_info">
            <p style="max-width: 200px;" class="uppercase">${card.taste}</p>
            <a href=${card.produit}>
              <button class="button-primary">ACHETER</button>
            </a>
          </div>
        </div>`
  )
  .join("");

const toggleBtn = document.querySelector(".toogle-button");
const toggleBtn2 = document.querySelector(".toogle-button2");
const menu = document.querySelector(".menu-burger");

toggleBtn.addEventListener("click", () => {
  menu.classList.toggle("active");
});

toggleBtn2.addEventListener("click", () => {
  menu.classList.toggle("active");
});
