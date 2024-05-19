function retrievePosts(){
    // const blogEntry = document.querySelector(".post");
    const postList = document.querySelector("#postList");
    const posts = JSON.parse(localStorage.getItem("blogPosts"));
    
    // postList.innerHTML = "";
    for (let i = 0; i < posts.length; i++) {
        const post = posts[i];
        const postAuthor = post.postAuthor;
        const postTitle = post.postTitle;
        const postContent = post.postContent;

        const article = document.createElement("article");
        article.innerHTML="<article>\n<div class=\"titleauthor\">\n<p>" + postTitle + "</p>\n<p>" + postAuthor + "</p>\n</div>\n<div class=\"content\">\n<p>" + postContent + "</p>\n</div>\n</article>";
        article.setAttribute("data-index", i);
        
        postList.appendChild(article);
    };
};


    //✔️retrieve data from localStorage
    //✔️retrieve object from data
    //✔️asssign each key value from object to a variable
    // STILL HAVING TROUBLE FIRING retrievePosts() ON PAGE LOAD.
    //✔️insert variable for author into div
    //✔️insert variable for title into same div
    // insert variable for content into new div
    // wrap pair of divs into article
    // display article
    // repeat for each item in data