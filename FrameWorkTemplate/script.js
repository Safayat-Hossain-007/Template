fetch('https://jsonplaceholder.typicode.com/users')
.then(res => res.json())
.then(data => showUserData(data));
function showUserData(data){
    
    let userHtml = '';
    data.forEach(user => {
        userHtml = userHtml + 
        `<div class="user">
        <h2> ${user.name}<h2>
        <p> Email: ${user.email} </p>
        <p>${user.company.name}. ${user.company.catchPhrase}. ${user.company.bs}</p>
        </div>`
        
    });
    const userContainer = document.getElementById('user-container');
    userContainer.innerHTML = userHtml;
}