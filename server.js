const path = require("path")
const express = require("express");
const exphbs = require("express-handlebars")
const session = require("express-session");
const routers = require("./controllers");
const sequelize = require("./config/connection")
const SequelizeStore = require("connect-session-sequelize")(session.Store);

const PORT = process.env.PORT || 3000;
const app = express();


const sess = {
    secret: "placeholder",
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
    db: sequelize
})
}

const hbs = exphbs.create()
app.engine("handlebars", hbs.engine)
app.set("view engine", "handlebars")

app.use(session(sess));

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static(path.join(__dirname, "public")));

app.use(routers)

sequelize.sync({force: false}).then(() => {
    app.listen(process.env.PORT || 3000, '0.0.0.0', () => {
        console.log("Server is running.");
    });;
});