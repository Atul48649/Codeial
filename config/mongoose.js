const mongoose = require('mongoose');
const env = require('./environment');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(`mongodb://localhost/${env.db}`);
  console.log('Connected to Database :: MongoDB');
}