$(document).ready(function() { //чтобы сначала закгрузился документ, а уже в самом конце script

    $('#menu').click(function(){
        $('#header').slideToggle(300);      
        return false;
    });
});

var cardWrap2 = document.getElementById("card-wrap2");
       
        var card = [
        {
            imgUrl: "img/card01.jpg",
            title: "Colombia Supremo",
            titleDescr: "Мытая, натуральная, смесь",
            weight: "250 г.",
            price: "270 &#8381;", 
            sale: "27 &#8381;",
            sum: "243 &#8381;",
            count: 1 
        },
        {
            imgUrl: "img/card01.jpg",
            title: "Colombia Supremo",
            titleDescr: "Мытая, натуральная, смесь",
            weight: "250 г.",
            price: "270 &#8381;", 
            sale: "27 &#8381;",
            sum: "243 &#8381;",
            count: 1  
        },
        ]
        
        var str = "";
        for(let i=0; i<card.length; i++) {
            var item = card[i];
                str += `<div class="basket-line">
                        <svg width="25" height="25"><use xlink:href="img/icons.svg#delete"></use></svg>
                        <div>
                            <a href="card-product.html">
                                <img src="${item.imgUrl}" alt="card">
                            </a>    
                            <div>
                                <a href="card-product.html">
                                    <h6>${item.title}</h6>
                                    <p class="fs-18">${item.titleDescr}</p>
                                    <p class="fs-18">${item.weight}</p>
                                </a>
                            </div>
                        </div>
                        <span>${item.price}</span>
                        <div class="counter">
                            <span class="minus" data-index="${i}" onclick="minus(event)">-</span>
                            <p class="res" data-index="${i}">${item.count}</p>
                            <span class="plus" data-index="${i}" onclick="plus(event)">+</span>
                        </div>
                        <span>${item.sale}</span>
                        <span>${item.sum}</span>
                    </div>`;    
        }
    cardWrap2.innerHTML = str;
    var results = document.getElementsByClassName("res");

    function minus(e){
	    var index = e.currentTarget.dataset.index;
		if(card[index].count <= 1 ){
			return;
        }
        card[index].count--;
		results[index].innerHTML = card[index].count
    }

    function plus(e){
	    var index = e.currentTarget.dataset.index;
	    card[index].count++;
	    results[index].innerHTML = card[index].count
    }
