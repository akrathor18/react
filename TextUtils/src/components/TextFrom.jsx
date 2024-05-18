import React,{useState} from "react";

function TextFrom() {
    const [text, setText]= useState('enter the text')
    const UpperCase=()=>{
        setText(text.toUpperCase())
    }
    const lowerCasw=()=>{
        setText(text.toLowerCase())
    }

    const removeSpace=()=>{
        setText(text.replaceAll(' ',''))
    }
    
    const handleChange = (event) => {
        setText(event.target.value);
    };
  return (
    <div className="mt-5 container w-full bg-white border border-slate-200 grid grid-cols-6 gap-2 rounded-xl p-2 text-sm">
      <h1 className="text-center text-slate-800 text-xl font-bold col-span-6">
        Enter the Text
      </h1>
      <textarea
        // value={}
        onChange={handleChange}
        className="bg-slate-100 text-slate-600 h-28 placeholder:text-slate-600 placeholder:opacity-50 border border-slate-200 col-span-6 resize-none outline-none rounded-lg p-2 duration-300 focus:border-slate-600"
      ></textarea>
      <button 
      onClick={UpperCase}
      className="fill-slate-600 col-span-1 flex justify-center items-center rounded-lg p-2 duration-300 bg-slate-100 hover:border-slate-600 focus:fill-blue-200 focus:bg-blue-400 border border-slate-200">
        UpperCase
      </button>
      <button 
      onClick={lowerCasw}
      
      className="fill-slate-600 col-span-1 flex justify-center items-center rounded-lg p-2 duration-300 bg-slate-100 hover:border-slate-600 focus:fill-blue-200 focus:bg-blue-400 border border-slate-200">
        Lower case
      </button>
      
      <span className="col-span-1"></span>
      <button 
      onClick={removeSpace}
      className="bg-slate-100 stroke-slate-600 border border-slate-200 col-span-2 flex justify-center rounded-lg p-2 duration-300 hover:border-slate-600 hover:text-white focus:stroke-blue-200 focus:bg-blue-400">
       Remove spaces
      </button><br />
      <div className="">
        <h1>Your Text summary</h1>
        <p>Words: {text.split(" ").length}, Characters: {text.length}</p>
        <p>Time Take To Read: {(text.split(" ").length*0.008)}Minutes  </p><br />
        <h1>Previwe</h1>
        <p>{text}</p>
      </div>
    </div>

  );
}

export default TextFrom;
