import express from 'express';
import data from './data';
import dotenv from 'dotenv';
import config from './config';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import userRoute from './routes/userRoute';
import productRoute from './routes/productRoute';

const path = require('path');

dotenv.config();

const mongodbUrl = config.MONGODB_URI;
mongoose.connect(mongodbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then( () => {
    console.log('Connected to database ')
}).catch(error => console.log(error.reason));

const app = express();
app.use(bodyParser.json());
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);

app.get("/api/products/:id", (req, res) => {
    const productId = req.params.id;
    const product = data.products.find(x => x._id === productId);
    if (product)
        res.send(product);
    else
        res.status(404).send({ msg: "Product Not Found." });
});

app.get("/api/users", (req, res) => {
    res.send("Users can't be shown 😅");
})

app.get("/api/products", (req, res) => {
    res.send(data.products);
});

// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
    //Set a static folder
    app.use(express.static('frontend/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
    });
}

app.listen(process.env.PORT || 4000, () => { console.log("Server started at http://localhost:4000") });
