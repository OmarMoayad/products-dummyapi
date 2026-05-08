const parms = new URLSearchParams(window.location.search);
const id = parms.get("id");

const getproduct = async (id) => {
    const response = await axios.get(`https://dummyjson.com/products/${id}`);
    const product = response.data;

    document.querySelector('.product-container').innerHTML = `
            <div class="flex flex-col md:flex-row gap-12">
                <div class="w-full md:w-1/2">
                    <div class="w-full bg-gray-50 h-[400px] sm:h-[500px] border border-gray-100 mb-4 overflow-hidden">
                        <img src="${product.thumbnail}" alt="Classic Sneaker" class="w-full h-full ">
                    </div>
                </div>

                <div class="w-full md:w-1/2 flex flex-col">
                    <h1 class="text-4xl font-extrabold text-black uppercase tracking-tight mb-2">${product.title}</h1>
                    
                    <div class="flex items-center gap-4 mb-6">
                        <span class="text-3xl font-extrabold text-black">$${product.price} </span>
                        <div class="flex items-center gap-1 text-black">
                            <span class="  font-bold  px-2">${product.rating}/5</span>
                        </div>
                    </div>

                    <p class="text-gray-600 mb-8 leading-relaxed">${product.description}</p>



                    <div class="flex flex-col sm:flex-row gap-4 mb-10">
                        <div class="flex items-center border border-black w-full sm:w-32 h-14">
                            <button class="w-10 h-full text-black hover:bg-gray-100 transition-colors flex items-center justify-center"><i class="fa-solid fa-minus"></i></button>
                            <input type="text" value="1" class="w-full h-full text-center text-black font-bold focus:outline-none bg-transparent" readonly >
                            <button class="w-10 h-full text-black hover:bg-gray-100 transition-colors flex items-center justify-center"><i class="fa-solid fa-plus"></i></button>
                        </div>
                        <button class="btn flex-1 h-14 bg-black hover:bg-gray-800 text-white border-none rounded-none uppercase tracking-widest font-bold transition-colors">
                            Add to Cart
                        </button>
                    </div>
                    
                    <button class="btn btn-outline border-black text-black hover:bg-black hover:text-white rounded-none uppercase tracking-widest font-bold h-14 w-full flex items-center justify-center gap-2 mb-8 transition-colors">
                        <i class="fa-regular fa-heart"></i> Add to Wishlist
                    </button>

                    <div class="border-t border-gray-200">
                        <details class="group py-4 border-b border-gray-200 cursor-pointer" open>
                            <summary class="flex justify-between items-center font-bold text-black uppercase tracking-widest text-sm">
                                Product Details
                                <span class="transition group-open:rotate-180">
                                    <i class="fa-solid fa-chevron-down"></i>
                                </span>
                            </summary>
                            <div class="text-gray-600 text-sm mt-4 leading-relaxed pb-2">
                                <ul class="list-disc pl-5 space-y-1">
                                    <li>brand: ${product.brand}</li>
                                    <li>category: ${product.category}</li>
                                    <li>stock: ${product.stock}</li>
                                </ul>
                            </div>
                        </details>
                        <details class="group py-4 border-b border-gray-200 cursor-pointer">
                            <summary class="flex justify-between items-center font-bold text-black uppercase tracking-widest text-sm">
                                Shipping & Returns
                                <span class="transition group-open:rotate-180">
                                    <i class="fa-solid fa-chevron-down"></i>
                                </span>
                            </summary>
                            <div class="text-gray-600 text-sm mt-4 leading-relaxed pb-2">
                                <ul class="list-disc pl-5 space-y-1">
                                    <li>shipping Information: ${product.shippingInformation}</li>
                                    <li>warranty Information: ${product.warrantyInformation}</li>
                                    <li>return Policy: ${product.returnPolicy}</li>
                                    <li>minimum Order Quantity: ${product.minimumOrderQuantity}</li>
                                </ul>
                            </div>
                        </details>
                    </div>

                </div>
            </div>
            
        `;
}

getproduct(id);


