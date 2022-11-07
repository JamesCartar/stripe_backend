import express from 'express';
import fetch from 'node-fetch';


const app = express();

app.get('/', async (req, res) => {

    try {
        const response = await fetch('https://fakestoreapi.com/products')
        const data = await response.json();
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json({success: false, msg: error.message});
    }

})

app.listen(8000, () => console.log('app is listening on port: 8000'))