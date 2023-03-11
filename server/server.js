const express = require('express');
const path = require('path');
const app = express();

app.use(path.resolve(__dirname,"../client/build"));
app.get('/api',(req,res)=>{

    res.json({ message: "Hello from server!" });
})

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
  });
  
app.listen(8080,()=>{
    console.log("Port 8080 Listening")
})