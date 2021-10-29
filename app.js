let express = require("express");
let cors = require("cors");
let logger = require("morgan");
let helmet = require("helmet");

let usersRouter = require("./routes/users");

let app = express();

app.use(logger("dev"));
app.use(cors());
app.use(helmet());
app.use(express.json());

app.use("/users", usersRouter);

const PORT = process.env.PORT || "3000";

app.get("/", (req, res) => {
	res.status(200).send("App Up");
});

app.listen(PORT, () => {
	console.log("listening on port " + PORT);
});
