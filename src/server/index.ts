import * as express from "express";
import "reflect-metadata";
import { Connection, createConnection } from "typeorm";
import { User } from "./entity/User";

let conn: Connection;
createConnection({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "",
  database: "marubatu",
  entities: [User],
  synchronize: true,
  logging: true,
})
  .then((connection) => {
    // here you can start to work with your entities
    conn = connection;
  })
  .catch((error) => console.log(error));

const app = express();
const port = 3300;

app.get("/", (_, res) => res.send("こんにちは!!!!"));
app.get("/users/:name", (req, res) => res.send(`こんにちは!!!! ${req.params.name}`));
app.get("/name", (req, res) => res.json({ name: `私は ${req.query.hoge}`, params: req.query }));
app.get("/users", async (_, res) => {
  let savedUsers = await conn.manager.find(User);
  console.log("All users from the db: ", savedUsers);
  res.json(savedUsers);
});

app.listen(port, () => console.log(`ポート番号は ${port}だよ`));
