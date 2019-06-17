const mongoConnection = require('../mongo');
const generateWishes = require('./generateWishes');
const fs = require("fs");
const shuffle = require("lodash").shuffle;

class SeedDb {

  perform = async () => {
    await this.seedCollectionFromJson('sponsors');
    await this.seedCollectionFromJson('userDetails');

    const wishes = shuffle(
      generateWishes(50, {wishStatus: 'Granted'})
        .concat(generateWishes(30))
    );

    await this.seedCollection('wishes', wishes);
    process.exit(0);
  };

  // Private below this line ----------

  seedCollection = async (collectionName, records) => {
    const collection = await (await this.db()).collection(collectionName);

    if (await collection.countDocuments() > 0) {
      console.log(`Collection '${collectionName}' not empty! Cannot seed`);
      return;
    }

    await (await this.db()).collection(collectionName).insertMany(records);
    console.log(`Seeded '${collectionName}' successfully`);
  };

  seedCollectionFromJson = async (collectionName) => {
    const filePath = `src/db/seed-db/collections/${collectionName}.json`;
    const records = JSON.parse(fs.readFileSync(filePath));
    await this.seedCollection(collectionName, records);
  };

  db = async () => {
    if (this.mongo) { return this.mongo }
    return this.mongo = await mongoConnection();
  }
}

const seedDb = new SeedDb();
seedDb.perform();