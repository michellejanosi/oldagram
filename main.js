let postContent = document.querySelector('.post-content');

const posts = [
  {
    name: 'Vincent van Gogh',
    username: 'vincey1853',
    location: 'Zundert, Netherlands',
    avatar: 'images/avatar-vangogh.jpg',
    post: 'images/post-vangogh.jpg',
    comment: 'just took a few mushrooms lol',
    likes: 21,
  },
  {
    name: 'Gustave Courbet',
    username: 'gus1819',
    location: 'Ornans, France',
    avatar: 'images/avatar-courbet.jpg',
    post: 'images/post-courbet.jpg',
    comment: 'i\'m feelin a bit stressed tbh',
    likes: 4,
  },
  {
    name: 'Joseph Ducreux',
    username: 'jd1735',
    location: 'Paris, France',
    avatar: 'images/avatar-ducreux.jpg',
    post: 'images/post-ducreux.jpg',
    comment:
      'gm friends! which coin are YOU stacking up today?? post below and WAGMI!',
    likes: 152,
  },
];

window.onload = renderPost;

function renderPost() {
  for (const post of posts) {
    postContent.innerHTML += `
      <div class="user-info">
        <img class="avatar" src="${post.avatar}" alt="post image user avatar">
        <div class="user-text">
          <div class="user-full-name">${post.name}</div>
          <div class="location-text">${post.location}</div>
        </div>
      </div>
      <img src="${post.post}" class="post-image" alt="post image">
      <div class="post-body">
        <div class="icons">
          <img src="images/icon-heart.png" class="icon" alt="heart icon">
          <img src="images/icon-comment.png" class="icon" alt="comment icon">
          <img src="images/icon-dm.png" class="icon" alt="share icon">
        </div>
        <div class="like-count">${post.likes} likes</div>
        <div class="username-caption"><span class="bold">${post.username}</span> ${post.comment}</div>
      </div>
    `;
  }
}

