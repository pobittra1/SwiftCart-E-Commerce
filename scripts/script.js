// load products from here
const loadAllProducts = async () => {
    const url = "https://fakestoreapi.com/products";
    const res = await fetch(url);
    const result = await res.json();
    displayAllProducts(result);
}

const displayAllProducts = (data) => {
    //get the cards container elm
    const cardsContainer = document.getElementById("cards-container");
    cardsContainer.innerHTML = "";

    data.forEach(eachCard => {
        /*
          {
    "id": 1,
    "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    "price": 109.95,
    "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
    "rating": {
      "rate": 3.9,
      "count": 120
    }
        */
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
                        <img src="${eachCard?.image}" alt="Product"
                            class="w-full h-64 object-cover group-hover:scale-110 transition duration-500">
                    </div>
                    <!-- content -->
                    <div class="p-5 space-y-3">
                        <!-- category and rating -->
                        <div class="flex justify-between text-sm text-gray-500">
                            <span class="capitalize">${eachCard?.category}</span>
                            <span class="text-yellow-500 font-medium">⭐ ${eachCard.rating.rate} (${eachCard.rating.count})</span>
                        </div>

                        <!-- product name -->
                        <h3 class="text-lg font-semibold capitalize hover:text-pink-600 transition">
                            ${eachCard.title}
                        </h3>

                        <!-- price -->
                        <p class="font-bold text-xl">
                            $${eachCard.price}
                        </p>

                        <!-- buttons -->
                        <div class="flex md:flex-col lg:flex-row gap-3 pt-2">
                            <button class="flex-1 border cursor-pointer border-gray-300 py-2 rounded-lg text-sm" onclick="productDetails('${eachCard.id}')">
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
loadAllProducts();



//load products card details
const productDetails = async (id) => {
    const url = `https://fakestoreapi.com/products/${id}`;
    const res = await fetch(url);
    const result = await res.json();
    console.log(result);
    displayDetailsModal(result);
}

// display details modal
const displayDetailsModal = (product) => {
    //     const modal = document.createElement("dialog");
    //     modal.classList.add("modal");
    //     modal.innerHTML = `
    //   <div class="modal-box">
    //     <h3 class="font-bold">${product.title}</h3>
    //     <p>${product.description}</p>
    //     <button id="closeModal">Close</button>
    //   </div>
    // `;
    //     document.body.appendChild(modal);

    console.log(product);
}