document.getElementById('add-user-form').addEventListener('submit', async (event) => {
    event.preventDefault(); // Prevenir el envío del formulario
  
    const username = document.getElementById('username').value;
    const fullName = document.getElementById('fullName').value;
    const city = document.getElementById('city').value;
    const state = document.getElementById('state').value;
  
    const newUser = { username, fullName, city, state };
  
    try {
      const response = await fetch('http://localhost:5000/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newUser),
      });
  
      const result = await response.json();
  
      if (response.ok) {
        document.getElementById('message').innerText = `User ${result.user.username} added successfully!`;
        document.getElementById('add-user-form').reset(); // Limpia el formulario
      } else {
        document.getElementById('message').innerText = result.message;
      }
    } catch (error) {
      document.getElementById('message').innerText = 'Error adding user.';
      console.error('Error:', error);
    }
  });
  