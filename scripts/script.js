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

    data.forEach(eachdata => {
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
                        <img src="./assets/trending/trending-one.jpg" alt="Product"
                            class="w-full h-64 object-cover group-hover:scale-110 transition duration-500">
                    </div>
                    <!-- content -->
                    <div class="p-5 space-y-3">
                        <!-- category and rating -->
                        <div class="flex justify-between text-sm text-gray-500">
                            <span class="capitalize">Men's Clothing</span>
                            <span class="text-yellow-500 font-medium">⭐ 4.8 (280)</span>
                        </div>

                        <!-- product name -->
                        <h3 class="text-lg font-semibold capitalize hover:text-pink-600 transition">
                            Mens Casual Drop Tshirt
                        </h3>

                        <!-- price -->
                        <p class="font-bold text-xl">
                            $25.10
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
loadAllProducts();