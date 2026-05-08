

const getcategories = async () => {
    const categories = await axios.get("https://dummyjson.com/products/category-list");

    const result = categories.data.map((category) => {
        return `
                <div class="card image-full shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group overflow-hidden">
                    <div>
                        <img src="./assets/img/categories.webp"
                            alt="Footwear" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    </div>
                    <div class="card-body relative p-6">
                        <div class="card-actions justify-start absolute bottom-6 left-6">
                            <a href="products.html?category=${category}" class="btn bg-white hover:bg-gray-200 text-black border-none rounded-none px-6 shadow-sm transition-colors")">${category} ⭢</a>
                        </div>
                    </div>
                </div>

        `
    }).join("");
    document.querySelector(".categories-container").innerHTML = result;
}

getcategories();