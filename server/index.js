import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import helmet from 'helmet';
import morgan from 'morgan';
//--------------------//
//-- configurations --//
//--------------------//
dotenv.config(); //-- set up env variables
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));  //-- allows cross origin sharing request
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());


import clientRoutes from "./routes/client.js";
import generalRoutes from "./routes/general.js";
import managementRoutes from "./routes/management.js";
import salesRoutes from "./routes/sales.js";
//--------------------//
//------ routes ------//
//--------------------//
app.use("/client", clientRoutes);
app.use("/general", generalRoutes); // for users & dashboard
app.use("/management", managementRoutes);
app.use("/sales", salesRoutes);


// import User from "./models/User.js";
import {
  // dataUser,
  // dataProduct,
  // dataProductStat,
  // dataTransaction,
} from "./data/index.js";  //mock data to be inserted into DB
// import Product from "./models/Product.js";
// import ProductStat from "./models/ProductStat.js";
// import Transaction from "./models/Transaction.js";
//--------------------//
//-- MONGOOSE set up -//
//--------------------//
const PORT = process.env.PORT || 9000;
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));

    /* ONLY ADD DATA ONE TIME */
    // User.insertMany(dataUser); //-- done
    //
    // Product.insertMany(dataProduct);
    // ProductStat.insertMany(dataProductStat); //-- done
    //
    // Transaction.insertMany(dataTransaction); //-- done
    //
    // AffiliateStat.insertMany(dataAffiliateStat);
    // OverallStat.insertMany(dataOverallStat);
  })
  .catch((error) => console.log(`${error} :: did not connect to ${process.env.MONGO_URL}`));

