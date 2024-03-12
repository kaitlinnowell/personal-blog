submitButton = document.getElementById("submit")
usernameEl = document.getElementById("username")
titleEl = document.getElementById("title")
contentEl = document.getElementById("content")

submitButton.addEventListener("click", function (event) {
    event.preventDefault();
    // Check for empty form inputs
    if (username.value.trim() == '' || title.value.trim() == '' || content.value.trim() == '') {
        alert("Please Enter Valid Inputs.")
    } else {
        savePost();
    }
})

function savePost() {
    // Save related form data as an object, append to existing array in storage and flatten back to JSON
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
    
    // Use .setItem() to store array object in storage and JSON.stringify to convert it to a string
    localStorage.setItem('blogPosts', JSON.stringify(blogPosts));

    //Switch to blog page
    window.location.href = "blog.html";
    }
    
