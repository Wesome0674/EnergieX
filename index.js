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
    fruit: "/assets/img/png/menteDragon.png",
  },
  {
    reviews: "3000 avis",
    img: "/assets/img/png/mochup2.png",
    taste: "Citron et gingembre épicé",
    fruit: "/assets/img/png/menteDragon.png",
  },
  {
    reviews: "1200 avis",
    img: "/assets/img/png/mochup3.png",
    taste: "Pomme verte et kiwi",
    fruit: "/assets/img/png/menteDragon.png",
  },
  {
    reviews: "1200 avis",
    img: "/assets/img/png/mochup4.png",
    taste: "Framboise et litchi",
    fruit: "/assets/img/png/menteDragon.png",
  },
  {
    reviews: "1200 avis",
    img: "/assets/img/png/mochup5.png",
    taste: "Orange sanguine et goyave",
    fruit: "/assets/img/png/menteDragon.png",
  },
  {
    reviews: "1200 avis",
    img: "/assets/img/png/mochup6.png",
    taste: "Cerise noire et grenade",
    fruit: "/assets/img/png/menteDragon.png",
  },
  {
    reviews: "1200 avis",
    img: "/assets/img/png/mochup7.png",
    taste: "Myrtille et açaï",
    fruit: "/assets/img/png/menteDragon.png",
  },
  {
    reviews: "1200 avis",
    img: "/assets/img/png/mochup8.png",
    taste: "Ananas et noix de coco",
    fruit: "/assets/img/png/menteDragon.png",
  },
  {
    reviews: "1200 avis",
    img: "/assets/img/png/mochup9.png",
    taste: "Pêche et fruit de la passion",
    fruit: "/assets/img/png/menteDragon.png",
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
            <a href="/product.html">
              <button class="button-primary">ACHETER</button>
            </a>
          </div>
        </div>`
  )
  .join("");
