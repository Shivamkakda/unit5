import "./index.css";

import Logo from "./images/ss.jpg"

import Data from "./component.js";

import React from "react";
import ReactDom from "react-dom";
function add(a,b){
    return a+b;
}
console.log(add(3,4))

let getRoot = document.querySelector("#root");
getRoot.innerHTML = Data;


let logo = document.getElementById("logo");
logo.src = Logo;
logo.classList.add("imgs")

const h1 = document.createElement("h1");
h1.innerText = "Hii My Name is Shivam Sharma";

h1.classList.add("text1");
const p = document.createElement("p");
p.innerText = "My name is Shivam Shrama, I am From Ghaziabad Uttar Pardesh. I have done MCA From RD Engineering college Duhai. Now I am persuing Full Stack Web Devlopment Course from Masai School"
p.classList.add("text2")
getRoot.append(logo,h1,p)

 ReactDom.render(
    //React.createElement("h1", {className : "text1"} , "hwllo world"),
    <h1 className="text1"> hello World</h1>,
    document.getElementById("root") //where
)



