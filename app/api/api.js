import axios from "axios";
const baseUrl="https://hutchison.onrender.com/api/Dogs/"
const api=axios.create({
    baseURL: baseUrl,
});
export async function getData() {
    const data=await api.get();
    return await data;

}
export async function deleteData(dog){
    const data=await api.delete(dog);
    return await data; 
}
export async function editData(dog,origin){
    const data=await api.put(`${origin}`,origin,{params:{dog}});
    return await data;
}
export async function addData(dog,origin){
    const data = await api.post(baseUrl,origin,{params:{dog}});
    return await data;
}
