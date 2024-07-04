require("dotenv").config();
require("./utils/db");
const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());
const router = require("./routes/auth-route");
const contactrouter = require("./routes/contact-route");
const servicerouter = require("./routes/service-route");
const adminrouter = require("./routes/admin-route");
app.use("/api/auth", router);
app.use("/api", contactrouter);
app.use("/api", servicerouter);
app.use("/api/admin", adminrouter);

const corsOptions = {
  origin: "http://locahost:3000",
  method: "GET,POST,PUT,PATCH,HEAD,DELETE",
  cdedentials: true,
};
app.use(cors(corsOptions));

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`sever is running on this ${PORT}`);
});
