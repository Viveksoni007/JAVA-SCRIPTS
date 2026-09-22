
// // // ques 1
// let num1 = 20;
// let num2 = 6;

// console.log("Addition:", num1 + num2);
// console.log("Subtracton:", num1 - num2);
// console.log("Multiplication:", num1 * num2);
// console.log("Division:", num1 / num2);
// console.log("Remainder:", num1 % num2);

// // Ques-2
// let a = 10;
// let b = 20;

// console.log("before Swappng");
// console.log("a =", a);
// console.log("b =", b);

// let temp = a;
// a = b;
// b = temp;

// console.log("After Swapping:");
// console.log("a =", a);
// console.log("b =", b);


// // Ques-3
// let English = 85;
// let Hindi = 90;
// let Maths = 80;

// let total = English + Hindi + Maths;
// let average = (total / 3);
// let percentage = (total / 300) * 100;

// console.log("total marks:", total);
// console.log("Average Marks:", average)
// console.log("Percentage:", percentage +"%");


// // Ques-4
// let ProductPrice = 500;
// let Quantily = 3;

// let originalBill = ProductPrice * Quantily;
// let discount = originalBill * 0.10;

// let finalBill = originalBill - discount;
// console.log("original Bill:", originalBill);
// console.log("Discount Amount:", discount);
// console.log("finalBill:", finalBill);

// // Ques-5
// let length =10;
// let breadth =5;
// let area = length * breadth;
// let perimeter = 2 * (length + breadth);
// console.log("area of rectangle:", area);
// console.log("perimeter of rectangle:",perimeter)

// // Ques-6
// let num = 5;
// if(num %2===0){
//     console.log("the num is even");
// }
// else{
//     console.log("the num is odd")
// }

// // Ques-7
// let num =-5;
// if(num > 0){
//     console.log("the num is positivd:");    
// }
// else if(num < 0) {
//     console.log("the num is negative")
// }
// else{
//     console.log("the num is zero")
// }

// // Ques-8
// let num1 = 20;
// let num2 = 15;
// if(num1> num2){
//     console.log("first number is greater");
// }else if(num2 > num1) {
//     console.log("second number in greater");    
// } else {
//     console.log("both number are equal");
// }

// // Ques-9
// let num1 = 25;
// let num2 = 40;
// let num3 = 15;

// let  largest;
// if(num1 >= num2 && num2 >=num3){
//     largest = num1;
// } else if(num2 >= num3 && num2 >= num1){
//     largest = num2;
// }else {
//     largest = num3;
// }
// console.log("largest number:", largest);


// // Ques-10
// let age =20;
// if (age >=20){
//    console.log("eligible to vote");
// }else{
//     console.log("not eligible to vote")
// }


// // Ques-11
// let age=20;
// let hasLicense= true;
// if(age >=18 && hasLicense){
//     console.log("person can drive");
// }else{
//     console.log("person cannot drive");
// }

// // Ques-12
// let number = 50;

// if (number >= 10 && number <= 100) {
//     console.log("Number is between 10 and 100");
// } else {
//     console.log("Number is not between 10 and 100");
// }

// // Ques-13
// let percentage = 85;

// if (percentage < 0 || percentage > 100) {
//     console.log("Invalid percentage");
// } else if (percentage >= 90) {
//     console.log("Grade A");
// } else if (percentage >= 80) {
//     console.log("Grade B");
// } else if (percentage >= 70) {
//     console.log("Grade C");
// } else if (percentage >= 60) {
//     console.log("Grade D");
// } else if (percentage >= 40) {
//     console.log("Grade E");
// } else {
//     console.log("Grade F");
// }

// // Ques-14
// let marks1 = 80;
// let marks2 = 75;
// let marks3 = 90;

// if (marks1 >= 40 && marks2 >= 40 && marks3 >= 40) {
//     let average = (marks1 + marks2 + marks3) / 3;

//     console.log("Average:", average);

//     if (average >= 75) {
//         console.log("Result: Distinction");
//     } else if (average >= 60) {
//         console.log("Result: First Division");
//     } else if (average >= 50) {
//         console.log("Result: Second Division");
//     } else {
//         console.log("Result: Pass");
//     }
// } else {
//     console.log("Result: Fail");
// }

// // Ques-15
// let units = 250;
// let bill;

// if (units <= 100) {
//     bill = units * 5;
// } else if (units <= 200) {
//     bill = (100 * 5) + ((units - 100) * 7);
// } else {
//     bill = (100 * 5) + (100 * 7) + ((units - 200) * 10);
// }

// console.log("Final Electricity Bill: ₹" + bill);

// // Ques-16
// let username = "admin";
// let password = "12345";

// if (username === "admin" && password === "12345") {
//     console.log("Login successful");
// } else {
//     console.log("Invalid username or password");
// }

// // Ques-17
// let salary = 50000;
// let experience = 6;

// let bonusPercentage;

// if (experience >= 10) {
//     bonusPercentage = 20;
// } else if (experience >= 5) {
//     bonusPercentage = 10;
// } else if (experience >= 2) {
//     bonusPercentage = 5;
// } else {
//     bonusPercentage = 0;
// }

// let bonus = salary * (bonusPercentage / 100);
// let finalSalary = salary + bonus;

// console.log("Original Salary: ₹" + salary);
// console.log("Bonus: ₹" + bonus);
// console.log("Final Salary: ₹" + finalSalary);

// // Ques-18
// let age = 25;

// if (age < 0) {
//     console.log("Invalid age");
// } else if (age <= 12) {
//     console.log("Child");
// } else if (age <= 19) {
//     console.log("Teenager");
// } else if (age <= 59) {
//     console.log("Adult");
// } else {
//     console.log("Senior Citizen");
// // }

// // Ques-19
// let day = 3;

// switch (day) {
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Tuesday");
//         break;
//     case 3:
//         console.log("Wednesday");
//         break;
//     case 4:
//         console.log("Thursday");
//         break;
//     case 5:
//         console.log("Friday");
//         break;
//     case 6:
//         console.log("Saturday");
//         break;
//     case 7:
//         console.log("Sunday");
//         break;
//     default:
//         console.log("Invalid day");
// }

// // Ques-20
// let firstNumber = 20;
// let secondNumber = 5;
// let operator = "*";

// switch (operator) {
//     case "+":
//         console.log(firstNumber + secondNumber);
//         break;

//     case "-":
//         console.log(firstNumber - secondNumber);
//         break;

//     case "*":
//         console.log(firstNumber * secondNumber);
//         break;

//     case "/":
//         console.log(firstNumber / secondNumber);
//         break;

//     case "%":
//         console.log(firstNumber % secondNumber);
//         break;

//     default:
//         console.log("Invalid operator");
// }


// // Ques-21
// let month = 3;

// switch (month) {
//     case 1:
//         console.log("January");
//         break;
//     case 2:
//         console.log("February");
//         break;
//     case 3:
//         console.log("March");
//         break;
//     case 4:
//         console.log("April");
//         break;
//     case 5:
//         console.log("May");
//         break;
//     case 6:
//         console.log("June");
//         break;
//     case 7:
//         console.log("July");
//         break;
//     case 8:
//         console.log("August");
//         break;
//     case 9:
//         console.log("September");
//         break;
//     case 10:
//         console.log("October");
//         break;
//     case 11:
//         console.log("November");
//         break;
//     case 12:
//         console.log("December");
//         break;
//     default:
//         console.log("Invalid month");
// }


// // Ques-22
// let choice = 3;
// let num1 = 20;
// let num2 = 5;

// switch (choice) {
//     case 1:
//         console.log("Addition:", num1 + num2);
//         break;

//     case 2:
//         console.log("Subtraction:", num1 - num2);
//         break;

//     case 3:
//         console.log("Multiplication:", num1 * num2);
//         break;

//     case 4:
//         if (num2 !== 0) {
//             console.log("Division:", num1 / num2);
//         } else {
//             console.log("Cannot divide by zero");
//         }
//         break;

//     case 5:
//         console.log("Modulus:", num1 % num2);
//         break;

//     default:
//         console.log("Invalid choice");
// }

// // Ques-23
// let signal = "green";

// switch (signal) {
//     case "red":
//         console.log("Stop");
//         break;

//     case "yellow":
//         console.log("Wait");
//         break;

//     case "green":
//         console.log("Go");
//         break;

//     default:
//         console.log("Invalid signal");
// }

// // Ques-24
// let balance = 10000;
// let withdrawAmount = 3000;

// if (withdrawAmount <= 0) {
//     console.log("Invalid withdrawal amount");
// } else if (withdrawAmount > balance) {
//     console.log("Insufficient balance");
// } else {
//     balance = balance - withdrawAmount;

//     console.log("Withdrawal successful");
//     console.log("Remaining balance: ₹" + balance);
// }


// // Ques-25
// let age = 25;
// let numberOfTickets = 3;

// let ticketPrice;

// if (age < 12) {
//     ticketPrice = 100;
// } else if (age <= 59) {
//     ticketPrice = 200;
// } else {
//     ticketPrice = 120;
// }

// let totalPrice = ticketPrice * numberOfTickets;

// console.log("Total: ₹" + totalPrice);


// // Ques-26
// let choice = 2;
// let quantity = 3;
// let price;

// switch (choice) {
//     case 1:
//         price = 150; // Burger
//         break;

//     case 2:
//         price = 250; // Pizza
//         break;

//     case 3:
//         price = 180; // Pasta
//         break;

//     case 4:
//         price = 120; // Sandwich
//         break;

//     default:
//         console.log("Invalid choice");
// }

// if (price !== undefined) {
//     let total = price * quantity;
//     console.log("Total: ₹" + total);
// }

// // Ques-27
// let units = 250;
// let originalBill;
// let discount;
// let finalBill;

// // Calculate original bill
// if (units <= 100) {
//     originalBill = units * 5;
// } else if (units <= 200) {
//     originalBill = (100 * 5) + ((units - 100) * 7);
// } else {
//     originalBill = (100 * 5) + (100 * 7) + ((units - 200) * 10);
// }

// // Apply discount
// if (originalBill >= 2000) {
//     discount = originalBill * 0.10;
// } else {
//     discount = 0;
// }

// finalBill = originalBill - discount;

// // Display results
// console.log("Units:", units);
// console.log("Original Bill: ₹" + originalBill);
// console.log("Discount: ₹" + discount);
// console.log("Final Bill: ₹" + finalBill);

// // Ques-28
// let balance = 10000;
// let choice = 3;
// let amount = 3000;

// switch (choice) {
//     case 1:
//         console.log("Current Balance: ₹" + balance);
//         break;

//     case 2:
//         balance = balance + amount;
//         console.log("Deposit successful");
//         console.log("Current Balance: ₹" + balance);
//         break;

//     case 3:
//         if (amount <= 0) {
//             console.log("Invalid withdrawal amount");
//         } else if (amount <= balance) {
//             balance = balance - amount;
//             console.log("Withdrawal successful");
//             console.log("Current Balance: ₹" + balance);
//         } else {
//             console.log("Insufficient balance");
//         }
//         break;

//     case 4:
//         console.log("Thank you! Goodbye.");
//         break;

//     default:
//         console.log("Invalid choice");
// }


// // Ques-29
// let number = 150;

// // Check positive, negative, or zero
// if (number > 0) {
//     console.log("Positive");
// } else if (number < 0) {
//     console.log("Negative");
// } else {
//     console.log("Zero");
// }

// // Check even or odd
// if (number % 2 === 0) {
//     console.log("Even");
// } else {
//     console.log("Odd");
// }

// // Check comparison with 100
// if (number > 100) {
//     console.log("Greater than 100");
// } else if (number < 100) {
//     console.log("Less than 100");
// } else {
//     console.log("Equal to 100");
// }


// // Ques=30

// let studentName = "Rahul";
// let rollNumber = 101;

// let mathMarks = 85;
// let scienceMarks = 78;
// let englishMarks = 92;

// // Calculate total marks
// let totalMarks = mathMarks + scienceMarks + englishMarks;

// // Calculate percentage
// let percentage = (totalMarks / 300) * 100;

// // Calculate grade
// let grade;

// if (percentage >= 90) {
//     grade = "A";
// } else if (percentage >= 80) {
//     grade = "B";
// } else if (percentage >= 70) {
//     grade = "C";
// } else if (percentage >= 60) {
//     grade = "D";
// } else if (percentage >= 40) {
//     grade = "E";
// } else {
//     grade = "F";
// }

// // Check Pass/Fail
// let result;

// if (mathMarks >= 40 && scienceMarks >= 40 && englishMarks >= 40) {
//     result = "PASS";
// } else {
//     result = "FAIL";
// }

// // Display result
// console.log("-------------------------");
// console.log("     STUDENT RESULT");
// console.log("-------------------------");
// console.log("Name        :", studentName);
// console.log("Roll No     :", rollNumber);
// console.log("Math        :", mathMarks);
// console.log("Science     :", scienceMarks);
// console.log("English     :", englishMarks);
// console.log("Total       :", totalMarks);
// console.log("Percentage  :", percentage + "%");
// console.log("Grade       :", grade);
// console.log("Result      :", result);
// console.log("-------------------------");