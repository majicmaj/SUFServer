const express = require("express");
const parser = require("body-parser");
const app = express();
const passport = require("./config/passport")()
const userRouter = require("./routes/user")


app.use(passport.initialize())
app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));

app.use("/", require('./routes/listing'))
app.use("/user", userRouter)
app.set("port", process.env.PORT || 3131);

app.listen(app.get("port"), () => {
  console.log(`✅ PORT: ${app.get("port")} 🌟`);
});

// heroku config:set DB_URL="mongodb+srv://admin:buckeye92@cluster0-kvyre.mongodb.net/test?retryWrites=true&w=majority"