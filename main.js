const categories = document.querySelector('.categories')
const products = document.querySelector('.products')

function getAllCategories(productsList) {
    const mySet = new Set()

    productsList.forEach(element => {
        mySet.add(element.brand.toLowerCase())
    });
    mySet.forEach((element) => {
        console.log(element);
        categories.innerHTML += `
        <div class="card"><div class="categorieImage"><img src="https://logo.clearbit.com/${element}.com" alt="category image not found"></div><p>${element}</p></div>
        ` 
    })
    categories.innerHTML += `
        <div class="card"><div class="categorieImage">+</div><p>add categorie</p></div>
        ` 
    console.log("mySet: ", mySet);
}

function getAllProducts(productsList) {
    productsList.forEach((element) => {
        products.innerHTML += `
        <div class="productCard">
        <img src="${element.images[0]}" alt="not found image">
            <div class="productTitle">
                <div>${element.title}</div>
                <div class="productLike"><img src="./logos/notlike.avif" alt="not found image"></div>
            </div>
            <p>Rating: ${element.rating}</p>
            <p>Price: ${element.price}</p>
        </div>
        `
    })
}

fetch("https://dummyjson.com/products/category/smartphones")
    .then((res) => res.json())
    .then((result) => getAllCategories(result.products))

fetch("https://dummyjson.com/products/category/smartphones")
    .then((res) => res.json())
    .then((result) => getAllProducts(result.products))

