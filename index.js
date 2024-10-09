var card = document.querySelector(".card-product");

var card_info = [
  {
    reviews: "2050 reviews",
    img: "/assets/img/png/mochup1.png",
    taste: "Fruit du dragon et mente",
  },
  {
    reviews: "3000 reviews",
    img: "/assets/img/png/mochup2.png",
    taste: "Citron et Gingembre épicé",
  },
  {
    reviews: "1200 reviews",
    img: "/assets/img/png/mochup3.png",
    taste: "Pomme verte et kiwi",
  },
  {
    reviews: "1200 reviews",
    img: "/assets/img/png/mochup4.png",
    taste: "Framboise et litchi",
  },
  {
    reviews: "1200 reviews",
    img: "/assets/img/png/mochup5.png",
    taste: "Orange Sanguine et goyave",
  },
  {
    reviews: "1200 reviews",
    img: "/assets/img/png/mochup6.png",
    taste: "Cerise Noir et grenade",
  },
  {
    reviews: "1200 reviews",
    img: "/assets/img/png/mochup7.png",
    taste: "Myrtille et Acai",
  },
  {
    reviews: "1200 reviews",
    img: "/assets/img/png/mochup8.png",
    taste: "Ananas et noix de coco",
  },
  {
    reviews: "1200 reviews",
    img: "/assets/img/png/mochup9.png",
    taste: "Peche et fruit de la passion",
  },
];

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
            <p class="body-font2">2.99$</p>
          </div>
          <img class="product-img" src=${card.img} alt="" />
          <div class="product_info">
            <p class="uppercase">${card.taste}</p>
            <button class="button-primary">ADD TO CART</button>
          </div>
        </div>`
  )
  .join("");
