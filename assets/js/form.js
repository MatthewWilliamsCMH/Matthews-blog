const postAuthor = document.querySelector("#postAuthor");
const postTitle = document.querySelector("#postTitle");
const postContent = document.querySelector("#postContent");
const form = document.querySelector("form");
let posts = JSON.parse(localStorage.getItem("blogPosts")) || [];

function savePost() {
    const blogPost = {
        postAuthor: postAuthor.value,
        postTitle: postTitle.value,
        postContent: postContent.value,
    };
    posts.unshift(blogPost)
    localStorage.setItem("blogPosts", JSON.stringify(posts));

    window.open("./blog.html");
    window.close();
}

function retrievePosts(){
    const postList = document.querySelector("#postList");
    
    for (let i = 0; i < posts.length; i++) {
        const post = posts[i];
        const postAuthor = post.postAuthor;
        const postTitle = post.postTitle;
        const postContent = post.postContent;

        const article = document.createElement("article");
        article.textContent="<article>\n<div class=\"titleauthor\">\n<p>" + postTitle + "</p>\n<p>" + postAuthor + "</p>\n</div>\n<div class=\"content\">\n<p>" + postContent + "</p>\n</div>\n</article>";
        article.setAttribute("data-index", i);
        
        postList.appendChild(article);
    };
};

form.addEventListener("submit", function(event) {
    event.preventDefault();
    if (postAuthor.value === "") {
        alert("Please provide the name of this blog\'s author.");
        postAuthor.focus();
        return;
    };
    
    if (postTitle.value === "") {
        alert("Please provide the title for this blog post.");
        postTitle.focus();
        return;
    };

    if (postContent.value === "") {
        alert("Please provide content for this blog post.");
        postContent.focus();
        return;
    };
    savePost();
});