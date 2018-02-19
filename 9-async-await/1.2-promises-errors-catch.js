const fetchProducts = ()=> Promise.reject({data:[1,2,3]});

const getProducts =()=>{
    fetchProducts().then(result=>{
        console.log('result ', result);
    }).catch(err=>{
        console.log('err ', err);
    })
}

getProducts();