async function getProfile() {
    const username = document.getElementById("username").value;
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "Loading...";
  
    try {
      const res = await fetch(`https://api.github.com/users/${username}`);
      if (!res.ok) throw new Error("User not found");
  
      const data = await res.json();
  
      resultDiv.innerHTML = `
        <img src="${data.avatar_url}" width="100" />
        <h2>${data.name || data.login}</h2>
        <p>${data.bio || "No bio available"}</p>
        <p><strong>Followers:</strong> ${data.followers}</p>
        <p><strong>Following:</strong> ${data.following}</p>
        <p><strong>Public Repos:</strong> ${data.public_repos}</p>
        <a href="${data.html_url}" target="_blank">View Profile</a>
      `;
    } catch (err) {
      resultDiv.innerHTML = "User not found. Try another username.";
    }
  }
  