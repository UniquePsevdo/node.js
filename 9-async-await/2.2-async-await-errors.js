const fetchProducts = () => Promise.reject({data:[1,2,3]})

const getProducts = async ()=>{
    try{
        const products = await fetchProducts();
    }catch(err){
        console.log('err ', err);
    }
}

getProducts();