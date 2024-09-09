
document.getElementById('profile-image-input').addEventListener('change', function(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    
    reader.onload = function(e) {
        document.querySelector('.btn-img img').src = e.target.result;
    };
    
    if (file) {
        reader.readAsDataURL(file);
    }
});

document.getElementById('backButton').addEventListener('click', function() {
    window.history.back();
});

