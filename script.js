document.getElementById('fetchButton').addEventListener('click', () => {
  const userId = document.getElementById('userIdInput').value;
  const url = `https://users.roblox.com/v1/users/${userId}`;
  
  fetch(url)
    .then(response => response.json())
    .then(data => {
      document.getElementById('result').innerText = `Username: ${data.name}`;
    })
    .catch(error => {
      document.getElementById('result').innerText = 'Error fetching user data. Please try again.';
      console.error('Error fetching user data:', error);
    });
});
