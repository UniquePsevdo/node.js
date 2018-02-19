const fetchProducts = ()=> Promise.resolve({data:[1,2,3]});

const getProducts =()=>{
    fetchProducts().then(result=>{
        console.log('result ', result);
    })
}

getProducts();