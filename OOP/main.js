import { User } from "./user.js";
import { Post } from "./post.js";
import { Blog } from "./blog.js";

let johnDoe = new User("John", "Doe", "john@doe.com");
console.log(johnDoe.fullname);

let myPost = new Post("lorem", "lorem lorem lorem", 101);
console.log(myPost.getPreview(12));

let myBlog = new Blog("myblog", "me");

//myBlog.addPost(myPost);
//myBlog.deletePost(3);
console.log(myBlog.getPosts);