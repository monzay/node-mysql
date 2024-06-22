import express from "express";
const app = express();
import router from "./routers/add.router.js";
import "./confing.js";

console.log(process.env.PORT);
app.use(express.json());
app.use(router);

app.use((req, res, next) => {
  res.status(404).json({ message: "not found" });
});

app.listen(3000);
console.log("hila");
