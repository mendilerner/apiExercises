async function getData(){
    const usersRes = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await usersRes.json()

    const todosRes = await fetch('https://jsonplaceholder.typicode.com/todos')
    const todos = await todosRes.json()

    const postsRes = await fetch('https://jsonplaceholder.typicode.com/posts')
    const posts = await usersRes.json()

    return [users, todos, posts]
}

getData().then(
    (data) => {
        const [users, todos, posts] = data
        users.forEach(user => {
            user.todosUser = todos.filter((todo) => todo.userId === user.id)
            user.postsUser = posts.filter((post) => post.userId === user.id )
        });
        console.log(users)
    }
)