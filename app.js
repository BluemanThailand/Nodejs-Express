const express = require('express');
const debug = require('debug')('app');
const morgan = require('morgan');
const path = require('path');
const products = require("./data/products.json");
const productRouter =express.Router();

const app = express();
const PORT = process.env.PORT;

app.use(morgan('combined'));
app.use(express.static(path.join(__dirname, "/public/")))

app.set("views", "./rec/views");
app.set("view engine", "ejs")

productRouter.route("/").get((req, res) => {
    res.render("products",{
        products,  
});
});

productRouter.route("/:id").get((req, res) => {
    const id = req.params.id;
    res.render("product",{
        product: products[id],
    })
});

app.use("/products", productRouter)

app.get("/", (req,res) =>{

    res.render('index', {username: 'Yuthza55+', customers: ["test1", "test2", "test3"]});

})

app.listen(PORT, () =>{
    debug("Listening on port" + PORT);
})