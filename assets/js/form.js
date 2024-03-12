submitButton = document.getElementById("submit")
usernameEl = document.getElementById("username")
titleEl = document.getElementById("title")
contentEl = document.getElementById("content")

submitButton.addEventListener("click", function (event) {
    event.preventDefault();
    savePost();

function savePost() {
    // Save related form data as an object
    const blogPost = {
        username: usernameEl.value.trim(),
        title: titleEl.value.trim(),
        content: contentEl.value.trim(),
    };
    var blogPosts = JSON.parse(localStorage.getItem('blogPosts'));
    if (blogPosts !== null) {
        blogPosts.push(blogPost);
    } else {
        blogPosts = [blogPost]
    }
    
    // Use .setItem() to store object in storage and JSON.stringify to convert it as a string
    localStorage.setItem('blogPosts', JSON.stringify(blogPosts));
    }
    window.location.href = "blog.html";
})