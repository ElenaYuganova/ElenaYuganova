$(document).ready(function() { 
    $('.scroll').on('click', 'a', function(e) { 
        e.preventDefault(); 
        var id = $(this).attr('href');
        var top = $(id).offset().top; 
        $('html, body').animate({scrollTop: top}, 1500); 
    });

    $('#humb_button').click(function(){
        $('#humb_news').slideToggle(1000);      
        return false;
    });

    $('#humb_button_2').click(function(){
        $('#catalogs').slideToggle(1000);      
        return false;
    });

    $('#menu').click(function(){
        $('#header').slideToggle(300);      
        return false;
    });
     
    initCards();

    $('.cards-main').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1250,
              settings: {
                slidesToShow: 2,
              }
            },
            {
              breakpoint: 940,
              settings: {
                slidesToShow: 2,
              }
            },
            {
              breakpoint: 940,
              settings: {
                slidesToShow: 1,
              }
            }
          ]
    });  
});

function initCards() {
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

    var cardWrap2 = document.getElementById("card-wrap2");
   
    var card = [
    {
        imgSale: "img/icons.svg#percent",
        choice1: "",
        choice2: "Новый урожай",
        imgUrl: "img/card01.jpg",
        rating: 5.0,
        grain: 5,
        sour: 7,
        bitter: 7,
        saturated: 7,
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
        rating: 4.2,
        grain: 5,
        sour: 10,
        bitter: 6,
        saturated: 6,
        reviews: "(26 отзывов)",
        title: "Trismoka Nicaragua",
        titleSmall: "Свежеобжаренный кофе - описание товара, вкус, аромат",
        price: "", 
        priceSale: "270 &#8381;"
    },
    {
        imgSale: "img/icons.svg#percent",
        choice1: "",
        choice2: "Скидки",
        imgUrl: "img/card01.jpg",
        rating: 5.0,
        grain: 3,
        sour: 10,
        bitter: 5,
        saturated: 7,
        reviews: "(21 отзыв)",
        title: "Garibaldi Espresso",
        titleSmall: "Свежеобжаренный кофе - описание товара, вкус, аромат",
        price: "340 &#8381;", 
        priceSale: "240 &#8381;"
    },
    {
        imgSale: "img/icons.svg#percent",
        choice1: "",
        choice2: "Ваш выбор",
        imgUrl: "img/card01.jpg",
        rating: 4.8,
        grain: 4,
        sour: 5,
        bitter: 9,
        saturated: 6,
        reviews: "(30 отзывов)",
        title: "Kimbo Crema Dolce",
        titleSmall: "Свежеобжаренный кофе - описание товара, вкус, аромат",
        price: "", 
        priceSale: "300 &#8381;"
    },
    {
        imgSale: "img/icons.svg#percent",
        choice1: "",
        choice2: "Скидки",
        imgUrl: "img/card01.jpg",
        rating: 5.0,
        grain: 3,
        sour: 10,
        bitter: 5,
        saturated: 7,
        reviews: "(21 отзыв)",
        title: "Garibaldi Espresso",
        titleSmall: "Свежеобжаренный кофе - описание товара, вкус, аромат",
        price: "340 &#8381;", 
        priceSale: "240 &#8381;"
    },
    {
        imgSale: "img/icons.svg#percent",
        choice1: "",
        choice2: "Ваш выбор",
        imgUrl: "img/card01.jpg",
        rating: 4.8,
        grain: 4,
        sour: 5,
        bitter: 9,
        saturated: 6,
        reviews: "(30 отзывов)",
        title: "Kimbo Crema Dolce",
        titleSmall: "Свежеобжаренный кофе - описание товара, вкус, аромат",
        price: "", 
        priceSale: "300 &#8381;"
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
    cardWrap2.innerHTML = str;
}