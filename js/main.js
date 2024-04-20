//  start wow 
new WOW().init();
// End wow

// swiper slider
var swiper = new Swiper(".mySwiper", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    loop: true
});


// ======================
// slider explore 
// ======================

var swiper = new Swiper(".myexplore", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        time: 1000
    },
    breakpoints: {
        100: {
            slidesPerView: 1,
            spaceBetween: 50,
        },
        550: {
            slidesPerView: 1,
            spaceBetween: 50,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 50,
        },
        992: {
            slidesPerView: 2,
            spaceBetween: 50,
        },
        1200: {
            slidesPerView: 3,
            spaceBetween: 50,
        },
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});


// ======================
// swiper slider categore
// ======================

var swiper = new Swiper(".mySwiper2 ", {
    slidesPerView: 3,
    spaceBetween: 30,
    breakpoints: {
        100: {
            slidesPerView: 1,
            spaceBetween: 50,
        },
        550: {
            slidesPerView: 1,
            spaceBetween: 50,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 50,
        },
        992: {
            slidesPerView: 2,
            spaceBetween: 50,
        },
        1200: {
            slidesPerView: 3,
            spaceBetween: 50,
        },
    },
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

// ======================
// Icon Shop show and none
// ======================

let iconShop = document.getElementById('icon-shop')
let detailsShop = document.querySelector('.AddToCardHtml')
let Calsen = document.querySelector('.Calsen')

iconShop.addEventListener('click', () => {
    detailsShop.classList.add('show')
})

Calsen.addEventListener('click', () => {
    detailsShop.classList.remove('show')
})






// ======================
//  Get Products Api 
// ======================

var Cardes;
if (localStorage.getItem('CardItem')) {
    Cardes = JSON.parse(localStorage.CardItem);
} else {
    Cardes = [];
}
let arrayData = [];

// ======================
// Add product All Html 
// ======================

let AllList = document.querySelectorAll('.market_combonant_title ul li')
let msCurrentlyCards = document.querySelector('.Add-product-html')
const GetDataHtml = () => {
    AllList.forEach((li) => {
        li.onclick = (e) => {
            msCurrentlyCards.innerHTML = '';
            let getItem = e.target.dataset.names
            arrayData.forEach((itme) => {
                if (itme.category === getItem) {
                    let newprodect = `
                    <div class="Out_box col-lg-6 ">
                    <div class="in_box d-flex p-4 rounded-4 ">
                        <div class="img">
                            <img class="rounded-5"  src="${itme.image}" alt="">
                        </div>
                        <div class="main_text w-100">
                            <div class="title_text w-100 pb-3">
                                <h4 class="fs-4 mb-3 text-white">${itme.title}</h4>
                                <div class="title_text_User d-flex align-items-center ">
                                    <img class="mx-3 rounded-circle" src="upload/images/author.jpg" alt="">
                                    <div class="title_text_User_in_text">
                                        <h6 class="text-white">${itme.account.name}</h6>
                                        <span class="fw-bold">${itme.account.user}</span>
                                    </div>
                                </div>
                            </div>
                            <div class="text_details p-3 position-relative">
                                <div class="text-details_in-text d-flex align-items-center mt-3 justify-content-between">
                                    <div class="text-left lh-lg">
                                        <h6 class="text-white ">Current Bid</h6>
                                        <span class="d-block fs-5 text-white">${itme.AllPrice.priceETH} ETH</span>
                                        <span class="text-white ">($${itme.AllPrice.price})</span>
                                    </div>
                                    <div class="text-left lh-lg">
                                        <h6 class="text-end text-white">Ends In</h6>
                                        <span class="text-end text-white fs-5">${itme.time}</span>
                                        <span class="text-end text-white d-block">(${itme.date})</span>
                                    </div>
                                </div>
                                <div class="view-details-icon pt-5 pb-0 d-flex justify-content-around">
                                    <i class="fa-solid fa-heart text-white fs-3"></i>
                                    <i onclick="ShowDetails(${itme.id})" class="fa-solid fa-eye text-white fs-3"></i>
                                    <i onclick="AddcardData(${itme.id}) , showSweetAlert(${itme.id})" class="fa-solid fa-cart-plus fs-3 text-white"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                    `;
                    msCurrentlyCards.innerHTML += newprodect
                } else if (getItem == 'All') {
                    msCurrentlyCards.innerHTML = '';
                    GetDataHtml()
                }
            })
        }
    })
    arrayData.forEach((itme) => {
        let newprodect = `
            <div class="Out_box col-lg-6 ">
            <div class="in_box d-flex p-4 rounded-4 ">
                <div class="img">
                    <img class="rounded-5"  src="${itme.image}" alt="">
                </div>
                <div class="main_text w-100">
                    <div class="title_text w-100 pb-3">
                        <h4 class="fs-4 mb-3 text-white">${itme.title}</h4>
                        <div class="title_text_User d-flex align-items-center ">
                            <img class="mx-3 rounded-circle" src="upload/images/author.jpg" alt="">
                            <div class="title_text_User_in_text">
                                <h6 class="text-white">${itme.account.name}</h6>
                                <span class="fw-bold">${itme.account.user}</span>
                            </div>
                        </div>
                    </div>
                    <div class="text_details p-3 position-relative">
                        <div class="text-details_in-text d-flex align-items-center mt-3 justify-content-between">
                            <div class="text-left lh-lg">
                                <h6 class="text-white ">Current Bid</h6>
                                <span class="d-block fs-5 text-white">${itme.AllPrice.priceETH} ETH</span>
                                <span class="text-white ">($${itme.AllPrice.price})</span>
                            </div>
                            <div class="text-left lh-lg">
                                <h6 class="text-end text-white">Ends In</h6>
                                <span class="text-end text-white fs-5">${itme.time}</span>
                                <span class="text-end text-white d-block">(${itme.date})</span>
                            </div>
                        </div>
                        <div class="view-details-icon pt-5 pb-0 d-flex justify-content-around">
                            <i class="fa-solid fa-heart text-white fs-3"></i>
                            <i onclick="ShowDetails(${itme.id})" class="fa-solid fa-eye text-white fs-3"></i>
                            <i onclick="AddcardData(${itme.id}) , showSweetAlert(${itme.id})" class="fa-solid fa-cart-plus fs-3 text-white"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            `;
        msCurrentlyCards.innerHTML += newprodect
    })
    // AddcardData()
}



// =============================
// Add product Shop sweet alert 
// =============================

function showSweetAlert(id) {
    console.log(id);
    Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your work has been saved",
        showConfirmButton: false,
        timer: 1500
    });
}



// ======================
// Add product Shop quantity
// ======================


function AddcardData(id) {
    let positionthinproduct = Cardes.findIndex((card) => card.id == id)
    if (Cardes.length <= 0) {
        Cardes.push({
            id: id,
            quantity: 1
        })
    }
    else if (positionthinproduct < 0) {
        Cardes.push({
            id: id,
            quantity: 1
        })
    }
    else {
        Cardes[positionthinproduct].quantity = Cardes[positionthinproduct].quantity + 1;
    }
    AddCardToHtml()
    AddDataMamory()
}

// ======================
// Add product Shop Html 
// ======================

function miunsCard(id) {
    console.log(id);
    let positionthinproduct = Cardes.findIndex((card) => card.id == id)

    if (Cardes.length <= 0) {

    }
    else if (Cardes[positionthinproduct].quantity === 1) {
        Cardes.splice(positionthinproduct, 1)
    }
    else {
        Cardes[positionthinproduct].quantity = Cardes[positionthinproduct].quantity - 1;
    }
    AddCardToHtml()
    AddDataMamory()
}


// ======================
// Remove product shop 
// ======================

const RemoveItme = (id) => {
    let positionthinproduct = Cardes.findIndex((card) => card.id == id)
    Cardes.splice(positionthinproduct, 1)
    AddCardToHtml()
    AddDataMamory()
}


// ======================
// Add product Details localstorage
// ======================

function AddDataMamory() {
    localStorage.setItem('CardItem', JSON.stringify(Cardes));
}


// ======================
// Add product Shop Html 
// ======================

const AddCardToHtml = () => {
    let totalPrice = 0;
    let cardShop = document.querySelector('.card-shop')

    cardShop.innerHTML = "";
    let NumIConShop = 0;

    if (Cardes.length >= 0) {
        Cardes.forEach((card) => {
            NumIConShop += card.quantity
            let positionthinprodect = arrayData.findIndex((item) => item.id === card.id);
            let info = arrayData[positionthinprodect]

            let totalPriceForCard = info.AllPrice.price * card.quantity;
            totalPrice += totalPriceForCard;

            document.querySelector('.count-card-shop').innerHTML = NumIConShop
            let newprodect = `
            <div class="Out_box-shop ">
            <div class="in_box bg-white mb-2 d-flex p-4 rounded-4 ">
                <div class="img">
                    <img class=""  src="upload/images/market-01.jpg" alt="">
                </div>
                <div class="main_text w-100">
                    <div class="title_text w-100">
                        <h4 class="fs-4 mb-3"></h4>
                        <div class="d-flex justify-content-between">
                            <div class="title_text_User d-flex">
                                <div class="title_text_User_in_text">
                                    <h6 class="p-0 m-0">${info.account.name}</h6>
                                    <span class="fw-bold">${info.account.user}</span>
                                </div>
                                
                            </div>
                            <div class="">
                                <span class="m-0 p-0">${info.AllPrice.priceETH} ETH</span>
                                <span class="d-block m-0 p-0 text-end">($${info.AllPrice.price})</span>
                            </div>
                        </div>
                    </div>
                    <div class="text_details d-flex justify-content-between mt-3">
                        <div class="text-details_in-text d-flex justify-content-between">
                            <p class="m-0 p-0 NumIConShop">Price / $${info.AllPrice.price * card.quantity} </p>
                        </div>
                        <div class="view-details-icon pb-0 d-flex justify-content-around">
                            <span onclick="miunsCard(${info.id})" class="count-shop d-flex align-items-center justify-content-center text-white fs-4">-</span>
                            <span class="mx-3 NumIConShop">${card.quantity}</span>
                            <span onclick="AddcardData(${info.id})" class="count-shop d-flex align-items-center justify-content-center text-white fs-4">+</span>
                        </div>
                    </div>
                    <div class="RemoveItme text-end">
                        <i onclick="RemoveItme(${info.id})" class="fa-solid fa-trash-can"></i>
                    <div/>
                </div>
            </div>
        </div>
            `
            document.querySelector('.total-price').innerHTML = totalPrice
            let cardShop = document.querySelectorAll('.card-shop')
            cardShop.forEach((Card)=>{
                Card.innerHTML += newprodect
            })
        })

    }
}



// ======================
// Get Data products Api 
// ======================

let GetDataApi = () => {
    fetch(`js/products.json`)
        .then(Res => Res.json())
        .then((Data) => {
            arrayData = Data;
            GetDataHtml();
            AddCardToHtml()
            AllDataExplore()
            AllAccount()
        });

    if (localStorage.getItem('cardItem')) {
        Cardes = JSON.parse(localStorage.getItem('cardItem'))
        AddCardToHtml()
    }
}
GetDataApi()



// ======================
// location view product cheakout  
// ======================

function ViewProdectss() {
    window.location = '/Cheackout.html'
}

// ======================
// Show Details Product 
// ======================

let detailsProduct = document.querySelector('.details-product')

const ShowDetails = (id) => {
    detailsProduct.classList.add('show')
    let info = arrayData.findIndex((item) => item.id == id);
    let product = arrayData[info]

    let newprodect;
    newprodect = `
    <div class="Details-Card-Html-in h-100 w-100 d-flex align-items-center justify-content-center  flex-column">
                            <div class="mb-2 d-flex p-4 w-100 rounded-4 align-items-center justify-content-between">
                                <div class="img w-50">
                                    <img class="rounded-4 w-100" src="${product.image}" alt="">
                                </div>
                                <div class="main_text w-100 d-flex flex-column align-items-center justify-content-between">
                                    <div class="title_text w-100">
                                        <h4 class="fs-1 mb-3 mx-3 text-white">${product.title}</h4>
                                        <div class="title_text_User-Details d-flex align-items-center ">
                                            <img class="mx-3 rounded-circle" src="upload/images/author.jpg" alt="">
                                            <div class="title_text_User_in_text">
                                                <h6 class="text-white">${product.account.name}</h6>
                                                <span class="fw-bold">${product.account.user}</span>
                                            </div>
                                        </div>

                                        <div class="title_text_User-Details-discretion mx-3 m-3 fs-5 text-white">
                                            <p>${product.discretion}.</p>
                                        </div>

                                        <div class="d-flex ditails-Product-Price justify-content-between mt-5 mb-5 mx-3">
                                            <div class="text-left lh-lg">
                                                <h6 class="text-white ">Current Bid</h6>
                                                <span class="d-block">${product.AllPrice.priceETH} ETH</span>
                                                <span class="text-white ">(${product.AllPrice.price})</span>
                                            </div>
                                            <div class="text-left lh-lg">
                                                <h6 class="text-white ">Current Bid</h6>
                                                <span class="d-block">${product.account.nameUser}</span>
                                                <span class="text-white ">(${product.account.UserAccount})</span>
                                            </div>
                                            <div class="text-left lh-lg">
                                                <h6 class="text-white ">Current Bid</h6>
                                                <span class="d-block">${product.time}</span>
                                                <span class="text-white ">(${product.date})</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        class="d-flex mt-4 align-items-start px-3 w-100 justify-content-center mt-1">
                                        <a href="Items.html"  class="btn btn-AllProduct text-white fw-bold  px-5 mx-5">All Product</a>
                                        <span onclick="AddcardData(${product.id})" class="btn btn-Submit  text-white fw-bold px-5 mx-4">Submit Now</span>
                                    </div>
                                </div>
                            </div>
                        </div>
    `
    document.querySelector('.Details-Card-Html').innerHTML = newprodect
}


// ======================
// remove Show Details Product 
// ======================

let iconCansels = document.querySelectorAll('.icon-cansel i')
iconCansels.forEach((iconCansel) => {
    iconCansel.addEventListener('click', () => {
        detailsProduct.classList.remove('show')
    })
})


// ======================
// Add Loader  
// ======================

let Loaders = document.querySelectorAll('.Loader')

window.addEventListener('load', () => {
    Loaders.forEach((Loader)=>{
        Loader.classList.add('show')
        setTimeout(() => {
            document.body.removeChild(Loader)
        }, 2000);
    })
})

// ======================
// on Csroll NavBar
// ======================

let navbar = document.querySelector('.navbar')
window.onscroll = () => {
    if (scrollY > 500) {
        navbar.classList.add('show')
    } else {
        navbar.classList.remove('show')
    }
}


// ===============================
// Add product On Search explore 
// ===============================

let buttonSearch = document.getElementById('button-search')
let searchInputCategories = document.getElementById('search-input-Categories')
let searchTitle = document.getElementById('search-input-Categories');
let selectCatego = document.getElementById('search-Categories');

function AllDataExplore() {
    arrayData.forEach((itme) => {
        let newprodect = `
        <div class="Out_box col-lg-6 ">
        <div class="in_box d-flex p-4 rounded-4 ">
            <div class="img">
                <img class="rounded-5"  src="${itme.image}" alt="">
            </div>
            <div class="main_text w-100">
                <div class="title_text w-100 pb-3">
                    <h4 class="fs-4 mb-3 text-white">${itme.title}</h4>
                    <div class="title_text_User d-flex align-items-center ">
                        <img class="mx-3 rounded-circle" src="upload/images/author.jpg" alt="">
                        <div class="title_text_User_in_text">
                            <h6 class="text-white">${itme.account.name}</h6>
                            <span class="fw-bold">${itme.account.user}</span>
                        </div>
                    </div>
                </div>
                <div class="text_details p-3 position-relative">
                    <div class="text-details_in-text d-flex align-items-center mt-3 justify-content-between">
                        <div class="text-left lh-lg">
                            <h6 class="text-white ">Current Bid</h6>
                            <span class="d-block fs-5 text-white">${itme.AllPrice.priceETH} ETH</span>
                            <span class="text-white ">($${itme.AllPrice.price})</span>
                        </div>
                        <div class="text-left lh-lg">
                            <h6 class="text-end text-white">Ends In</h6>
                            <span class="text-end text-white fs-5">${itme.time}</span>
                            <span class="text-end text-white d-block">(${itme.date})</span>
                        </div>
                    </div>
                    <div class="view-details-icon pt-5 pb-0 d-flex justify-content-around">
                        <i class="fa-solid fa-heart text-white fs-3"></i>
                        <i onclick="ShowDetails(${itme.id})" class="fa-solid fa-eye text-white fs-3"></i>
                        <i onclick="AddcardData(${itme.id}) , showSweetAlert(${itme.id})" class="fa-solid fa-cart-plus fs-3 text-white"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
        `;
        document.querySelector('.AllDataExplore').innerHTML += newprodect
    })
    buttonSearch.onsubmit = (e) => {
        let AllDataExplore = document.querySelector('.AllDataExplore')
        AllDataExplore.innerHTML = ''
        e.preventDefault()
        arrayData.forEach((product) => {
            if (product.title.includes(searchTitle.value) && selectCatego.value === product.category) {
                let AllDataExplore = document.querySelector('.AllDataExplore')
                let newprodect = `
                    <div class="Out_box col-lg-6 ">
                    <div class="in_box d-flex p-4 rounded-4 ">
                        <div class="img">
                            <img class="rounded-5"  src="${product.image}" alt="">
                        </div>
                        <div class="main_text w-100">
                            <div class="title_text w-100 pb-3">
                                <h4 class="fs-4 mb-3 text-white">${product.title}</h4>
                                <div class="title_text_User d-flex align-items-center ">
                                    <img class="mx-3 rounded-circle" src="upload/images/author.jpg" alt="">
                                    <div class="title_text_User_in_text">
                                        <h6 class="text-white">${product.account.name}</h6>
                                        <span class="fw-bold">${product.account.user}</span>
                                    </div>
                                </div>
                            </div>
                            <div class="text_details p-3 position-relative">
                                <div class="text-details_in-text d-flex align-items-center mt-3 justify-content-between">
                                    <div class="text-left lh-lg">
                                        <h6 class="text-white ">Current Bid</h6>
                                        <span class="d-block fs-5 text-white">${product.AllPrice.priceETH} ETH</span>
                                        <span class="text-white ">($${product.AllPrice.price})</span>
                                    </div>
                                    <div class="text-left lh-lg">
                                        <h6 class="text-end text-white">Ends In</h6>
                                        <span class="text-end text-white fs-5">${product.time}</span>
                                        <span class="text-end text-white d-block">(${product.date})</span>
                                    </div>
                                </div>
                                <div class="view-details-icon pt-5 pb-0 d-flex justify-content-around">
                                    <i class="fa-solid fa-heart text-white fs-3"></i>
                                    <i onclick="ShowDetails(${product.id})" class="fa-solid fa-eye text-white fs-3"></i>
                                    <i onclick="AddcardData(${product.id}) , showSweetAlert(${product.id})" class="fa-solid fa-cart-plus fs-3 text-white"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                    `;
                AllDataExplore.innerHTML += newprodect

            } else if (selectCatego.value == 'All') {
                let AllDataExplore = document.querySelector('.AllDataExplore')
                AllDataExplore.innerHTML = '';
                arrayData.forEach((itme) => {
                    let newprodect = `
                        <div class="Out_box col-lg-6 ">
                        <div class="in_box d-flex p-4 rounded-4 ">
                            <div class="img">
                                <img class="rounded-5"  src="${itme.image}" alt="">
                            </div>
                            <div class="main_text w-100">
                                <div class="title_text w-100 pb-3">
                                    <h4 class="fs-4 mb-3 text-white">${itme.title}</h4>
                                    <div class="title_text_User d-flex align-items-center ">
                                        <img class="mx-3 rounded-circle" src="upload/images/author.jpg" alt="">
                                        <div class="title_text_User_in_text">
                                            <h6 class="text-white">${itme.account.name}</h6>
                                            <span class="fw-bold">${itme.account.user}</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="text_details p-3 position-relative">
                                    <div class="text-details_in-text d-flex align-items-center mt-3 justify-content-between">
                                        <div class="text-left lh-lg">
                                            <h6 class="text-white ">Current Bid</h6>
                                            <span class="d-block fs-5 text-white">${itme.AllPrice.priceETH} ETH</span>
                                            <span class="text-white ">($${itme.AllPrice.price})</span>
                                        </div>
                                        <div class="text-left lh-lg">
                                            <h6 class="text-end text-white">Ends In</h6>
                                            <span class="text-end text-white fs-5">${itme.time}</span>
                                            <span class="text-end text-white d-block">(${itme.date})</span>
                                        </div>
                                    </div>
                                    <div class="view-details-icon pt-5 pb-0 d-flex justify-content-around">
                                        <i class="fa-solid fa-heart text-white fs-3"></i>
                                        <i onclick="ShowDetails(${itme.id})" class="fa-solid fa-eye text-white fs-3"></i>
                                        <i onclick="AddcardData(${itme.id}) , showSweetAlert(${itme.id})" class="fa-solid fa-cart-plus fs-3 text-white"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                        `;
                    AllDataExplore.innerHTML += newprodect
                })
            }
        })
    }
}

// ======================
// Add All Account Html 
// ======================

function AllAccount() {
    arrayData.forEach((Acount) => {
        let NewAccount;
        NewAccount =
        ` 
            <div class="col-lg-3 mt-3 col-md-4 col-sm-6 title_text_User d-flex align-items-center ">
                <img class="mx-3 rounded-circle" src="upload/images/author.jpg" alt="">
                <div class="title_text_User_in_text">
                    <h6 class="text-white">${Acount.account.nameUser}</h6>
                    <span class="fw-bold">${Acount.account.UserAccount}</span>
                </div>
            </div>
        `
        document.querySelector('.Account_Box .box').innerHTML += NewAccount
    })
}










