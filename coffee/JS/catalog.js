function getStarsHtml(rating) {
    var html = [];
    //добавляем в массив данные с помощью push
    html.push('<div class="stars">');
    for (var i = 1;  i <= 5; i++) {
        //если i меньше рейтинга, то i заполняются оранжевыми звездами,
        // если i больше рейтинга, то в превышении заполняется серая звезда
        html.push('<span class="star '+ (i <= rating ? 'full' : '') + '"></span>');
    }
    html.push('</div>');
    //склеиваем все span в одну строку
    return html.join('');
}

function getCirclesHtml(sour) {
    var html = [];   
    html.push('<p>');
    for (var i = 1;  i <= 10; i++) {
        html.push('<span class="round '+ (i <= sour ? 'full' : '') + '"></span>');
    }
    html.push('</p>');
    return html.join('');
}

function getCirclesHtml(bitter) {
    var html = [];   
    html.push('<p>');
    for (var i = 1;  i <= 10; i++) {
        html.push('<span class="round '+ (i <= bitter ? 'full' : '') + '"></span>');
    }
    html.push('</p>');
    return html.join('');
}

function getCirclesHtml(saturated) {
    var html = [];   
    html.push('<p>');
    for (var i = 1;  i <= 10; i++) {
        html.push('<span class="round '+ (i <= saturated ? 'full' : '') + '"></span>');
    }
    html.push('</p>');
    return html.join('');
}

function getGrainsHtml(grain) {
    var html = [];   
    html.push('<div class="grains">');
    for (var i = 1;  i <= 5; i++) {
        html.push('<span class="grain '+ (i <= grain ? 'full' : '') + '"></span>');
    }
    html.push('</div>');
    return html.join('');
}              

var cardWrap = document.getElementById("card-wrap");

var card = [
{
    imgSale: "",
    choice1: "Популярное",
    choice2: "Новый урожай",
    imgUrl: "img/card01.jpg",
    rating: 4.0,
    grain: 4,
    sour: 7,
    bitter: 9,
    saturated: 10,
    reviews: "(32 отзыва)",
    title: "Colombia Supremo",
    titleSmall: "Свежеобжаренный кофе - описание товара, вкус, аромат",
    price: "", 
    priceSale: "250 &#8381;"
},
{
    imgSale: "",
    choice1: "Популярное",
    choice2: "Новый урожай",
    imgUrl: "img/card01.jpg",
    rating: 4.2,
    grain: 5,
    sour: 10,
    bitter: 4,
    saturated: 8,
    reviews: "(32 отзыва)",
    title: "Colombia Supremo",
    titleSmall: "Свежеобжаренный кофе - описание товара, вкус, аромат",
    price: "", 
    priceSale: "250 &#8381;"
},
{
    imgSale: "img/icons.svg#percent",
    choice1: "",
    choice2: "Скидки",
    imgUrl: "img/card01.jpg",
    rating: 3.0,
    grain: 3,
    sour: 5,
    bitter: 10,
    saturated: 7,
    reviews: "(32 отзыва)",
    title: "Colombia Supremo",
    titleSmall: "Свежеобжаренный кофе - описание товара, вкус, аромат",
    price: "350 &#8381;", 
    priceSale: "250 &#8381;"
},
{
    imgSale: "",
    choice1: "Популярное",
    choice2: "Новый урожай",
    imgUrl: "img/card01.jpg",
    rating: 4.2,
    grain: 5,
    sour: 10,
    bitter: 4,
    saturated: 8,
    reviews: "(32 отзыва)",
    title: "Colombia Supremo",
    titleSmall: "Свежеобжаренный кофе - описание товара, вкус, аромат",
    price: "", 
    priceSale: "250 &#8381;"
},
{
    imgSale: "",
    choice1: "Популярное",
    choice2: "Новый урожай",
    imgUrl: "img/card01.jpg",
    rating: 4.2,
    grain: 5,
    sour: 10,
    bitter: 4,
    saturated: 8,
    reviews: "(32 отзыва)",
    title: "Colombia Supremo",
    titleSmall: "Свежеобжаренный кофе - описание товара, вкус, аромат",
    price: "", 
    priceSale: "250 &#8381;"
},
{
    imgSale: "",
    choice1: "Популярное",
    choice2: "Новый урожай",
    imgUrl: "img/card01.jpg",
    rating: 4.2,
    grain: 5,
    sour: 10,
    bitter: 4,
    saturated: 8,
    reviews: "(32 отзыва)",
    title: "Colombia Supremo",
    titleSmall: "Свежеобжаренный кофе - описание товара, вкус, аромат",
    price: "", 
    priceSale: "250 &#8381;"
},
{
    imgSale: "",
    choice1: "Популярное",
    choice2: "Новый урожай",
    imgUrl: "img/card01.jpg",
    rating: 4.2,
    grain: 5,
    sour: 10,
    bitter: 4,
    saturated: 8,
    reviews: "(32 отзыва)",
    title: "Colombia Supremo",
    titleSmall: "Свежеобжаренный кофе - описание товара, вкус, аромат",
    price: "", 
    priceSale: "250 &#8381;"
},
{
    imgSale: "img/icons.svg#percent",
    choice1: "",
    choice2: "Новый урожай",
    imgUrl: "img/card01.jpg",
    rating: 3.0,
    grain: 3,
    sour: 5,
    bitter: 10,
    saturated: 7,
    reviews: "(32 отзыва)",
    title: "Colombia Supremo",
    titleSmall: "Свежеобжаренный кофе - описание товара, вкус, аромат",
    price: "350 &#8381;", 
    priceSale: "250 &#8381;"
},
{
    imgSale: "",
    choice1: "Популярное",
    choice2: "Новый урожай",
    imgUrl: "img/card01.jpg",
    rating: 4.2,
    grain: 5,
    sour: 10,
    bitter: 4,
    saturated: 8,
    reviews: "(32 отзыва)",
    title: "Colombia Supremo",
    titleSmall: "Свежеобжаренный кофе - описание товара, вкус, аромат",
    price: "", 
    priceSale: "250 &#8381;"
},
{
    imgSale: "",
    choice1: "Популярное",
    choice2: "Новый урожай",
    imgUrl: "img/card01.jpg",
    rating: 4.2,
    grain: 5,
    sour: 10,
    bitter: 4,
    saturated: 8,
    reviews: "(32 отзыва)",
    title: "Colombia Supremo",
    titleSmall: "Свежеобжаренный кофе - описание товара, вкус, аромат",
    price: "", 
    priceSale: "250 &#8381;"
},
{
    imgSale: "",
    choice1: "Популярное",
    choice2: "Новый урожай",
    imgUrl: "img/card01.jpg",
    rating: 4.2,
    grain: 5,
    sour: 10,
    bitter: 4,
    saturated: 8,
    reviews: "(32 отзыва)",
    title: "Colombia Supremo",
    titleSmall: "Свежеобжаренный кофе - описание товара, вкус, аромат",
    price: "", 
    priceSale: "250 &#8381;"
},
{
    imgSale: "",
    choice1: "Популярное",
    choice2: "Новый урожай",
    imgUrl: "img/card01.jpg",
    rating: 4.2,
    grain: 5,
    sour: 10,
    bitter: 4,
    saturated: 8,
    reviews: "(32 отзыва)",
    title: "Colombia Supremo",
    titleSmall: "Свежеобжаренный кофе - описание товара, вкус, аромат",
    price: "", 
    priceSale: "250 &#8381;"
}
]

var str = "";
for(let i=0; i<card.length; i++) {
    var item = card[i];
    var circleImg = item.imgSale ? `<svg width="70" height="70"><use xlink:href="${item.imgSale}"></use></svg>` : '';
    str += `<div class="card">
                <div class="card-top">
                    <div>
                        ${circleImg}
                    </div>
                    <div>
                        <span>${item.choice1}</span>
                        <span>${item.choice2}</span>
                    </div>
                    <form method="post" action="https://fe.it-academy.by/TestForm.php">
                        <select name="weight-item">
                            <option value="250">250г.</option>
                            <option value="500">500г.</option>
                            <option value="1000">1000г.</option>
                        </select>
                    </form>
                </div>
                <div class="card-body">
                    <a href="card-product.html">
                            <img src="${item.imgUrl}" alt="coffee">
                    </a>
                    <div>
                        ${getStarsHtml(item.rating)}
                        <div class="rating">
                            <span>${item.rating}</span><span>${item.reviews}</span>
                        </div>
                            ${getGrainsHtml(item.grain)}
                        <div class="specification">
                            <p>Кислинка</p> 
                            ${getCirclesHtml(item.sour)}
                        </div>
                        <div class="specification">
                            <p>Горчинка</p>
                            ${getCirclesHtml(item.bitter)}
                        </div>
                        <div class="specification">
                            <p>Насыщенность</p>
                            ${getCirclesHtml(item.saturated)}
                        </div>
                    </div>
                </div>
                <h6>
                    <a href="card-product.html">${item.title}</a>
                </h6>
                <p>${item.titleSmall}</p>
                <div class="price">
                    <span>${item.price}</span>
                    <span>${item.priceSale}</span>
                </div>
                <button><a href="basket.html">В корзину</a>
                </button>
            </div>`;    
}
cardWrap.innerHTML = str;

var shadow = document.getElementById('shadow');
var list = document.getElementById('list');
var open = document.getElementById('open');
    shadow.addEventListener('click', function (e) {
        e.currentTarget.style.display = 'none';
        list.style.display = 'none';
    });
    open.addEventListener('click', function() {
        shadow.style.display = 'block';
        list.style.display = 'block';
    })