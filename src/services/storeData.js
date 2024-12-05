const { Firestore } = require('@google-cloud/firestore');
require('dotenv').config();

const credentials = JSON.parse(process.env.GOOGLE_CREDENTIALS);
     
async function storeData(id, data) {

  try {
    const db = new Firestore({
      projectId: credentials.project_id,
      credentials: credentials,
    });
 
    const predictCollection = db.collection('predictions');
    return predictCollection.doc(id).set(data);
  }catch(error) {
    console.error(error);
  }
}
 
module.exports = storeData;