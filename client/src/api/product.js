import axios from 'axios'
// get all products
export const fetchProduct = async()=>{
    const {data} = await axios.get('http://localhost:5005/api/produit/list');
    return data
}

// post new article


export const postProduct = async(value)=>{
    const addProduct = await axios.post('http://localhost:5005/api/produit/add',{...value})
}


// update article 

export const updateProduct = async(id,value)=>{
    const updatedProduct = await axios.put(`http://localhost:5005/api/produit/update/${id}`,{...value})

}


// get article by id 

export const GetById = async(id)=>{
    const {data} = await axios.get(`http://localhost:5005/api/produit/update/${id}`);
    return data
}

// remove article 

export const DeleteArticle = async(id)=>{

    await axios.delete(`http://localhost:5005/api/produit/remove/${id}`)
}