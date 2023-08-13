function declareSubmitEvent() {
    let submitBtn = document.querySelector('button[type="submit"]')
    submitBtn.addEventListener('click', async (e) => {
        e.preventDefault()
        const userObj = {
            firstName: document.querySelector('#first-name').value,
            lastName: document.querySelector('#last-name').value,
            email: document.querySelector('#email').value,
            age: document.querySelector('#age').value,
        }
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users', {
                method: 'POST',
                body: JSON.stringify(userObj),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
            if (response.ok) {
                const data = await response.json()
                console.log(data);
            }
            else {
                throw new Error('some error ocurred')
            }
        }
        catch (err) {

        }
    })
}
declareSubmitEvent();