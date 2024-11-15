document.addEventListener('DOMContentLoaded', function() {
    const blogForm = document.querySelector('#blog-form');
    
    blogForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Get form values
        const username = document.querySelector('#username').value.trim();
        const title = document.querySelector('#title').value.trim();
        const content = document.querySelector('#content').value.trim();
        
        // Validate form
        if (!username || !title || !content) {
            alert('Please fill in all fields');
            return;
        }
        
        // Create blog post object
        const blogPost = {
            username,
            title,
            content,
            timestamp: new Date().toISOString()
        };
        
        // Get existing posts or initialize empty array
        let existingPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];
        
        // Add new post
        existingPosts.push(blogPost);
        
        // Save to localStorage
        localStorage.setItem('blogPosts', JSON.stringify(existingPosts));
        
        // Clear form
        blogForm.reset();
        
        // Redirect to blog page
        window.location.href = 'blog.html';
    });
});