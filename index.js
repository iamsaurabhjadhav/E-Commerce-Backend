const express = require('express');
const cloudinary = require('cloudinary');
const dbconnect = require('./config/dbconnect');
const app = express()
const dotenv = require('dotenv').config()
const PORT = process.env.PORT || 4000;
const authRouter=require("./routes/authRoutes");
const productRouter = require("./routes/productRoute");
const blogRouter = require("./routes/blogRoutes");
const categoryRouter = require("./routes/prodcategoryRoutes");
const blogcategoryRouter = require("./routes/blogCatRoutes");
const brandRouter = require("./routes/brandRoutes");
const colorRouter = require("./routes/colorRoutes");
const enqRouter = require("./routes/enqRoutes");
const couponRouter = require("./routes/couponRoutes");
const bodyParser = require('body-parser');
const { notFound, errorHandler } = require('./middlewares/errorHandler');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
dbconnect();


app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:false}));
app.use(cookieParser())

app.use("/api/user",authRouter);
app.use("/api/product",productRouter);
app.use("/api/blog",blogRouter);
app.use("/api/category",categoryRouter);
app.use("/api/blogcategory",blogcategoryRouter);
app.use("/api/brand",brandRouter);
app.use("/api/color",colorRouter);

app.use("/api/coupon",couponRouter);
app.use("/api/enquiry",enqRouter);




app.get("/",(req,res) =>{
    console.log('sudhir')
})
app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server running at PORT ${PORT}`);
})