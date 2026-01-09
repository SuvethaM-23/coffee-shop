const coffee = [{
        id: 1,
        name: "Hot Beverages",
        image: "./assets/image/coffee.png",
        price: 15
    }, {
        id: 2,
        name: "Strawberry IceCream",
        image: "./assets/image/strawberry-ice.png",
        price: 85
    }, {
        id: 3,
        name: "Pepperoni-Pizza",
        image: "./assets/image/pepperoni-pizza.png",
        price: 299
    }, {
        id: 4,
        name: "Burger",
        image: "./assets/image/burger.png",
        price: 159
    }, {
        id: 5,
        name: "Crispy & golden texture",
        image: "./assets/image/crispy-french.png",
        price: 98
    }, {
        id: 6,
        name: "Black-Coffee",
        image: "./assets/image/black-coffee.png",
        price: 15
    },
    {
        id: 7,
        name: "Crispy-Chicken",
        image: "./assets/image/crispy-chicken.png",
        price: 15
    },
    // {
    //     id: 8,
    //     name: "Black-Coffee",
    //     image: "./assets/image/black-coffee.png",
    //     price: 15
    // }, {
    //     id: 9,
    //     name: "Black-Coffee",
    //     image: "./assets/image/black-coffee.png",
    //     price: 15
    // }, {
    //     id: 10,
    //     name: "Black-Coffee",
    //     image: "./assets/image/black-coffee.png",
    //     price: 15
    // }, {
    //     id: 11,
    //     name: "Black-Coffee",
    //     image: "./assets/image/black-coffee.png",
    //     price: 15
    // }, {
    //     id: 12,
    //     name: "Black-Coffee",
    //     image: "./assets/image/black-coffee.png",
    //     price: 15
    // },
]
const coffee_list = document.getElementById("coffee-list")
coffee.forEach((coffees) => {
    coffee_list.innerHTML += `<div class="col-6 col-md-4 col-lg-3 mb-5 img-box">
    <img src="${coffees.image}" class="rounded-circle" width="200px" height="200px" >
            <h5>${coffees.name}</h5>
            <p>Price: <b>${coffees.price}</b></p>
</div>`
})

function home() { window.location.href = "./index.html" }