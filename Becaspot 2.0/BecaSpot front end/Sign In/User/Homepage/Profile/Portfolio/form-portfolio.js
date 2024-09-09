document.addEventListener('DOMContentLoaded', () => {
    const opportunityTypeSelect = document.getElementById('opportunity-type');
    const scholarshipSection = document.getElementById('scholarship-info');
    const internshipSection = document.getElementById('internship-info');
    const volunteeringSection = document.getElementById('volunteering-info');
    const academicSection = document.getElementById('academic-info');
    const personalInfoSection = document.getElementById('personal-info');

    const showSection = (section) => {
        scholarshipSection.style.display = 'none';
        internshipSection.style.display = 'none';
        volunteeringSection.style.display = 'none';

        if (section) {
            section.style.display = 'block';
        }
    };

    opportunityTypeSelect.addEventListener('change', (event) => {
        const value = event.target.value;

        if (value === 'scholarship') {
            showSection(scholarshipSection);
        } else if (value === 'internship') {
            showSection(internshipSection);
        } else if (value === 'volunteering') {
            showSection(volunteeringSection);
        }
    });

    showSection(scholarshipSection);
});


document.getElementById('portfolio-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const fields = ['motivation', 'goals', 'relevant-experience', 'qualities', 'values', 'skills'];
    fields.forEach(field => {
        const value = document.getElementById(field).value;
        localStorage.setItem(field, value);
    });

    document.getElementById('message').innerText = 'Your changes have been saved successfully.';
});

document.getElementById('portfolio-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const fields = ['motivation', 'goals', 'relevant-experience', 'qualities', 'values', 'skills'];
    
    fields.forEach(field => {
        const value = document.getElementById(field).value;
        localStorage.setItem(field, value);
    });

    document.getElementById('message').innerText = 'Your changes have been saved successfully.';
});
