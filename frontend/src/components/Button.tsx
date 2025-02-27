import { ReactElement } from "react";

 interface ButtonProps{
   variant:"primary"| "secondary";
   text:string;
   startIcon?: ReactElement;
   onClick?: ()=> void;
 }
 const variantClasses = {
   "primary" :"bg-blue-600 text-white",
   "secondary":"bg-blue-200 text-blue-400",
   
 };

 const defaultStyles = "px-4 py-2 rounded-md font-light flex justify-center items-center"

 export function Button({variant , text , startIcon, onClick}:ButtonProps){
    return <button onClick={onClick} className={variantClasses[variant] + " " + defaultStyles }> 
    <div className="pr-2">
    {startIcon}
    </div>
    {text} </button>
 }