const containDiv = document.querySelector('.container')

const declareGetRandomJoke = () => {
    const btn = document.querySelector('#random-joke')
    btn.addEventListener('click', async () => {
        try{
        const jokeRes = await fetch('https://api.humorapi.com/jokes/random/?api-key=89981ae27aca453095b9b290875e6493')
        const data = await jokeRes.json()
        if (jokeRes.ok){
            containDiv.textContent = data.joke;
        }
        else{
            containDiv.textContent = data.message;
        }}
        catch (err){
            console.log(err);
        }
    })
}

declareGetRandomJoke();
