let b=require("./a");
import "./../css/css.css"
import "./../less/index.less"
import "./../sass/css.scss"
import "@babel/polyfill";
import { SlowBuffer } from "buffer";
setTimeout(function(){
    console.log("我执行了")
},1000);
let fns=()=>{
    alert(33)
};
fns()
function *fn(){
    yield 1;
    yield 2;
    return 3
};
let r=new fn();
console.log(r.next())
console.log(r.next())

console.log(b)
console.log("黑啊黑马")
console.log("my name is jak sosos inddfffffffjakfffefff44444 ")

let str="124";
console.log(str.includes("2"))