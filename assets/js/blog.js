document.addEventListener('DOMContentLoaded', function() {
    // Back button functionality
    const backButton = document.querySelector('button');
    backButton.addEventListener('click', function() {
        window.location.href = 'index.html';
    });
    
    // Display blog posts
    const mainSection = document.querySelector('main section');
    const posts = JSON.parse(localStorage.getItem('blogPosts')) || [];
    
    if (posts.length === 0) {
        const noPostsMessage = document.createElement('p');
        noPostsMessage.textContent = 'No blog posts yet!';
        mainSection.appendChild(noPostsMessage);
    } else {
        posts.forEach(post => {
            const article = document.createElement('article');
            article.innerHTML = `
                <h3>${post.title}</h3>
                <hr>
                <p class="sentence">${post.content}</p>
                <p>Posted By: <span>${post.username}</span></p>
            `;
            mainSection.appendChild(article);
        });
    }
});