"use client"
import react from "react";
import { useState } from "react";
const Modal=(props)=>{
    const [origin, setOrigin]=useState(props.origin);
    const [dog, setDog]=useState(props.dog);
    if(!props.isOpen){
        return null;
    }
    return(
    <>
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white rounded-lg  p-6 max-w-md w-full relative">
           <div className=" absolute top-2 left-[46%] text-lg font-bold"> {props.mode} </div>
            <button
                    className="absolute top-2 right-2
                               text-gray-500 hover:text-gray-700"
                    onClick={props.onClose}
                >
                    &#x2715; {/* Close button */}
            </button>

            <form className="bg-white  rounded px-8 pt-6 pb-8 mb-4">
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="dog">
       Dog
      </label>
      {props.mode=="Edit"?
      <input readOnly className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  type="text" value={dog}/>
    :<input  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  type="text" placeholder="Enter Dog Name"
    onChange={e=>{setDog(e.target.value)}}
    />
}
    </div>
    <div className="mb-6">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="origin">
        Origin  
      </label>

      {
        props.mode=="Edit"?
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" type="text" value={origin} onChange={(e)=> setOrigin(e.target.value)}/>
    :<input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Add Origin i.e., Indian, Russian etc" onChange={(e)=> setOrigin(e.target.value)}/>
    


      }
      </div>
    <div className="flex items-center justify-between">
      
      {props.mode=="Edit"?
      <button onClick={()=>{
        props.onClose();
        props.handleEdit(props.dog, origin);
        
        }} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
        Edit
      </button>
      :
      <button onClick={()=>{
        props.onClose();
        props.handleCreate(dog, origin);
        
        }} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
        Add 
      </button>
      
    }
      
    
    </div>
</form>
        </div>

    </div>


    
    </>)
}
export default Modal;