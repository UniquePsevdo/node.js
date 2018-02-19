const fetchProducts = ()=> Promise.resolve({data:[1,2,3]});
const fetchAdditional = (products)=> Promise.resolve({data:[4,5,6]});

const getProducts =()=>{
    return fetchProducts().then(products=>{
        if(products.data.length){
            return fetchAdditional(products.data).then(additionalData=>{
                return additionalData
            })
        }else{
            return products.data
        }
    })
}

getProducts().then(result=>{
    console.log('result ', result);
})