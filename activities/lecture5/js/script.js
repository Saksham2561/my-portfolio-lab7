// Let's create an array of possible answers
// try example with let first, then switch to const
const answers = [
	"It is certain.",
	"It is decidedly so.",
	"Without a doubt.",
	"Yes - definitely.",
	"You may rely on it.",
	"As I see it, yes.",
	// you can add more answer options
];
// 
const fortuneCookieSayings = [
    "Do not be afraid of competition.",
    "An exciting opportunity lies ahead of you.",
    "You love peace.",
    "Get your mind set…confidence will lead you on.",
    "You will always be surrounded by true friends.",
    "Sell your ideas-they have exceptional merit.",
    "You should be able to undertake and complete anything.",
    "You are kind and friendly.",
    "You are wise beyond your years.",
    "A closed mouth gathers no feet.",
    "He who throws dirt is losing ground.",
    "Borrow money from a pessimist. They don't expect it back."
];

// Create a function to fetch the question the user has asked
// Our function should also check from an empty value 
function askQuestion() {
    const userQuestion = document.getElementById('userQuestion').value;
    if (userQuestion === '') {
        alert('Please enter a question.');
        return; 
    }

    // Randomly decide whether to use Magic 8-Ball or Fortune Cookie sayings
    const useMagic8Ball = Math.random() < 0.5; // 50% chance for either

    let answer;
    if (useMagic8Ball) {
        // Pick a random Magic 8-Ball answer
        const randomIndex = Math.floor(Math.random() * answers.length);
        answer = `The Magic 8-Ball says: ${answers[randomIndex]}`;
    } else {
        // Pick a random Fortune Cookie saying
        const randomIndex = Math.floor(Math.random() * fortuneCookieSayings.length);
        answer = `The Fortune Cookie says: ${fortuneCookieSayings[randomIndex]}`;
    }

    // Display the question and answer on our page
    document.getElementById('answer').textContent = `You asked: "${userQuestion}"; ${answer}`;

    // Log the question and answer to the console
    console.log(`Question: ${userQuestion}`);
    console.log(`Answer: ${answer}`);
}
