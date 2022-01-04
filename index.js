import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

import discountRoutes from "./routes/discount.js";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
const CONNECTION_URL = "mongodb+srv://chayanchawra:Redmi%401903@cluster0.goxip.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

app.use("/discount", discountRoutes);

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => { app.listen(PORT, () => console.log(`Sever running on http://localhost:${PORT}`)) })
    .catch((error) => { console.log(error.message) });
