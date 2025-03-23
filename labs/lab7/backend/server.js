const express = require('express');
const axios = require('axios');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = 5001;
const cors = require('cors'); 
app.use(cors()); 

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


app.get("/api/projects", (req, res) => {
    res.status(200).json(projects);
});

app.get("/api/weather", async (req, res) => {
    const location = "Halifax";

    try {
        const weatherData = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${process.env.OPENWEATHER_API_KEY}`
        );

        console.log("Received Weather Data:", weatherData.data);

        const { temp, humidity } = weatherData.data.main;
        const weatherDescription = weatherData.data.weather?.[0]?.description || "No weather details available";

        res.json({ location, temperature: temp, humidity, description: weatherDescription });
    } catch (err) {
        console.error("Weather API Fetch Error:", err.response?.data || err.message);
        res.status(500).json({ error: "Could not retrieve weather information" });
    }
});

app.listen(PORT, () => {
    console.log(`Server successfully running at http://localhost:${PORT}`);
});
