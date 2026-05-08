const parms = new URLSearchParams(window.location.search);
const category = parms.get("category");




const getproducts = async (category, sortBy = "title", order = "asc") => {
    const response = await axios.get(`https://dummyjson.com/products/category/${category}?limit=10&sortBy=${sortBy}&order=${order}`);

    const pageTitle = document.querySelector("h1");
    pageTitle.textContent = `${category.toUpperCase()}`;

    const result = response.data.products.map((product) => {
        return `
        <a href="./productdetails.html?id=${product.id}">
                    <div class="card bg-white rounded-none border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group cursor-pointer">
                    <div class="relative overflow-hidden bg-gray-50">
                        <img src="${product.thumbnail}" alt="${product.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div class="card-body p-5">
                        <h2 class="card-title text-lg font-bold text-black uppercase tracking-tight">${product.title}</h2>
                        <div class="flex justify-between items-center mt-2">
                            <span class="text-xl font-extrabold text-black">$${product.price.toFixed(2)}</span>
                            <div class="flex items-center gap-1 text-black">
                                <i class="fa-solid fa-star text-sm"></i>
                                <span class="text-sm font-bold">${product.rating}</span>
                            </div>
                        </div>
                        <div class="card-actions mt-4">
                            <button class="btn w-full bg-black hover:bg-gray-800 text-white border-none rounded-none uppercase tracking-widest text-xs font-bold transition-colors">Add to Cart</button>
                        </div>
                    </div>
                </div>
            </a>
            `;
    }).join("");

    document.querySelector(".products-container").innerHTML = result;
}
const sortby = document.querySelector(".sortby");
sortby.addEventListener("change", (e) => {
    const [sortBy, order] = e.target.value.split("-");
    getproducts(category, sortBy, order);
});

getproducts(category);

