fetch('http://localhost:5000/trades')
  .then((response) => response.json())
  .then((trades) => {
    const tradesList = document.getElementById('trades-list');
    trades.forEach((trade) => {
      const tradeItem = document.createElement('div');
      tradeItem.classList.add('trade-item');
      tradeItem.innerHTML = `
        <p><strong>${trade.requester}</strong> wants to trade:</p>
        <p>Book ID: ${trade.bookId}</p>
        <p>With <strong>${trade.owner}</strong></p>
      `;
      tradesList.appendChild(tradeItem);
    });
  });
