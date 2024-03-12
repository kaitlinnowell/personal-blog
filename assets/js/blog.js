backButton = document.getElementById("back-button")
blogSection = document.getElementById("blog")

backButton.addEventListener("click", function () {
    window.location.href = "index.html"
})

function renderBlog() {
    // Use JSON.parse() to convert text to JavaScript object
    const blogPosts = JSON.parse(localStorage.getItem('blogPosts'));
    // Check if data is returned, if not exit out of the function
    if (blogPosts !== null) {
      for (let i = 0; i < blogPosts.length; i++) {
        const blog = blogPosts[i];
        console.log(blog.username)
        console.log(blog.title)
        console.log(blog.content)

        const li = document.createElement('li');
        li.setAttribute('data-index', i);
        
        var title = document.createElement('h3');
        var content = document.createElement('p');
        var username = document.createElement('p');

        title.innerHTML = blog.title;
        content.innerHTML = blog.content;
        content.id = 'content';
        username.innerHTML = `posted by: ${blog.username}`;
        username.id = 'username';

        blogSection.appendChild(li);
        li.append(title);
        li.append(content);
        li.append(username);
      }
    }
  }

// The init() function fires when the page is loaded
function init() {
    // When the init function is executed, the code inside renderBlog function will also execute
    renderBlog();
  }
  init();