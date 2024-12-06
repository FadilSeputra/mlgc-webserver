const { Firestore } = require('@google-cloud/firestore');
require('dotenv').config();
const serviceAccount = require("./submissionmlgc-nendaalfadilsep-22490b4daa74.json");

// const credentials = JSON.parse(process.env.GOOGLE_CREDENTIALS);
     
async function storeData(id, data) {

  try {
    const db = new Firestore({
      projectId: serviceAccount.project_id,
      serviceAccount: serviceAccount,
    });
 
    const predictCollection = db.collection('predictions');
    return predictCollection.doc(id).set(data);
  }catch(error) {
    console.error(error);
  }
}
 
module.exports = storeData;
