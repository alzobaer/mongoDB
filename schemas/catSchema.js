const { default: mongoose } = require("mongoose");

const catSchema = mongoose.Schema({
        name: String,
        image: String,
        designation: String,
        description: String,
        food: String,
        featured: Boolean
})

module.exports = catSchema;