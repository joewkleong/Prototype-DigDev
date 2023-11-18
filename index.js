// Load DOM before executing entire function enclosed.
document.addEventListener('DOMContentLoaded', function() {

// Define functions to recommend training resources for each level and domain (customize and add resources as needed)

function productDevRecommendations(level) {
    const container = document.createElement('div');
    if (level === 'beginner') {
        container.innerHTML = `
            <div>Beginner: Introduction to the Internet - CS50 Harvard. <a href="https://youtu.be/n_KghQP86Sw?si=blW7YNUfXrlvFKfM" target="_blank">CS50 Harvard Video</a></div>
            <div>How Do Websites Actually Work - Web Development Bootcamp. <a href="https://www.youtube.com/watch?v=Der8R3glvGc&list=PL8ThWVrtoaIej99JohYT8D6jKWJrNNfBW&index=3" target="_blank">Website 101 Video</a></div>
            <div>Example Beginner Resource 3</div>
        `;
    } else if (level === 'intermediate') {
        container.innerHTML = `
            <div>Example Intermediate Resource 1</div>
            <div>Example Intermediate Resource 2</div>
        `;
    } else {
        container.innerHTML = `
            <div>Example Advanced Resource 1</div>
            <div>Example Advanced Resource 2</div>
        `;
    }
    return container;
}

function cybersecurityRecommendations(level) {
    const container = document.createElement('div');
    // Implement similar logic for cybersecurity recommendations
    // Example:
    if (level === 'beginner') {
        container.innerHTML = `
            <div>Beginner Cybersecurity Resource 1</div>
            <div>Beginner Cybersecurity Resource 2</div>
        `;
    } else if (level === 'intermediate') {
        container.innerHTML = `
            <div>Intermediate Cybersecurity Resource 1</div>
            <div>Intermediate Cybersecurity Resource 2</div>
        `;
    } else {
        container.innerHTML = `
            <div>Advanced Cybersecurity Resource 1</div>
            <div>Advanced Cybersecurity Resource 2</div>
        `;
    }
    return container;
}

function dataAnalyticsRecommendations(level) {
    const container = document.createElement('div');
    // Implement similar logic for data analytics recommendations
    // Example:
    if (level === 'beginner') {
        container.innerHTML = `
            <div>Beginner Data Analytics Resource 1</div>
            <div>Beginner Data Analytics Resource 2</div>
        `;
    } else if (level === 'intermediate') {
        container.innerHTML = `
            <div>Intermediate Data Analytics Resource 1</div>
            <div>Intermediate Data Analytics Resource 2</div>
        `;
    } else {
        container.innerHTML = `
            <div>Advanced Data Analytics Resource 1</div>
            <div>Advanced Data Analytics Resource 2</div>
        `;
    }
    return container;
}

function aiRecommendations(level) {
    const container = document.createElement('div');
    // Implement similar logic for AI recommendations
    // Example:
    if (level === 'beginner') {
        container.innerHTML = `
            <div>AI for Everyone Intro by Andrew Ng. <a href="https://www.youtube.com/watch?v=Hb3QbvfwtrE&list=PLEyQ4aT2B2aUl101YrUc0V_T_-vg5TIoq" target="_blank">AI for Everyone Video</a> </div>
            <div>Beginner AI Resource 2</div>
        `;
    } else if (level === 'intermediate') {
        container.innerHTML = `
            <div>Intermediate AI Resource 1</div>
            <div>Intermediate AI Resource 2</div>
        `;
    } else {
        container.innerHTML = `
            <div>Advanced AI Resource 1</div>
            <div>Advanced AI Resource 2</div>
        `;
    }
    return container;
}

// Function to process the form submission
function processForm(event) {
    event.preventDefault(); // Prevent the form from submitting

// Get the container where recommendations will be displayed
const recommendationsContainer = document.getElementById('recommendations-container');

    // Get form inputs
    const productDevLevel = document.getElementById('product-development').value;
    const cybersecurityLevel = document.getElementById('cybersecurity').value;
    const dataAnalyticsLevel = document.getElementById('data-analytics').value;
    const aiLevel = document.getElementById('artificial-intelligence').value;
    const hoursPerWeek = parseFloat(document.getElementById('time-per-week').value); // gets input for hours per week, converts to number and defines the variable.

    // Generate training recommendations based on skill levels (customize as needed)
    const recommendations = {
        'Product Development': productDevRecommendations(productDevLevel),
        'Cybersecurity': cybersecurityRecommendations(cybersecurityLevel),
        'Data Analytics': dataAnalyticsRecommendations(dataAnalyticsLevel),
        'Artificial Intelligence': aiRecommendations(aiLevel),
    };

    // Display recommendations in the DOM

    recommendationsContainer.innerHTML = ''; // Clear previous content
    
     // Adding an intro statement with appropriate spacing
    recommendationsContainer.innerHTML = '<div style="margin-top: 40px; font-size: 1.5rem; font-weight: bold;">Recommended training resources for you:</div>';

    //Iteratively add and display training recommendations for each domain//
    for (const domain in recommendations) {
        const domainHeader = document.createElement('h3');
        domainHeader.textContent = domain;
        recommendationsContainer.appendChild(domainHeader);
        recommendationsContainer.appendChild(recommendations[domain]);
    }

    // Calculate the weeks needed per domain (weekly training plan) based on estimated time (customize as needed)
    const weeklyPlan = generateWeeklyPlan(hoursPerWeek, recommendations);
    
    // Display the weekly training plan
    const weeklyPlanContainer = document.getElementById('weekly-plan-container');
    
    // Clear previous content and add the intro statement with appropriate spacing
    weeklyPlanContainer.innerHTML = '<div style="margin-top: 40px; font-size: 1.5rem; font-weight: bold;">Your training plan (in weeks):</div>';
    
    // Append each plan element (domain:weeks pairs) to the container
    weeklyPlan.forEach(plan => {
        const planElement = document.createElement('div');
        planElement.textContent = plan;
        weeklyPlanContainer.appendChild(planElement);
    });
}

// Define function to generate weeklyPlan, defined as weeks per domain, based on resource recommendations.
function generateWeeklyPlan(hoursPerWeek, recommendations) {
    const weeklyPlan = []; // sets up array of domain:weeks key-value pairs, calculates weeks for each domain.
    for (const domain in recommendations) {
        const resources = recommendations[domain].children.length; // Count the number of child elements
        const totalHours = resources * 2; // Estimated 2 hours per resource
        const numWeeks = Math.ceil(totalHours / hoursPerWeek); // Round up to err on side of giving more time
        weeklyPlan.push(`${domain}: ${numWeeks} weeks`);
    }
    return weeklyPlan;
}

// Attach the form submission event listener
const form = document.getElementById('training-needs-form');
form.addEventListener('submit', processForm);

});