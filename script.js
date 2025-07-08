const items = [
  {
    url: "resources/1.jpg",
    name: "Adidas Micropacer",
    price: 17290,
    tg: "https://t.me/YARSHOP_76/13408"
  },
  
  {
    url: "resources/6.jpg",
    name: "Поло Fred Perry",
    price: 3990,
    tg: "https://t.me/YARSHOP_76/13494"
  },
  
  {
    url: "resources/3.jpg",
    name: "Футболки Lonsdale",
    price: 1490,
    tg: "https://t.me/YARSHOP_76/13425"
  },
  {
    url: "resources/4.jpg",
    name: "Поло Stone Island",
    price: 6990,
    tg: "https://t.me/YARSHOP_76/13433"
  },
  {
    url: "resources/5.jpg",
    name: "Nike TN air max",
    price: 12290,
    tg: "https://t.me/YARSHOP_76/13442"
  },
  {
    url: "resources/6.jpg",
    name: "Поло Fred Perry",
    price: 2990,
    tg: "https://t.me/YARSHOP_76/13447"
  },
  {
    url: "resources/13.jpg",
    name: "футболка Weekend",
    price: 2890,
    tg: "https://t.me/YARSHOP_76/13499"
  },
  {
    url: "resources/8.jpg",
    name: "Stone Island",
    price: 25390,
    tg: "https://t.me/YARSHOP_76/13458"
  },
  {
url: "resources/9.jpg",    name: "Adidas Campus",
    price: 8290,
    tg: "https://t.me/YARSHOP_76/13467"
  },
  
  {
url: "resources/11.jpg",    name: "Ремень Stone Island",
    price: 7990 ,
    tg: "https://t.me/YARSHOP_76/13485"
  },
  {
url: "resources/10.jpg",

    name: "Stone Island",
    price: 26290 ,
    tg: "https://t.me/YARSHOP_76/13476"
  },
  {
url: "resources/2.jpg",
    name: "Худи Trasher",
    price: 5290,
    tg: "https://t.me/YARSHOP_76/13416"
  },
  
  {
url: "resources/7.jpg",
    name: "Классический харик",
    price: 3490,
    tg: "https://t.me/YARSHOP_76/13456"
  },
  {
url: "resources/14.jpg",
    name: "Худи Lonsdale",
    price: 2990,
    tg: "https://t.me/YARSHOP_76"
  },
  {
url: "resources/15.jpg",
    name: "C.P. Company",
    price: 21490,
    tg: "https://t.me/YARSHOP_76/13513"
  },
  {
url: "resources/29.jpg",
    name: "Alpha Industries",
    price: 9990,
    tg: "https://t.me/YARSHOP_76/13618"
  },
  {
url: "resources/17.jpg",
    name: "Stone Island",
    price: 16990,
    tg: "https://t.me/YARSHOP_76/13553?single"
  },
  {
url: "resources/22.jpg",
    name: "Palm Angeles",
    price: 16890,
    tg: "https://t.me/YARSHOP_76/13590"
  },
  {
url: "resources/19.jpg",
    name: "Сумка C.P. Company",
    price: 8490,
    tg: "https://t.me/YARSHOP_76/13567"
  },
  {
url: "resources/17.jpg",
    name: "C.P. Company",
    price: 15790,
    tg: "https://t.me/YARSHOP_76/13576"
  },
  {
url: "resources/21.jpg",
    name: "Кроссовки Adidas",
    price: 8490 ,
    tg: "https://t.me/YARSHOP_76/13581"
  },
  {
url: "resources/18.jpg",
    name: "шорты Lonsdale",
    price: 2690,
    tg: "https://t.me/YARSHOP_76/13558"
  },
  {
url: "resources/23.jpg",
    name: "Кроссовки VANS",
    price: 6290,
    tg: "https://t.me/YARSHOP_76/13599"
  },
  {
url: "resources/24.jpg",
    name: "Зип худи Stone Island",
    price: 17890,
    tg: "https://t.me/YARSHOP_76/13544"
  },
  {
url: "resources/25.jpg",
    name: "Кепка Stone Island",
    price: 9490,
    tg: "https://t.me/YARSHOP_76/13535"
  },
  {
url: "resources/26.jpg",
    name: "джинсы Mind Eror",
    price: 3990,
    tg: "https://t.me/YARSHOP_76/13530?single"
  },
  {
url: "resources/27.jpg",
    name: "футболка  BAPE",
    price: 4490,
    tg: "https://t.me/YARSHOP_76/13608"
  },
  {
url: "resources/28.jpg",
    name: "Puma Speedcat OG",
    price: 8490,
    tg: "https://t.me/YARSHOP_76/13613"
  },
  
  {
url: "resources/16.jpg",
    name: "Шорты Stone Island",
    price: 9990,
    tg: "https://t.me/YARSHOP_76/13521"
  },
  {
url: "resources/30.jpg",
    name: "Adidas Bermuda",
    price: 8490,
    tg: "https://t.me/YARSHOP_76/13627"
  }
  
];
	
	
	
	
	
        function generateProducts(containerId, zero, count) {
    const container = document.getElementById(containerId);
    if (!container) {
        console.error("Контейнер не найден!");
        return;
    }

    for (let i = zero; i < Math.min(count, items.length); i++) {
        if (!items[i]) continue; // Пропускаем пустые элементы

        const product = document.createElement('div');
        product.className = 'product-card';
        product.innerHTML = `
            <img src="${items[i].url}" alt="${items[i].name}">
            <h3>${items[i].name}</h3>
            <div class="price">${items[i].price}₽</div>
            <button class="buy-btn" onclick="window.location.href='${items[i].tg}'">Подробнее</button>
        `;
        container.appendChild(product);
    }
}
        function initCarousel(wrapper) {
    const carousel = wrapper.querySelector('.products-grid');
    const btnLeft = wrapper.querySelector('.left');
    const btnRight = wrapper.querySelector('.right');
    const productCard = carousel.querySelector('.product-card');
    
    if (!productCard) return;
    
    const itemWidth = productCard.offsetWidth + 15; // ширина карточки + gap
    const scrollAmount = itemWidth * 3; // Прокручиваем по 3 товара

    btnLeft.addEventListener('click', () => {
        carousel.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    });

    btnRight.addEventListener('click', () => {
        carousel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    });

    const updateButtons = () => {
        btnLeft.style.display = carousel.scrollLeft > 0 ? 'flex' : 'none';
        btnRight.style.display = 
            carousel.scrollLeft < carousel.scrollWidth - carousel.clientWidth - 1 
            ? 'flex' : 'none';
    };

    carousel.addEventListener('scroll', updateButtons);
    window.addEventListener('resize', updateButtons);
    updateButtons();
}

        generateProducts('products1', 0, 10);
        generateProducts('products2', 10, 20);
        generateProducts('products3', 20, 30);

        document.querySelectorAll('.carousel-wrapper').forEach(initCarousel);

        // Запрет масштабирования на мобильных
        document.addEventListener('touchstart', function(event) {
            if (event.touches.length > 1) event.preventDefault();
        }, { passive: false });

        document.addEventListener('gesturestart', function(e) {
            e.preventDefault();
        });