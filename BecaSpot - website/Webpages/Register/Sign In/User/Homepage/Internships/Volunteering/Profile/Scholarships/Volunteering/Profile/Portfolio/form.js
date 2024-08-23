document.addEventListener('DOMContentLoaded', function() {
    const fields = ['motivation', 'goals', 'relevant-experience', 'qualities', 'values', 'skills'];
    fields.forEach(field => {
        const storedValue = localStorage.getItem(field);
        if (storedValue) {
            document.getElementById(field).value = storedValue;
        }
    });
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
