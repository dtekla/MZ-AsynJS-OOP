import { Post } from "./post.js";



export class Blog {
    #title;
    #author;
    #posts = [];

    constructor(title, author) {
        this.fetchPosts();
        this.#title = title;
        this.#author = author;
    }

    generatePostsArray(dat) {
        for (let i = 0; i < dat.length; i++) {
            this.#posts.push(new Post(dat[i].title, dat[i].body, dat[i].id));
        }
    }


    fetchPosts() {
         fetch("https://jsonplaceholder.typicode.com/posts")
            .then(response => {
                if (!response.ok) {
                    throw new Error(response.statusText);
                } else {
                    return response.json();
                }
            })
            .then(data => {
                this.generatePostsArray(data);
            })
            .catch(error => {
                this.#posts = []
                return error;
            });

    }

    addPost(post) {
        if(post instanceof Post) {
            this.#posts.push(post);
        } else {
            alert("not instance of Post");
        }
    }

    deletePost(postId) {
        for(let i = 0; i < this.#posts.length; i++) {
           console.log(typeof this.#posts[i].value);
        }
    }

    get getPosts() {
        return this.#posts;
    }

}


