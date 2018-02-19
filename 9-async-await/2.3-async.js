const fetchProducts = ()=> Promise.resolve({data:[1,2,3]});
const fetchAdditional = (products)=> Promise.resolve({data:[4,5,6]});

const getProducts = async ()=>{
    const products = await fetchProducts();
    if(!products.length){
        return products.data
    }
    return await fetchAdditional(products.data)
}

getProducts().then(result=>{
    console.log('result ', result);
})