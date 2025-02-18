import { useState } from "react";
import { Crossicon } from "../icons/Crossicon";
import { Input } from "./Input";
import { Button } from "./Button";

export function CreateContentModal({open , onClose}){
  return  <div>
    {open && <div className="w-screen h-screen bg-slate-500 fixed top-0 left-0 opacity-55 justify-center flex">
             <div className="flex flex-col justify-center">
                <span className="bg-white rounded">
                    <div className=" flex justify-end p-2">
                      <div onClick={onClose} className="cursor-pointer">
                      <Crossicon/>
                      </div>  
                    </div>
                    <div className="p-2">
                        <Input placeholder ={"Title"}/>
                        <Input placeholder = {"Link"}/> 
                    </div>
                    <div className="flex justify-center my-3">
                    <Button variant="primary" text="Submit"/>
                    </div>
                </span>
            </div>
        </div>
    }
  </div>
}