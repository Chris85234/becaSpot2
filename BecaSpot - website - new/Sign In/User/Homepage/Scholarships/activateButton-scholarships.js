document.querySelectorAll('.favIcon').forEach(icon => {
    icon.addEventListener('click', function() {
        let currentColor = this.style.fill;
        this.style.fill = currentColor === 'rgb(211, 211, 211)' ? 'rgb(255, 215, 0)' : 'rgb(211, 211, 211)';
    });
});

document.querySelectorAll('.favIcon').forEach(icon => {
    icon.addEventListener('click', function() {
        let currentColor = this.style.stroke;
        this.style.stroke = currentColor === 'rgb(236, 236, 236)' ? 'rgb(184, 158, 11)' : 'rgb(236, 236, 236)';
    });
});

document.querySelectorAll('.applyIcon').forEach(icon => {
    icon.addEventListener('click', function() {
        let currentColor = this.style.fill;
        this.style.fill = currentColor === 'rgb(211, 211, 211)' ? 'rgb(104, 113, 196)' : 'rgb(211, 211, 211)';
    });
});

document.querySelectorAll('.applyIcon').forEach(icon => {
    icon.addEventListener('click', function() {
        let currentColor = this.style.stroke;
        this.style.stroke = currentColor === 'rgb(236, 236, 236)' ? 'rgb(72, 80, 146)' : 'rgb(236, 236, 236)';
    });
});
