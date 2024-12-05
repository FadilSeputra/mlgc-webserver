const tf = require('@tensorflow/tfjs-node');
const InputError = require('../exception/InputError');
 
async function predictClassification(model, image) {
    try {
        const tensor = tf.node
            .decodeImage(image)
            .resizeNearestNeighbor([224, 224])
            .expandDims()
            .toFloat()
 
        const prediction = model.predict(tensor);
        const score = await prediction.data();
        const confidenceScore = Math.max(...score) * 100;
 
        const label = confidenceScore > 50 ? "Cancer" : "Non-cancer";
 
        let suggestion;
 
        if (label === "Cancer") {
            suggestion =
              "Bersabar, jangan panik. Segera periksakan diri ke dokter untuk mendapatkan penanganan lebih lanjut.";
          } else {
            suggestion =
              "Tetap jaga kesehatan dan pola hidup sehat. Jangan lupa untuk rutin periksa kesehatan.";
          }

          console.log("score: ", score);
          console.log("confidenceScore: ", confidenceScore);
      
          return {
            confidenceScore,
            label,
            suggestion: suggestion,
          };
        } catch (error) {
          throw new InputError(`Terjadi kesalahan dalam melakukan prediksi`);
        }
      }
 
module.exports = predictClassification;