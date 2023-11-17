const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

var data;

app.post('/sensorval', async(req, res) => {         //for usage with client side

    console.log(req.body);
    data=req.body;
    res.json(req.body);
  });

  app.get("/getval", async (req, res) => {
    try {

      res.json(data);
      console.log(data);
      
    } catch (err) {
      console.log(err.message);
    }
  });



app.listen(5000,() => {   //on localhost
    console.log(`Server is running on port${5000}`);
  });
