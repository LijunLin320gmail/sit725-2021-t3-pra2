const express = require("express")
const app = express();




function hello (name)
{
    alert("Hi" + name);


}
const addNumber = (n1,n2) => {
    console.log("Theresult is "+ (n1+n2));
    return n1+n2;
}
addNumber(2,3);

app.get("addTwoNumber",(req,res)=>{
    const n1 = req.query.n1;
    const n1 = req.query.n2;

    const result = addNumber(n1,n2);
});






const port = 3030;

app.listen(port, ()=>{
    console.log("App is nopw listening to: "+ port);
});