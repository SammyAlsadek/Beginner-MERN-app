const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");

const userModel = require("./models/users");

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://swalsadek:Hh02vhXmhMFdU9AS@cluster0.cmnfo.mongodb.net/MERN-app?retryWrites=true&w=majority");

app.get("/getUsers", (req, res) => {
    userModel.find({}, (err, result) => {
        if (err) {
            res.json(err);
        }
        else {
            res.json(result);
        }
    });
});

app.post("/createUser", async (req, res) => {
    const user = req.body;
    const newUser = new userModel(user);
    await newUser.save();

    res.json(user);
});

app.listen(3001, () => {
    console.log("server is running")
});
