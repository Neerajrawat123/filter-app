const data = [

    {
        id: 1,
        img: "https://m.media-amazon.com/images/I/81nBd8ANlgL._UX500_.jpg",
        name: "addidas",
        price: 2300,
        cat: "shoes"
    }, {
        id: 2,
        img: "https://m.media-amazon.com/images/I/71nUDo8m7eL._AC_UL320_.jpg",
        name: "ADDIDAS",
        price: 1200,
        cat: "shoes"
    }
    , {
        id: 3,
        img: "https://m.media-amazon.com/images/I/71J22Urw-eL._AC_UL320_.jpg",
        name: "Puma",
        price: 13333,
        cat: "shoes"
    }
    , {
        id: 4,
        img: "https://m.media-amazon.com/images/I/61mNWoqg-pL._AC_UL320_.jpg",
        name: "Puma",
        price: 11136,
        cat: "shoes"
    }
    , {
        id: 5,
        img: "https://m.media-amazon.com/images/I/51wZ4g6Z7FL._AC_UL320_.jpg",
        name: "Puma",
        price: 1904,
        cat: "shoes"
    }
    , {
        id: 6,
        img: "https://m.media-amazon.com/images/I/51aYMongilL._AC_UL320_.jpg",
        name: "New balance",
        price: 6444,
        cat: "shoes"
    }
    , {
        id: 7,
        img: "https://m.media-amazon.com/images/I/61YQd1wdQBL._AC_UL320_.jpg",
        name: "Dennis Lingo",
        price: 499,
        cat: "shirts"
    }
    , {
        id: 8,
        img: "https://m.media-amazon.com/images/I/71Bo9OtlEtL._AC_UL320_.jpg",
        name: "Dennis Lingo",
        price: 649,
        cat: "shirts"
    }
    , {
        id: 1,
        img: "https://m.media-amazon.com/images/I/514EZy7m42L._AC_UL320_.jpg",
        name: "Red Tape",
        price: 781,
        cat: "shirts"
    }
    , {
        id: 10,
        img: "https://m.media-amazon.com/images/I/61vx2ZXn-uL._AC_UL320_.jpg",
        name: "Leotude",
        price: 319,
        cat: "t-shirt"
    }
    , {
        id: 11,
        img: "https://m.media-amazon.com/images/I/61VqAPCDgfL._AC_UL320_.jpg",
        name: "Red tape",
        price: 674,
        cat: "t-shirt"
    },
    {

        id: 12,
        img: "https://m.media-amazon.com/images/I/813-kdvyEuL._AC_UL320_.jpg",
        name: "Levi's",
        price: 544,
        cat: "t-shirt"
    }
    , {
        id: 13,
        img: "https://m.media-amazon.com/images/I/51-+XfPL+FL._AC_UL320_.jpg",
        name: "pepe jeans",
        price: 719,
        cat: "jeans"
    }
    , {
        id: 14,
        img: "https://m.media-amazon.com/images/I/61zJX84GmqL._AC_UL320_.jpg",
        name: "pepe jeans",
        price: 1319,
        cat: "jeans"
    }
    , {
        id: 15,
        img: "https://m.media-amazon.com/images/I/81KcVygthZL._AC_UL320_.jpg",
        name: "Urbano Fashion",
        price: 839,
        cat: "jeans"
    }
    , {
        id: 16,
        img: "https://m.media-amazon.com/images/I/71AHGaNUfTL._AC_UL320_.jpg",
        name: "U.S. polo assn",
        price: 1359,
        cat: "jeans"
    }
    , {
        id: 17,
        img: "https://m.media-amazon.com/images/I/71fvEFb67gL._AC_UL320_.jpg",
        name: "pepe jeans",
        price: 1630,
        cat: "jeans"
    }







]

let priceList
const productContainer = document.querySelector(".products-container")
const input = document.querySelector("input")
const rangeInput = document.querySelector(".range")
const priceValue = document.querySelector(".price-value")
console.log(priceValue)


const catogory = document.querySelectorAll(".catogory")

selectedCatagory="all"

const showCards = (filterData) => {

    productContainer.innerHTML =
        filterData.map((product) => 
            // console.log(product)
            `
            <div class="product">
            <img src=${product.img}>
            <span class="product-name">${product.name}</span>
            <span class="product-price">${product.price}</span>
        
            </div>
            `
        ).join("")




}
input.addEventListener("keyup", (e) =>{
    const searchValue= e.target.value.toLowerCase()
    // console.log(searchValue)

    if (searchValue) {
        console.log("sdf")
        showCards(data.filter((product) => product.name.toLowerCase().indexOf(searchValue)!=-1))
        
    } else {
        
    }
})


// productContainer.innerHTML = `
// <img src=${data[i].img}>
//  <span class="product-name">${data[i].name}</span>
//                 <span class="product-price">${data[i].price}</span>


// `
showCards(data)


// window.addEventListener("load", showCards(data))

catogory.forEach(element => {
    element.addEventListener("click", () =>{
        selectedCatagory = element.id.toLowerCase()
        console.log(selectedCatagory)
        document.querySelector(".active").classList.remove("active");
        element.classList.add("active")

        if (selectedCatagory==="all") {
            showCards(data)
            let priceList=data.map((item) => item.price)
            setPrice(...priceList)
            console.log(...priceList)
            
        } else {
            let catogoryData = data.filter((item) => item.cat.toLowerCase().indexOf(selectedCatagory)!=-1)
            let priceList = catogoryData.map((item)=> item.price)
            
            setPrice(...priceList)
            showCards(catogoryData)
        }
        
    })
    
});


const setPrice = (...args) =>{
    let minPrice = Math.min(...args)
    let maxPrice = Math.max(...args)
    rangeInput.min=minPrice
    
    rangeInput.max= maxPrice
    rangeInput.value = maxPrice
    priceValue.textContent = "$" +maxPrice;
    console.log(maxPrice,minPrice)
    
}
window.addEventListener("load", () =>{
    let priceList=data.map((item) => item.price)
    setPrice(...priceList)


})


rangeInput.addEventListener("input",(e)=>{
    priceValue.textContent = "$" + e.target.value;


    showCards(data.filter((item)  => item.price<=e.target.value))
    
})