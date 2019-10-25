var mongoose  = require("mongoose"),

var ExpenseSchema = new mongoose.Schema({
    name: String,
    monthlyAmount: Number,
    dueDate: Number,
});

module.exports = mongoose.model("Expense", ExpenseSchema); 

/*
{
    Name: "Rent : 1st ",
    monthlyAmount: -1275,
    DueDate: 1
},
*/