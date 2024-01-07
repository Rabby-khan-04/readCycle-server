import mongoose from "mongoose";
import app from ".";
import config from "./app/config";

async function main() {
  await mongoose.connect(config.database_url as string);
  app.listen(config.port, () => {
    console.log(`ReadCycle app is running on port ${config.port}`);
  });
}

main();
