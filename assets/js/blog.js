function retrievePosts(){
    const posts = JSON.parse(localStorage.getItem("blogPosts"));
    postList = document.querySelector("#postList"); //removing const forces this to be a global variable
    
    for (let i = 0; i < posts.length; i++) {
        const post = posts[i];
        const postAuthor = post.postAuthor;
        const postTitle = post.postTitle;
        const postContent = post.postContent;

        const article = document.createElement("article");
        article.innerHTML="\n<div class=\"titleauthor\">\n<p>" + postTitle + "</p>\n<p>" + postAuthor + "</p>\n</div>\n<div class=\"content\">\n<p>" + postContent + "</p>\n</div>\n";
        article.setAttribute("data-index", i);
        postList.appendChild(article);
    };
    
    const items = document.querySelectorAll(".content");
    items.forEach(item => {
        item.addEventListener("click", () => {
            item.classList.toggle("clicked");
        })
    });

    const clickedButton = document.querySelector("#newPost");
    clickedButton.addEventListener("click", () => {
        window.open("index.html");
        window.close();
    }
    )
};