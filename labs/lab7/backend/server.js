const express = require('express');
const axios = require('axios');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

const app = express();
const PORT = 5001;
const cors = require('cors'); // Import cors
app.use(cors()); // Enable CORS for all routes

// Projects data
const projects = [
    {
        id: 1,
        name: "Effect Size Illustrator",
        author: "Saksham Aggarwal",
        technologies: ["Git", "GitLab", "Jira", "Confluence", "React.js", "JUnit", "Agile", "Scrum", "Vercel"],
        description: [
            "Developed a web-based tool to simplify the interpretation of effect size statistics as part of a 9-member Agile Scrum team.",
            "Utilized React.js and Next.js to create an interactive UI with engaging graphs and formulas.",
            "Managed website deployment using Vercel, ensuring smooth user accessibility.",
            "Performed thorough input validation, resolved bugs, conducted user testing, and implemented JUnit for backend test coverage."
        ]
    },
    {
        id: 2,
        name: "Trello Clone",
        author: "Saksham Aggarwal",
        technologies: ["Git", "GitLab", "SQL", "Spring Boot", "React.js", "Postman", "JUnit"],
        description: [
            "Developed a full-stack clone of the productivity app 'Trello' as part of a 5-member team using Git and GitLab for version control.",
            "Implemented Spring Boot to manage authentication, authorization, and user management.",
            "Built an interactive UI with React.js, allowing users to create and manage boards, lists, and cards.",
            "Designed and maintained a MySQL database to store user data, board details, and task information, ensuring efficient backend operations."
        ]
    }
];

// API route to get all projects
app.get('/api/projects', (req, res) => {
    res.json(projects);
});

// API route to get weather data (using OpenWeatherMap API)
app.get('/api/weather', async (req, res) => {
    const city = 'Halifax'; // You can change this or get it from query parameters

    try {
        const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.OPENWEATHER_API_KEY}`
        );

        console.log("Weather API Response:", response.data); // Debugging

        const { temp, humidity } = response.data.main;
        const description = response.data.weather?.[0]?.description || "No description available";

        // Send the full weather data including the description
        res.json({ city, temperature: temp, humidity, description });
    } catch (error) {
        console.error("Error fetching weather data:", error.response?.data || error.message);
        res.status(500).json({ error: 'Failed to fetch weather data' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
