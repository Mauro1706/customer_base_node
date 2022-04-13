import * as mongoose from "mongoose";

class Database {
  private DB_URL = "mongodb://link-db/dbClient";

  createConnection() {
    mongoose.connect(this.DB_URL)
      .then(() => {
        console.log("Conexão com MongoDB realizada com sucesso!");
      }).catch((erro) => {
        console.log(`Conexão com MongoDB falhou! ${erro}`);
      });
  }
}

export default Database;
