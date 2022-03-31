import "reflect-metadata";
import express from "express";
import morgan from "morgan";
import cors from "cors";
import { createConnection } from "typeorm";

import userRoutes from "./routes/user.routes";
import loginRoutes from "./routes/login.routes";
import questionRoutes from "./routes/question.routes";
import replyRoutes from "./routes/reply.routes";

const app = express();
createConnection({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "chocyxpr_admin",
    password: "5#vvjR@Ez0.p",
    database: "chocyxpr_jose_carlos",
    entities: ["entity/*.js"],
    synchronize: true,
});
// createConnection();

// middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

// routes
app.use(userRoutes);
app.use(loginRoutes);
app.use(questionRoutes);
app.use(replyRoutes);

app.listen(4000);
console.log('server on port', 4000);