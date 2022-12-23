const express = require("express")
const app = express()
const hbs = require("express-handlebars")
const path = require("path")
const port = 3000

app.engine(
    "hbs",
    hbs.engine({
        extname: "hbs",
    })
)
app.set("view engine", "hbs")
app.set("views", path.join(__dirname, "resources/views"))

app.get("/", function(req, res) {
    res.render("home")
})

//Static file
app.use(express.static("src"))

//

app.listen(port, () => {
    console.log(`
            Example app listening on http://localhost:${port}
            `)
})