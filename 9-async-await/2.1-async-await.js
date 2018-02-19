const fetchProducts = () => Promise.resolve({data:[1,2,3]})

const getProducts = async ()=>{
    console.log('result ', await fetchProducts());
}

getProducts();