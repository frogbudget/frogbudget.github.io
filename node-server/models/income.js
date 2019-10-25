var mongoose  = require("mongoose"),

var IncomeSchema = new mongoose.Schema({
    name: String,
    amount: Number,
});

module.exports = mongoose.model("Income", IncomeSchema); 

/*
{
    amount: 2150,
    name: "Vanguard",
}
*/