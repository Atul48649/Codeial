const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost/codeial_development');
  console.log('Connected to Database :: MongoDB');
}