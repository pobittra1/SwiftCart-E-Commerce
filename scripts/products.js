// load products categories
const loadCategories = async () => {
    const url = "https://fakestoreapi.com/products/categories";
    const res = await fetch(url);
    const result = await res.json();
    displayEachCategory(result);
}

// display each category into levels
const displayEachCategory = (categories) => {
    //get the category level container
    const categoriesContainer = document.getElementById("categories-container");
    categoriesContainer.innerHTML = "";

    for (let category of categories) {
        //create category box
        const categoryBox = document.createElement("li");
        categoryBox.innerHTML = `
        <a class="btn btn-outline">${category}</a>

        `
        categoriesContainer.append(categoryBox);
        ;

    }
}
loadCategories();