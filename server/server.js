const express = require("express");
const app= express();

require("./config/mongoose.config");

app.use(express.json(),express.urlencoded({extended:true}));

const AllMyJokeRoutes = require("./routes/jokes.routes");
AllMyJokeRoutes(app);

const port = 8000;
app.listen( port, () => console.log(`Listening on port: ${port}`) );
