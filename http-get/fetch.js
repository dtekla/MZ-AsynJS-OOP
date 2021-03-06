fetch("https://jsonplaceholder.typicode.com/users")
    .then(respones => {
        if (!respones.ok) {
            throw Error(respones.status);
        } else {
            return respones.json();
        }
    }).then(data => {
    console.log(data);
}).catch(error => {
    console.error(error);
})




