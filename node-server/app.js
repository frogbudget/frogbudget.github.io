const 	express 	= require('express');
    	// bodyParser  = require("body-parser"),
    	// mongoose    = require("mongoose"),
    	// flash       = require("connect-flash"),
    	// passport    = require("passport"),
    	// LocalStrategy = require("passport-local"),
    	// methodOverride = require("method-override"),
    	// Campground  = require("./models/campground"),
    	// Comment     = require("./models/comment"),
    	// User        = require("./models/user"),
		// seedDB      = require("./seeds");

const app = express();
const port = 8080;






// ---- SETUP VIEW ENGINE --------------------------------------/ 
// Register ejs as .html.
// app.engine('.html', require('ejs').__express);

// Path to our public directory
// app.use(express.static('public'));
// app.use(express.static(path.join(__dirname, 'public')));
// Without this you would need to supply the extension to res.render() - ex: res.render('users.html').
// app.set('view engine', 'html');


// -------- LOGIC --------------------------------------------

// all youre doing is getting info and displaying it nothing fancy in v1
var Budget = {};
const paychecksPerMonth = 2;
const paycheckAmount = 2150.00;
const paycheckName = "Vanguard";
// Get the paycheck name and amount for each paycheck 
// Maybe a function to generate paychecks 

Budget.payChecks = [];
Budget.allExpenses = [];

Budget.payChecks[0] = {
	name: "1st Paycheck",
	startDate: 1,
	endDate: 15,
	incomeAmount: paycheckAmount,
	incomeName: paycheckName,
	incomeRemaining: paycheckAmount,
	totalMontlyExpenses: 0,
	expenses: [],
}

Budget.payChecks[1] = {
	name: "2nd Paycheck",
	startDate: 16,
	endDate: 31,
	incomeAmount: paycheckAmount,
	incomeName: paycheckName, /*maybe an array on incomes in each paycheck*/
	incomeRemaining: paycheckAmount,
	totalMontlyExpenses: 0,
	expenses: [],
}


// Savings
Budget.allExpenses.push(addExpense("Emergency Fund (San.)", -300.00, -300.00));
Budget.allExpenses.push(addExpense("Regular Savings ( San.)", -25.00, -25.00));
Budget.allExpenses.push(addExpense("Car Fund ( San.)", -50.00, -50.00));
Budget.allExpenses.push(addExpense("House Fund ( San.)", -50.00, -50.00));
Budget.allExpenses.push(addExpense("Travel Fund ( San. )", -25.00, -25.00));
Budget.allExpenses.push(addExpense("Relationships (San. )", -25.00, -25.00));
Budget.allExpenses.push(addExpense("Investing (San.)", -5.00, -5.00));
Budget.allExpenses.push(addExpense("Crypto (Cash App)", -20.00, -20.00));
Budget.allExpenses.push(addExpense("Savings (CU Savings) ", -25.00, -25.00));
// Spending 
Budget.allExpenses.push(addExpense("Spending (CU Checking) ", -150.00, -150.00));
// Bills 
Budget.allExpenses.push(addExpense("Rent : 1st ", -495.00, -780.00, 1));
Budget.allExpenses.push(addExpense("Credit Card: 9th", -94.00, -0.00, 9));
Budget.allExpenses.push(addExpense("Food/Groceries", -60.00, -60.00));
Budget.allExpenses.push(addExpense("Gas ", -40.00, -40.00));
Budget.allExpenses.push(addExpense("X-finity Internet: 24th", -30.00, -0.00, 24));
Budget.allExpenses.push(addExpense("Car Insurance: 7th", -230.00, -0.00, 7));
Budget.allExpenses.push(addExpense("House Supplies/Toiletries", -40.00, -40.00));
Budget.allExpenses.push(addExpense("Haircut (Cash)", -15.00, -15.00));
Budget.allExpenses.push(addExpense("Charity(Khan): 6th ", -5.00, -0.00, 6));
Budget.allExpenses.push(addExpense("Navient :23rd ", -300.00, -0.00, 23));
Budget.allExpenses.push(addExpense("Spotify: 8th", -11.00, -0.00, 8));
Budget.allExpenses.push(addExpense("Pay Mommy", -50.00, -50.00));
Budget.allExpenses.push(addExpense("Pluralsight: 9th", -35.00, -0.00, 9));
Budget.allExpenses.push(addExpense("FrontEnd Masters: 1st", -39.00, -0.00, 1));
Budget.allExpenses.push(addExpense("Books", -26.00, -23.00));
Budget.allExpenses.push(addExpense("Web Dev / Namecheap", -5.00, -5.00));
Budget.allExpenses.push(addExpense("Electric Bill: 1st", -0.00, -70.00, 1));
Budget.allExpenses.push(addExpense("Car Payments: 27th", -0.00, -320.00, 27));
Budget.allExpenses.push(addExpense("Cell Phone : 25th ", -0.00, -55.00, 25));
Budget.allExpenses.push(addExpense("Apple iCloud:15th ", -0.00, -3.00, 15));
Budget.allExpenses.push(addExpense("Amazon: 18th", -0.00, -14.00, 18));



populatePaycheck(Budget.payChecks[0], Budget.allExpenses, "Paycheck1Amount");
populatePaycheck(Budget.payChecks[1], Budget.allExpenses, "Paycheck2Amount");



// ----- Function ---------> 

// Make a fuction for getting paycycles date range 

function populatePaycheck(paycheck, allExpenses, property) {
	for (var i = 0; i < allExpenses.length; i++) {
		if (allExpenses[i][property] < 0) {
			paycheck.expenses.push(allExpenses[i]);
			paycheck.incomeRemaining = paycheck.incomeRemaining + allExpenses[i][property];
			paycheck.totalMontlyExpenses = paycheck.totalMontlyExpenses + allExpenses[i][property];
			//console.log( paycheck.name +" - incomeRemaining: " + paycheck.incomeRemaining.toFixed(2) ); 
			// console.log( allExpenses[i].DueDate ); 
		}
	}
}

function addExpense(name, paycheck1, paycheck2, dueDate) {
	expense = {
		"Name": name,
		"TotalMonthlyAmount": paycheck1 + paycheck2,
		"Paycheck1Amount": paycheck1 || 0,
		"Paycheck2Amount": paycheck2 || 0,
		"DueDate": dueDate || 0,
	}
	return expense;
};


// ----- UI LOGIC ---------> 

// console.log("Expenses:"); 
// console.log(allExpenses); 

console.log("Budget:");
console.log(Budget);
// console.log("Paycheck 1 Expenses:"); 
// console.log(Budget.payChecks[0].expenses); 

// console.log("Paycheck 2 Expenses:"); 
// console.log(Budget.payChecks[1].expenses); 

// console.log("Expenses:"); 
// console.log(Budget.allExpenses);







// -------- LoGIC --------------------------------------------


// ------ APP ROUTES -----------------------------------------

app.get('/budget', (req, res) => {
	res.send(Budget);
});

app.get('/budget/allExpenses', (req, res) => {
	res.send(Budget.allExpenses);
});

app.get('/budget/paychecks', (req, res) => {
	res.send(Budget.payChecks);
});




// ---- LISTEN for Server ---------------------------------------------/ 
app.listen(port, function () {
	console.log("FrogBudget is running on port:" + port + "...");
});
