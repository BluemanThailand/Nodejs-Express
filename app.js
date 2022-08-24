const express = require('express');
const debug = require('debug')('app');
const morgan = require('morgan');
const path = require('path');

const app = express();
const PORT = process.env.PORT;
const productsRouter = require("./src/router/productsRouter");

app.use(morgan('combined'));
app.use(express.static(path.join(__dirname, "/public/")))

app.set("views", "./rec/views");
app.set("view engine", "ejs")


app.use("/products", productsRouter)

app.get("/", (req,res) =>{

    res.render('index', {username: 'Yuthza55+', customers: ["test1", "test2", "test3"]});

})

app.listen(PORT, () =>{
    debug("Listening on port" + PORT);
})