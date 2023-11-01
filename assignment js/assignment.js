const githubForm = document.getElementById("githubForm");
const usernameInput = document.getElementById("username");
const userInfoCard = document.getElementById("userInfoCard");

githubForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const username = usernameInput.value;
    fetch(`https://api.github.com/users/${username}`)
        .then((response) => response.json())
        .then((data) => {
            if (data.message === "Not Found") {
                userInfoCard.innerHTML = '<p>User not found.</p>';
            } else {
                const userHTML = `
                    <img src="${data.avatar_url}" alt="${data.login}" />qWAESDFKNCMB 
                    <h2>${data.login}</h2>
                    <p>Name: ${data.name || 'N/A'}</p>
                    <p>Public Repos: ${data.public_repos}</p>
                    <p>Public Gists: ${data.public_gists}</p>
                    <p>Profile Created At: ${new Date(data.created_at).toDateString()}</p>
                `;
                userInfoCard.innerHTML = userHTML;
                userInfoCard.style.display = "block";
            }
        })
        .catch((error) => {
            console.error(error);
        });
});
