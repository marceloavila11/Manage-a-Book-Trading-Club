fetch('http://localhost:5000/requests')
  .then((response) => response.json())
  .then((requests) => {
    const requestsList = document.getElementById('requests-list');

    if (requests.length === 0) {
      requestsList.innerHTML = '<p>No requests found.</p>';
      return;
    }

    requests.forEach((request) => {
      const requestItem = document.createElement('div');
      requestItem.classList.add('request-item');
      requestItem.innerHTML = `
        <p><strong>${request.requestedBy}</strong> wants to borrow the book with ID: <strong>${request.bookId}</strong></p>
        <p>Owned by: <strong>${request.requestedFrom}</strong></p>
        <p>Status: <strong>${request.status}</strong></p>
      `;
      requestsList.appendChild(requestItem);
    });
  })
  .catch((error) => {
    console.error('Error fetching requests:', error);
    document.getElementById('requests-list').innerHTML = '<p>Error loading requests.</p>';
  });
