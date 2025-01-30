const express = require("express");
const app = express();
const cors = require("cors");


app.use(cors());

app.get(
    "/", (req, res)=>{
        const currentISODate = new Date().toISOString();
        const email = "goodnews.adewole9@gmail.com";
        const github = "https://github.com/Greatseun02/hng-stage-0-backend";

        const data = {
            "email":email,
            "current_datetime": currentISODate,
            "github_url": github
        }

        res.status(200).json(
            data
        )
    }
)


app.listen(process.env.PORT || 3000, ()=>{console.log("Server Started")})
