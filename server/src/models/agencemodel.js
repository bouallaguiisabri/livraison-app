const mongoose = require("mongoose"); 
var agenceSchema = new mongoose.Schema({
    address: {
        type: String,
        required: true,
    },
    nbrLivreur: {
        type: Number,
        required: true,
    },
    nbrMagasin: {
        type: Number,
        required: true,
    },
    region: {
        type: String,
        required: true,
    },

});



module.exports = mongoose.model("Agence", agenceSchema);