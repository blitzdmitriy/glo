const searchBtn = document.querySelector('.search-btn')
const searchInput = document.querySelector('.search-box input')
const cardWrapper = document.querySelector('.content-main_list')

const cardArray = [
    {
        id:0,
        title: 'Мишка на севере',
        price: '170 ₽',
        address: 'Великий Устюг',
        date: '31 декабря 2025',
        img: './image/card-img.png'
    },
    {
        id:1,
        title: 'Трюфельные',
        price: '180 ₽',
        address: 'Великий Устюг',
        date: '31 декабря 2025',
        img: './image/card-img.png'
    },
    {
        id:2,
        title: 'Мармелад соленый',
        price: '150 ₽',
        address: 'Великий Устюг',
        date: '31 декабря 2025',
        img: './image/card-img.png'
    },
    {
        id:3,
        title: 'Стрела',
        price: '550 ₽',
        address: 'Великий Устюг',
        date: '31 декабря 2025',
        img: './image/card-img.png'
    },
    {
        id:4,
        title: 'Рафаэль',
        price: '777 ₽',
        address: 'Великий Устюг',
        date: '31 декабря 2025',
        img: './image/card-img.png'
    },
    {
        id:5,
        title: 'Грильяж',
        price: '3 ₽',
        address: 'Великий Устюг',
        date: '31 декабря 2025',
        img: './image/card-img.png'
    }
]

const render = (cardList) => {
    cardWrapper.innerHTML = ''

    cardList.forEach((item) => {
        cardWrapper.insertAdjacentHTML('beforeend', `
            <a href="./product.html" class="content-main_list-item">
                <div class="content-main_list-item--img">
                    <img src="${item.img}" alt="${item.title}">
                </div>

                <h5 class="content-main_list-item--title">${item.title}</h5>
                <strong class="content-main_list-item--price">${item.price}</strong>
                
                <div class="content-main_list-item--desc-box">
                    <span class="content-main_list-item--desc">${item.address}</span>
                    <span class="content-main_list-item--desc">${item.date}</span>
                </div>
            </a>
            `)
    });
}

const filteredArray = (array, value) => {
    return array.filter((item) => {
        return item.title.includes(value) || item.price.includes(value)
     })
}

cardWrapper.style.justifyContent = 'flex-start'
cardWrapper.style.gap = '30px'

render(cardArray)

searchBtn.addEventListener('click', () => {
    render(filteredArray(cardArray, searchInput.value));
})
