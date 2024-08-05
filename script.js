document.getElementById('fetchButton').addEventListener('click', () => {
  const userId = document.getElementById('userIdInput').value;
  const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
  const targetUrl = `https://users.roblox.com/v1/users/${userId}`;
  const url = proxyUrl + targetUrl;

  fetch(url, {
    method: 'GET',
    headers: {
      'Origin': window.location.origin,
      'x-requested-with': 'XMLHttpRequest'
    }
  })
    .then(response => response.json())
    .then(data => {
      if (data && data.name) {
        document.getElementById('result').innerText = `Username: ${data.name}`;
      } else {
        document.getElementById('result').innerText = 'User not found or unable to fetch user data.';
      }
    })
    .catch(error => {
      document.getElementById('result').innerText = 'Error fetching user data. Please try again.';
      console.error('Error fetching user data:', error);
    });
});
