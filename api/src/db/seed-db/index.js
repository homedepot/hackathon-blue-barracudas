const mongoConnection = require('../mongo');
const fs = require("fs");

class SeedDb {

  perform = async () => {
    await this.seedCollection('wishes');
    await this.seedCollection('sponsors');
    await this.seedCollection('userDetails');
    process.exit(0);
  }

  // Private below this line ----------

  seedCollection = async (collectionName) => {
    const collection = await (await this.db()).collection(collectionName);

    if (await collection.countDocuments() > 0) {
      console.log(`Collection '${collectionName}' not empty! Cannot seed`);
      return;
    }
    const filePath = `src/db/seed-db/collections/${collectionName}.json`
    const records = JSON.parse(fs.readFileSync(filePath));
    await (await this.db()).collection(collectionName).insertMany(records);
    console.log(`Seeded '${collectionName}' successfully`);
  }

  db = async () => {
    if (this.mongo) { return this.mongo }
    return this.mongo = await mongoConnection();
  }
}

const seedDb = new SeedDb();
seedDb.perform();