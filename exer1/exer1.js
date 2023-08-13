const getRandomUser = async () =>{
    try{
    const response = await fetch('https://randomuser.me/api')
    const resObj = await response.json()
    const user = await resObj.results[0]
    return user
}
    catch (err){
        return err.message
    }
    
}
function createUserCard(user){
    const userDiv = document.createElement('div')
    userDiv.classList.add('user-card')
    const userData = document.createElement('div')
    const userNameP = document.createElement('p')
    const userEmailP = document.createElement('p')
    const userAgeP = document.createElement('p')
    const userImg = document.createElement('img')

    const userName = user.name.title + " " + user.name.first + " " + user.name.last
    const userEmail = user.email
    const userImgUrl = user.picture.large
    const userAge = user.dob.age

    userNameP.textContent = `name: ${userName}`
    userEmailP.textContent = `email: ${userEmail}`
    userAgeP.textContent = `age: ${userAge}`
    userData.append(userNameP, userEmailP, userAgeP)
    userImg.src = userImgUrl
    userDiv.append(userData, userImg)
    return userDiv


}
const declareBtnRandomUser = () => {
    const btn = document.querySelector('#random-user')
    btn.addEventListener('click',  async () => {
        try{
        const user = await getRandomUser()
        const containDiv = document.querySelector('.container')
        const userCard = createUserCard(user)
        containDiv.append(userCard)
        }
        catch(err){
            console.log(err);
        }
    })
}

// exer 2
const getMaleUsers = async (size) =>{
    try{
    const response = await fetch('https://randomuser.me/api/?gender=male&results=5')
    const resObj = await response.json()
    const user = await resObj.results
    return user
}
    catch (err){
        return err.message
    }
    
}
const declareBtnFiveUsers = () => {
    const btn = document.querySelector('#five-mens')
    btn.addEventListener('click', async () => {
        const users = await getMaleUsers()
        users.forEach((user) => {
            console.log(user)
        });
    })
}
const init = () => {
    declareBtnRandomUser()
    declareBtnFiveUsers()
}
init();

