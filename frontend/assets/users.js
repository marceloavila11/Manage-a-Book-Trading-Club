fetch('http://localhost:5000/users')
  .then((response) => response.json())
  .then((users) => {
    const usersList = document.getElementById('users-list');

    if (users.length === 0) {
      usersList.innerHTML = '<p>No users found.</p>';
      return;
    }

    users.forEach((user) => {
      const userItem = document.createElement('div');
      userItem.classList.add('user-item');
      userItem.innerHTML = `
        <h3>${user.username}</h3>
        <p><strong>Full Name:</strong> ${user.fullName}</p>
        <p><strong>City:</strong> ${user.city}</p>
        <p><strong>State:</strong> ${user.state}</p>
      `;
      usersList.appendChild(userItem);
    });
  })
  .catch((error) => {
    console.error('Error fetching users:', error);
    document.getElementById('users-list').innerHTML = '<p>Error loading users.</p>';
  });
