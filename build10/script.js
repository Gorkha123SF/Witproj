const fetchBtn = document.getElementById('fetchBtn');
const userList = document.getElementById('userList');

fetchBtn.addEventListener('click', fetchUsers);

async function fetchUsers() {
  userList.innerHTML = "<p>Loading...</p>";

  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();

    // Clear loading text
    userList.innerHTML = "";

    // Display first 5 users
    data.slice(0, 5).forEach(user => {
      const userCard = document.createElement('div');
      userCard.classList.add('user-card');

      userCard.innerHTML = `
        <h3>${user.name}</h3>
        <p><strong>Username:</strong> ${user.username}</p>
        <p><strong>Email:</strong> ${user.email}</p>
        <p><strong>City:</strong> ${user.address.city}</p>
        <p><strong>Company:</strong> ${user.company.name}</p>
      `;

      userList.appendChild(userCard);
    });
  } catch (error) {
    userList.innerHTML = `<p style="color:red;">Failed to fetch data. Please try again.</p>`;
    console.error('Error fetching users:', error);
  }
}
