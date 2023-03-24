const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const port = 3000
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());


app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())
// your code goes here
app.get("/",(req,res)=>{
    res.send("Hello World!")
})

/*app.post("/add",(req,res)=>{
    console.log(req.body)
    const num1=req.body.num1;
    const num2=req.body.num2;
    const operation = "add";

    function calculation(operation,num1,num2){
        if(operation==="add"){
            if(num1>1000000 || num2>1000000){
                return{
                    status:"error",
                    Message:"Overflow"
                }
            } else {
                return {
                    status:"success",
                    Message:"The sum of Two Given Numbers",
                    sum:num1 + num2
                }
            }
        }
    }

    const output=calculation(operation,num1,num2);
    res.json(output);
});
app.post("/sub",(req,res)=>{
    console.log(req.body)
    const num1=req.body.num1;
    const num2=req.body.num2;
    const operation = "sub";

    function calculation(operation,num1,num2){
        if(operation==="sub"){
            if(num1<-1000000 || num2<-1000000){
                return{
                    status:"error",
                    Message:"Underflow"
                }
            } else {
                return {
                    status:"success",
                    Message:"The difference of given two numbers",
                    difference:num1 - num2
                }
            }
        }
    }

    const output=calculation(operation,num1,num2);
    res.json(output);
});
app.post("/multiply",(req,res)=>{
    console.log(req.body)
    const num1=req.body.num1;
    const num2=req.body.num2;
    const operation = "multiply";

    function calculation(operation,num1,num2){
        if(operation==="multiply"){
           if (isNaN(num1) || isNaN(num2)) {
                return { 
                    status: 'error', 
                    message: 'Invalid data types' 
                }
            } else {
                return {
                    status:"success",
                    Message:"The product of given numbers",
                    result:num1 * num2
                }
            }
        }
    }

    const output=calculation(operation,num1,num2);
    res.json(output);
});
app.post("/divide",(req,res)=>{
    console.log(req.body)
    const num1=req.body.num1;
    const num2=req.body.num2;
    const operation = "divide";
    function calculation(operation,num1,num2){
        if(operation==="divide"){
            if(num2===0){
                return{
                    status:"error",
                    Message:"Cannot divide by zero"
                }
            }
                else{
                    return{
                        status:"Success",
                        Message:"the division of Gven Number",
                        result:num1/num2
                    }
                }
            }
        }
    const output=calculation(operation,num1,num2);
    res.json(output);
});*/
// POST request for addition
app.post('/add', (req, res) => {
    const { num1, num2 } = req.body;
  
    // Check for invalid data types
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
      res.send({
        status: 'error',
        message: 'Invalid data types',
      });
      return;
    }
  
    // Check for values less than -1M or result < -1M
    if (num1 < -1000000 || num2 < -1000000 || num1 + num2 < -1000000) {
      res.send({
        status: 'error',
        message: 'Underflow',
      });
      return;
    }
  
    // Check for values above 1M or sum > 1M
    if (num1 > 1000000 || num2 > 1000000 || num1 + num2 > 1000000) {
      res.send({
        status: 'error',
        message: 'Overflow',
      });
      return;
    }
  
    // Calculate the sum and send the response
    res.send({
      status: 'success',
      message: 'The sum of given two numbers',
      sum: num1 + num2,
    });
  });

  // POST request for Subtraction

  app.post('/sub', (req, res) => {
    const { num1, num2 } = req.body;
  
    // Check for invalid data types
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
      res.send({
        status: 'error',
        message: 'Invalid data types',
      });
      return;
    }
  
    // Check for values less than -1M or result < -1M
    if (num1 < -1000000 || num2 < -1000000 || num1 - num2 < -1000000) {
      res.send({
        status: 'error',
        message: 'Underflow',
      });
      return;
    }
  
    // Check for values above 1M or sum > 1M
    if (num1 > 1000000 || num2 > 1000000 || num1 - num2 > 1000000) {
      res.send({
        status: 'error',
        message: 'Overflow',
      });
      return;
    }
  
    // Calculate the sum and send the response
    res.send({
      status: 'success',
      message: 'The sum of given two numbers',
      difference: num1 - num2,
    });
  });
  //// POST request for Multipication
  app.post('/multiply', (req, res) => {
    const { num1, num2 } = req.body;
  
    // Check for invalid data types
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
      res.send({
        status: 'error',
        message: 'Invalid data types',
      });
      return;
    }
  
    // Check for values less than -1M or result < -1M
    if (num1 < -1000000 || num2 < -1000000 || num1 * num2 < -1000000) {
      res.send({
        status: 'error',
        message: 'Underflow',
      });
      return;
    }
  
    // Check for values above 1M or sum > 1M
    if (num1 > 1000000 || num2 > 1000000 || num1 * num2 > 1000000) {
      res.send({
        status: 'error',
        message: 'Overflow',
      });
      return;
    }
  
    // Calculate the result and send the response
  
    res.send({
      status: 'success',
      message: 'The division of given numbers',
      result:num1 * num2
    });
  });
  //divison
app.post('/divide', (req, res) => {
  const { num1, num2 } = req.body;

  // Check for invalid data types
  if (typeof num1 !== 'number' || typeof num2 !== 'number') {
    res.send({
      status: 'error',
      message: 'Invalid data types',
    });
    return;
  }

  // Check for values less than -1M or result < -1M
  if (num1 < -1000000 || num2 < -1000000 || num1 / num2 < -1000000) {
    res.send({
      status: 'error',
      message: 'Underflow',
    });
    return;
  }

  // Check for values above 1M or sum > 1M
  if (num1 > 1000000 || num2 > 1000000 || num1 / num2 > 1000000) {
    res.send({
      status: 'error',
      message: 'Overflow',
    });
    return;
  }

  // Check for division by zero
  if (num2 === 0) {
    res.send({
      status: 'error',
      message: 'Cannot divide by zero',
    });
    return;
  }

  // Calculate the result and send the response

  res.send({
    status: 'success',
    message: 'The division of given numbers',
    result:num1 / num2
  });
});



app.listen(port, () => console.log(`App listening on port ${port}!`))

module.exports = app;