// Assessment Data
const assessmentData = {
    questions: [
        {
            text: "When working on a project, you prefer to:",
            options: [
                { text: "Follow detailed instructions", traits: { structure: 2 } },
                { text: "Collaborate with a team", traits: { teamwork: 2 } },
                { text: "Solve complex problems", traits: { analysis: 2 } },
                { text: "Create something new", traits: { creativity: 2 } }
            ]
        },
        {
            text: "Your ideal work environment is:",
            options: [
                { text: "Structured and predictable", traits: { structure: 2 } },
                { text: "Dynamic and social", traits: { teamwork: 2 } },
                { text: "Quiet and focused", traits: { analysis: 2 } },
                { text: "Flexible and unconventional", traits: { creativity: 2 } }
            ]
        },
        {
            text: "How do you handle deadlines?",
            options: [
                { text: "Plan and organize in advance", traits: { structure: 2 } },
                { text: "Work with others to meet the deadline", traits: { teamwork: 2 } },
                { text: "Analyze the task and prioritize", traits: { analysis: 2 } },
                { text: "Think creatively to find solutions", traits: { creativity: 2 } }
            ]
        },
        {
            text: "What do you enjoy most?",
            options: [
                { text: "Following a routine", traits: { structure: 2 } },
                { text: "Working in a group", traits: { teamwork: 2 } },
                { text: "Solving puzzles or problems", traits: { analysis: 2 } },
                { text: "Designing or inventing something", traits: { creativity: 2 } }
            ]
        },
        {
            text: "How do you approach learning new skills?",
            options: [
                { text: "Follow a step-by-step guide", traits: { structure: 2 } },
                { text: "Learn with a study group", traits: { teamwork: 2 } },
                { text: "Research and analyze deeply", traits: { analysis: 2 } },
                { text: "Experiment and explore", traits: { creativity: 2 } }
            ]
        },
        {
            text: "What motivates you the most?",
            options: [
                { text: "Achieving clear goals", traits: { structure: 2 } },
                { text: "Working with others towards a common goal", traits: { teamwork: 2 } },
                { text: "Solving challenging problems", traits: { analysis: 2 } },
                { text: "Expressing your creativity", traits: { creativity: 2 } }
            ]
        },
        {
            text: "How do you make decisions?",
            options: [
                { text: "Follow a logical process", traits: { structure: 2 } },
                { text: "Discuss with others and reach a consensus", traits: { teamwork: 2 } },
                { text: "Analyze all possible outcomes", traits: { analysis: 2 } },
                { text: "Go with your intuition", traits: { creativity: 2 } }
            ]
        },
        {
            text: "What is your preferred way to communicate?",
            options: [
                { text: "Written reports and emails", traits: { structure: 2 } },
                { text: "Face-to-face meetings", traits: { teamwork: 2 } },
                { text: "Data-driven presentations", traits: { analysis: 2 } },
                { text: "Visual storytelling", traits: { creativity: 2 } }
            ]
        },
        {
            text: "What type of tasks do you enjoy the most?",
            options: [
                { text: "Organizing and planning", traits: { structure: 2 } },
                { text: "Collaborating with others", traits: { teamwork: 2 } },
                { text: "Analyzing data", traits: { analysis: 2 } },
                { text: "Designing and creating", traits: { creativity: 2 } }
            ]
        },
        {
            text: "How do you handle failure?",
            options: [
                { text: "Learn from it and improve your process", traits: { structure: 2 } },
                { text: "Seek support from others", traits: { teamwork: 2 } },
                { text: "Analyze what went wrong", traits: { analysis: 2 } },
                { text: "Use it as inspiration to try something new", traits: { creativity: 2 } }
            ]
        },
        {
            text: "What is your approach to problem-solving?",
            options: [
                { text: "Follow a systematic method", traits: { structure: 2 } },
                { text: "Brainstorm with others", traits: { teamwork: 2 } },
                { text: "Break the problem into smaller parts", traits: { analysis: 2 } },
                { text: "Think outside the box", traits: { creativity: 2 } }
            ]
        },
        {
            text: "What is your preferred role in a team?",
            options: [
                { text: "Organizer and planner", traits: { structure: 2 } },
                { text: "Team player and collaborator", traits: { teamwork: 2 } },
                { text: "Problem solver and analyst", traits: { analysis: 2 } },
                { text: "Innovator and creator", traits: { creativity: 2 } }
            ]
        },
        {
            text: "What type of projects do you enjoy?",
            options: [
                { text: "Structured and well-defined", traits: { structure: 2 } },
                { text: "Team-based and collaborative", traits: { teamwork: 2 } },
                { text: "Data-driven and analytical", traits: { analysis: 2 } },
                { text: "Creative and open-ended", traits: { creativity: 2 } }
            ]
        },
        {
            text: "How do you prefer to learn new things?",
            options: [
                { text: "Through structured courses", traits: { structure: 2 } },
                { text: "By working with others", traits: { teamwork: 2 } },
                { text: "By researching and analyzing", traits: { analysis: 2 } },
                { text: "By experimenting and exploring", traits: { creativity: 2 } }
            ]
        },
        {
            text: "What is your preferred work style?",
            options: [
                { text: "Structured and organized", traits: { structure: 2 } },
                { text: "Collaborative and social", traits: { teamwork: 2 } },
                { text: "Independent and focused", traits: { analysis: 2 } },
                { text: "Flexible and creative", traits: { creativity: 2 } }
            ]
        },
        {
            text: "What is your approach to challenges?",
            options: [
                { text: "Plan and execute systematically", traits: { structure: 2 } },
                { text: "Seek help and collaborate", traits: { teamwork: 2 } },
                { text: "Analyze and find solutions", traits: { analysis: 2 } },
                { text: "Think creatively and innovate", traits: { creativity: 2 } }
            ]
        },
        {
            text: "What is your preferred way to present ideas?",
            options: [
                { text: "Through structured reports", traits: { structure: 2 } },
                { text: "Through group discussions", traits: { teamwork: 2 } },
                { text: "Through data and charts", traits: { analysis: 2 } },
                { text: "Through visual and creative presentations", traits: { creativity: 2 } }
            ]
        },
        {
            text: "What is your preferred type of work?",
            options: [
                { text: "Routine and predictable", traits: { structure: 2 } },
                { text: "Team-based and collaborative", traits: { teamwork: 2 } },
                { text: "Analytical and problem-solving", traits: { analysis: 2 } },
                { text: "Creative and innovative", traits: { creativity: 2 } }
            ]
        },
        {
            text: "What is your approach to teamwork?",
            options: [
                { text: "Organize and delegate tasks", traits: { structure: 2 } },
                { text: "Collaborate and communicate", traits: { teamwork: 2 } },
                { text: "Analyze and optimize processes", traits: { analysis: 2 } },
                { text: "Brainstorm and innovate", traits: { creativity: 2 } }
            ]
        },
        {
            text: "What is your preferred way to achieve goals?",
            options: [
                { text: "Follow a clear plan", traits: { structure: 2 } },
                { text: "Work with others", traits: { teamwork: 2 } },
                { text: "Analyze and strategize", traits: { analysis: 2 } },
                { text: "Think creatively and adapt", traits: { creativity: 2 } }
            ]
        }
    ],
    careers: [
        {
            name: "Software Developer",
            traits: { analysis: 4, creativity: 3, problemSolving: 4 },
            description: "Design and develop computer systems and applications.",
            roadmap: [
                "Master core programming concepts",
                "Learn cloud computing basics",
                "Develop full-stack projects",
                "Obtain AWS/Azure certification",
                "Contribute to open-source projects"
            ]
        },
        {
            name: "Graphic Designer",
            traits: { creativity: 4, communication: 3 },
            description: "Create visual concepts to communicate ideas."
        },
        {
            name: "Project Manager",
            traits: { structure: 4, teamwork: 3, leadership: 4 },
            description: "Plan and oversee projects to achieve goals."
        },
        {
            name: "Data Analyst",
            traits: { analysis: 4, problemSolving: 3, criticalThinking: 4 },
            description: "Interpret complex data sets to find patterns."
        },
        {
            name: "Teacher",
            traits: { teamwork: 3, communication: 4, empathy: 3 },
            description: "Educate and inspire students."
        },
        {
            name: "Marketing Manager",
            traits: { creativity: 3, communication: 4, leadership: 3 },
            description: "Plan and execute marketing strategies."
        },
        {
            name: "Civil Engineer",
            traits: { structure: 3, analysis: 4, problemSolving: 4 },
            description: "Design and oversee construction projects."
        },
        {
            name: "Accountant",
            traits: { structure: 4, analysis: 3, attentionToDetail: 4 },
            description: "Manage financial records and reports."
        },
        {
            name: "Entrepreneur",
            traits: { creativity: 4, leadership: 3, adaptability: 4 },
            description: "Start and manage new business ventures."
        },
        {
            name: "HR Manager",
            traits: { teamwork: 4, communication: 3, empathy: 4 },
            description: "Manage recruitment and employee relations."
        }
    ]
};
// Initialize scores
let scores = {
    structure: 0,
    teamwork: 0,
    analysis: 0,
    creativity: 0,
    communication: 0,
    leadership: 0,
    problemSolving: 0,
    criticalThinking: 0,
    empathy: 0,
    adaptability: 0
};

let currentQuestionIndex = 0;

// Display the current question
function displayQuestion() {
    if (currentQuestionIndex >= assessmentData.questions.length) {
        showResults();
        return;
    }

    const question = assessmentData.questions[currentQuestionIndex];
    document.getElementById('question-text').textContent = question.text;
    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';

    question.options.forEach((option, index) => {
        const optionElement = document.createElement('label');
        optionElement.className = 'option-btn';
        optionElement.innerHTML = `
            <input type="radio" name="question" value="${index}" onchange="handleAnswer(${index})">
            ${option.text}
        `;
        optionsContainer.appendChild(optionElement);
    });

    // Update progress bar
    const progress = ((currentQuestionIndex + 1) / assessmentData.questions.length) * 100;
    document.querySelector('.progress').style.width = `${progress}%`;
}

// Handle user's answer
function handleAnswer(optionIndex) {
    const question = assessmentData.questions[currentQuestionIndex];
    const traits = question.options[optionIndex].traits;

    Object.keys(traits).forEach(trait => {
        scores[trait] += traits[trait];
    });

    currentQuestionIndex++;
    displayQuestion();
}

// Show results and recommend careers
function showResults() {
    document.getElementById('question-container').classList.add('hidden');
    document.getElementById('result-container').classList.remove('hidden');

    const careerMatches = document.getElementById('career-matches');
    careerMatches.innerHTML = '';

    const recommendedCareers = recommendCareers(scores, assessmentData.careers);
    recommendedCareers.forEach(career => {
        const careerElement = document.createElement('div');
        careerElement.className = 'career-card';
        careerElement.innerHTML = `
            <h3>${career.name}</h3>
            <p>${career.description}</p>
            <p><strong>Career Fit Score:</strong> ${career.matchScore.toFixed(2)}%</p>
        `;
        careerMatches.appendChild(careerElement);
    });

    plotGraph(scores);
    createCareerRoadmap(recommendedCareers);
}

// Recommend careers based on scores
function recommendCareers(scores, careers) {
    return careers.map(career => {
        let matchScore = Object.keys(career.traits).reduce((sum, trait) => {
            return sum + (career.traits[trait] * (scores[trait] || 0));
        }, 0);
        return { ...career, matchScore: (matchScore / 100) * 100 };
    }).sort((a, b) => b.matchScore - a.matchScore).slice(0, 3);
}

// Plot graph using Chart.js
function plotGraph(scores) {
    const ctx = document.getElementById('myChart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: Object.keys(scores),
            datasets: [{
                label: 'Trait Scores',
                data: Object.values(scores),
                backgroundColor: 'rgba(255, 111, 0, 0.6)',
                borderColor: 'rgba(255, 111, 0, 1)',
                borderWidth: 1
            }]
        }
    });
}

// Create career roadmap
function createCareerRoadmap(careers) {
    Plotly.newPlot('roadmap-graph', careers.map(career => ({
        x: career.roadmap.map((_, i) => i),
        y: career.roadmap.map((_, i) => i + 1),
        mode: 'lines+markers+text',
        name: career.name,
        text: career.roadmap,
        textposition: 'top center'
    })), { title: 'Career Roadmap Projection' });
}

// Start the assessment when the page loads
document.addEventListener('DOMContentLoaded', displayQuestion);