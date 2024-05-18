const userName = document.querySelector("#userName");
const postTitle = document.querySelector("#postTitle");
const postContent = document.querySelector("#postContent");
const formSubmit = document.querySelector("#submitButton");
let blogs = [];

function writePosts {
    const blogPost= {
        userName: userName.value,
        postTitle: postTitle.value,
        postContent: postContent.value
    };
    localStorage.setItem("blogPost", JSON.stringify("blogPost"));
};

function readPosts {
    const blogList
    document.getElementById("savedName").innerHTML=blogPost.userName;
    document.getElementById("savedTitle").innerHTML=blogPost.postTitle;
    document.getElementById("savedContent").innerHTML=blogPost.postContent;
    let returnedPost=JSON.parse(localStorage.getItem("savedPost"));
}

formSubmit.addEventListener("click", function (event) {
    event.preventDefault();
    if (userName.value === "") {
        alert("Please provide a username.");
        return;
    } else if (postTitle.value === "") {
        alert("Please supply a title for this blog post.");
        return;
    } else if (postContent.value === "") {
        alert("Please provide a blog entry.");
        return;
    };
    const index = formSubmit.parentElement.getAttribute('data-index');
    blogs.splice(index, 1);
    writePosts();

    // let postCount= localStorage.length;
    //     if (postCount === 0) {
    //         localStorage.setItem("savedPosts", jSON.stringify(blogPost));
    //     } else {
    //         const savedPosts = JSON.parse(localStorage.getItem("posts"));
    //     }
    // localStorage.setItem("savedPost", JSON.stringify(blogPost));
    // window.open("./blog.html");
});