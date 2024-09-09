const input = document.getElementById('new-post');
const contentUrlInput = document.getElementById('content-url');
const contentTypeSelect = document.getElementById('content-type');
const button = document.getElementById('add-post');
const posts = document.getElementById('post-container');

button.addEventListener('click', addPost);
input.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    addPost();
  }
});

function addPost() {
  if (input.value) {
    let newPost = document.createElement('div');
    newPost.classList.add('post-card'); 

    let postHeader = document.createElement('div');
    postHeader.classList.add('post-header');

    let profileImage = document.createElement('img');
    profileImage.src = 'groups_24dp_5F6368_FILL1_wght400_GRAD0_opsz24.svg'; 
    profileImage.alt = 'Profile Image';
    profileImage.classList.add('profile-image');
    postHeader.appendChild(profileImage);

    let userInfo = document.createElement('div');
    userInfo.classList.add('user-info');

    let userName = document.createElement('strong');
    userName.innerText = 'Becas AECID'; 
    userInfo.appendChild(userName);

    let postDate = document.createElement('p');
    postDate.classList.add('post-date');
    postDate.innerText = new Date().toLocaleDateString(); 
    userInfo.appendChild(postDate);

    postHeader.appendChild(userInfo);
    newPost.appendChild(postHeader);

    let postContent = document.createElement('div');
    postContent.classList.add('post-content');

    let description = document.createElement('p');
    description.classList.add('description');
    description.innerText = input.value;
    postContent.appendChild(description);

    const contentType = contentTypeSelect.value;
    const contentUrl = contentUrlInput.value;

    if (contentUrl) {
        if (contentType === 'image') {
            let imageElement = document.createElement('img');
            imageElement.src = contentUrl;
            imageElement.alt = 'Post Image';
            imageElement.classList.add('post-media');
            postContent.appendChild(imageElement);
        } else if (contentType === 'video') {
            let videoElement = document.createElement('iframe');
            videoElement.src = contentUrl;
            videoElement.width = '560';
            videoElement.height = '315';
            videoElement.frameBorder = '0';
            videoElement.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
            videoElement.allowFullscreen = true;
            postContent.appendChild(videoElement);
        }
    }

    newPost.appendChild(postContent);

    posts.appendChild(newPost);
    input.value = ''; 
    contentUrlInput.value = '';
    contentTypeSelect.value = 'image'; 
  } else {
    alert('Please write something');
  }
}
