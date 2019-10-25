var mongoose = require("mongoose"); 

//SCHEMA SETUP for Budget Period
var periodSchema = new mongoose.Schema({
    name : String,
    totalIncomes : Number,
    totalExpenses : Number,
    incomes: [
        { 
            type: mongoose.Schema.Types.ObjectId,
            ref: "Income"
        },
    ],
    expenses: [
        { 
            type: mongoose.Schema.Types.ObjectId,
            ref: "Expenses"
        },
    ],
});

module.exports = mongoose.model("Period", periodSchema); 