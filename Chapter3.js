// node "Chapter3.js"
// In This Chapter We Are Learning About Conditional Statements 

let score = parseInt(prompt("Enter your score (0-100):"));

if (score >= 80 && score <= 100) {
    console.log("Grade: A");
} else if (score >= 70 && score <= 79) {
    console.log("Grade: B");
} else if (score >= 60 && score <= 69) {
    console.log("Grade: C");
} else if (score >= 50 && score <= 59) {
    console.log("Grade: D");
} else if (score >= 0 && score <= 49) {
    console.log("Grade: F");
} else {
    console.log("Invalid score. Please enter a number between 0 and 100.");
}

    
    
    




