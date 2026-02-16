// load products categories
const loadCategories = async () => {
    const url = "https://fakestoreapi.com/products/categories";
    const res = await fetch(url);
    const result = await res.json();
    displayEachCategory(result);
}

// display each category into levels
const displayEachCategory = (categories) => {
    console.log(categories);
    //get the category level container
    const categoriesContainer = document.getElementById("categories-container");
    categoriesContainer.innerHTML = "";
    // add all box button
    const allBox = document.createElement("li");
    allBox.innerHTML = `<a class="btn btn-outline">All</a>`;
    categoriesContainer.appendChild(allBox);

    for (let category of categories) {
        console.log(category);
        //create category box
        const categoryBox = document.createElement("li");
        categoryBox.innerHTML = `
        <a class="btn btn-outline" onclick="loadProductsBycategories('${category.replace(/'/g, "\\'")}')">${category}</a>
        `
        // loadProductsByCategory func params generated from gpt. need to understand it.

        //append category box
        categoriesContainer.append(categoryBox);
        ;

    }
}

//fetch categories by default.
loadCategories();

//load products by categories
const loadProductsBycategories = async (category) => {
    const url = `https://fakestoreapi.com/products/category/${category}`;
    console.log(url);
    const res = await fetch(url);
    const result = await res.json();
    displayProductsByCategories(result);
}
/* 
{
    "id": 9,
    "title": "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
    "price": 64,
    "description": "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
    "category": "electronics",
    "image": "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_t.png",
    "rating": {
      "rate": 3.3,
      "count": 203
    }
  },
*/

const displayProductsByCategories = (products) => {
    // get products card container
    const cardsContainer = document.getElementById("cards-container");
    cardsContainer.innerHTML = "";

    products.forEach(product => {
        //create each single card
        const card = document.createElement("div");
        card.classList.add(
            "bg-white",
            "rounded-2xl",
            "overflow-hidden",
            "shadow-md",
            "p-4")

        card.innerHTML = `
         <!-- img -->
                    <div class="overflow-hidden">
                        <img src="${product?.image}" alt="Product"
                            class="w-full h-64 object-cover group-hover:scale-110 transition duration-500">
                    </div>
                    <!-- content -->
                    <div class="p-5 space-y-3">
                        <!-- category and rating -->
                        <div class="flex justify-between text-sm text-gray-500">
                            <span class="capitalize">${product?.category}</span>
                            <span class="text-yellow-500 font-medium">⭐ ${product.rating.rate} (${product.rating.count})</span>
                        </div>

                        <!-- product name -->
                        <h3 class="text-lg font-semibold capitalize hover:text-pink-600 transition">
                            ${product.title}
                        </h3>

                        <!-- price -->
                        <p class="font-bold text-xl">
                            $${product.price}
                        </p>

                        <!-- buttons -->
                        <div class="flex md:flex-col lg:flex-row gap-3 pt-2">
                            <button class="flex-1 border border-gray-300 py-2 rounded-lg text-sm">
                                <i class="fa-regular fa-eye mr-1"></i> Details
                            </button>

                            <button class="flex-1 btn btn-primary py-2">
                                <i class="fa-solid fa-cart-shopping"></i> Add
                            </button>
                        </div>

                     </div>
        `

        cardsContainer.append(card);
    });
}