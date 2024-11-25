"use client"
import react from "react";
import Image from "next/image";
import Modal from "./modal";
import { useState } from "react";
const Card=(props)=>{

    const [modal, setModal]=useState(false);
    const [mode,setMode]=useState("");

    return (

        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        
                <Image className="rounded-t-lg max-h-52 p-2 rounded" src={require(`../images/Paw_Print.png`)} alt="" />
           
            <div className="p-5">
                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{props.DogName}</h5>
                </a>
                <b>Origins</b>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{props.Origin}</p>  

                <div className="flex justify-start p-3">
                <a href="" 
                onClick={(e)=>{
                    e.preventDefault();
                    setModal(true);
                    setMode("Edit")
                    //props.handleEdit(props.DogName, props.Origin);

                }}
                className="btn text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Edit</a>
           
           {modal?
           <Modal dog={props.DogName} 
           origin={props.Origin} 
           isOpen={true} 
           onClose={()=> setModal(false)}
           handleEdit={props.handleEdit}
           mode={mode}
           />
           
           :<></>}
           
           
                <a href="" 
                onClick={(e)=>{
                    e.preventDefault();
                    props.handleDelete(props.DogName);
                } } 
                className="btn text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Delete</a>

                </div>  
            </div>
        </div>
        )
}
export default Card;