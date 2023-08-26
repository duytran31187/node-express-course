const express = require('express');
const connectDb = require('./db/connect');
require('dotenv').config();

const ProductModel = require('./models/product')
const start = async () => {
    try {
        await connectDb(process.env.MONGO_URI)
        console.log('sucesss !!!')
        await ProductModel.deleteMany({});
        
        const jsonProducts = require('./products.json');
        await ProductModel.insertMany(jsonProducts);
        process.exit(0);
    } catch (error) {
        console.log(`err ${error}`)
        process.exit(1);
    }
}
start()
