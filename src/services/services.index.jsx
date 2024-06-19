import axios from "axios";

const baseURL = "http://localhost:3000";

const apiList = {
    "category-get" : "/categories",
    "category-post" : "/categories",
    "category-patch" : "/categories",
    "category-delete" : "/categories",
};


/* categories api */
let getCategoryApi = async (data) => {
    let response = await axios.get("http://localhost:3000/categories");
    return response;
};

let addCategoryApi = async (body) => {
    let response = await axios.post("http://localhost:3000/categories",body );
    return response;
};

let updateCategoryApi = async (id,body) => {
    let response = await axios.patch(`http://localhost:3000/categories/${id}` , body);
    return response;
};

let deleteCategoryApi = async (id) => {
    let response = await axios.delete(`http://localhost:3000/categories/${id}`);
    return response;
};

export {
    getCategoryApi,addCategoryApi,updateCategoryApi,deleteCategoryApi
}