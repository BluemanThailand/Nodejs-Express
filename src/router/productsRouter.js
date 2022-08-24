const express = require('express');
const productsRouter =express.Router();
const products = require("../data/product.json");

productsRouter.route("/").get((req, res) => {
    res.render("products",{
        products,  
});
});

productsRouter.route("/:id").get((req, res) => {
    const id = req.params.id;
    res.render("product",{
        product: products[id],
    })
});

module.export = productsRouter;