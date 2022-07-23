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

function render() {
  const main = document.querySelector('main');
  posts.forEach((post) => {
    main.innerHTML += `
      <section class="post">
      <div class="post-info">
        <img src="${post.avatar}" alt="avatar" class="post-avatar">
        <div class="post-info-detail">
          <p class="post-name">${post.name}</p>
          <p class="post-location">${post.location}</p>
        </div>
      </div>
      <img src="${post.post}" alt="post image" class="post-img">
      <div class="post-detail">
        <div class="post-action">
          <img src="images/icon-heart.png" alt="like" class="post-icon">
          <img src="images/icon-comment.png" alt="comment" class="post-icon">
          <img src="images/icon-dm.png" alt="share" class="post-icon">
        </div>
        <p class="post-likes">${post.likes} likes</p>
        <p class="post-comment"><span class="post-username">${post.username}</span> ${post.comment}</p>
      </div>
    </section>
    `;
  }
  );
}

render();
