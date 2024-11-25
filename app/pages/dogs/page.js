"use client"
import Footer from "@/app/components/footer";
import Header from "@/app/components/header";
import Card from "@/app/components/card";
import react from "react"
import Modal from "@/app/components/modal";
import { deleteData, getData, editData ,addData} from "@/app/api/api";


import { useEffect, useState } from "react";
import { split } from "postcss/lib/list";
export default function ListOfDogs(){
    const [data,setData]=useState([]);
    const [modal, setModal]=useState(false);
    useEffect(()=>{
        getData().then((response)=>setData(response.data)); 
    },[]);
  function deleteDog(dog){
        var approve=confirm("Are you sure to delete "+dog);
        if(approve){
            deleteData(dog).then((response)=>{
                var newWindow=window.open();
                setData(response.data);
                setTimeout(()=>{
                    newWindow.close();
                },100);
            });
        }
    }
    function editDog(dog, origin){
        if (origin=="No Origin Found"){
            origin="";
        }
        var originList=origin==""?null:String(origin).split(',');
        editData(dog,originList).then((response)=>{

            var newWindow=window.open();
                setData(response.data);
                setTimeout(()=>{
                    newWindow.close();
                },100);
            
            
        });
        
    }
    function createData(dog, origin){
        var originList=origin==null?[]:String(origin).split(',');
        addData(dog,originList).then((response)=>{
            var newWindow=window.open();
                setData(response.data);
                setTimeout(()=>{
                    newWindow.close();
                },100);
        });


    }

    return (
<>
<Header/>

<div className="mx-auto max-w-2xl mt-5 p-14 lg:text-center">
        <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl  underline lg:text-balance">List of Dogs</p>
       </div>
       <div className="mx-auto max-w-2xl px-14 mt-5 p-2 lg:text-center">
       <a href="" 
                onClick={(e)=>{
                    e.preventDefault();
                    setModal(true);

                }}
                className="btn text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Add new dog</a>
           
           {
           modal?<Modal isOpen={true} onClose={()=> setModal(false)} handleCreate={createData} mode="Create"/>:<></>
           }
           </div>
          
       <div className=" p-10 grid  lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 ">
        {data==null?<div className="text-lg p-2">No Data Found</div>:Object.entries(data).map(([dogs, origin])=>{return(
            <div key={dogs}> 
            <Card DogName={dogs} Origin={origin.length>0?origin.join(', '):"No Origin Found"} handleDelete={deleteDog} handleEdit={editDog} />
            </div>
        )})}
       </div>
<Footer/>
</>
    );
}