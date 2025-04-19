function processTransactions(transactions) {
    let finalBalance = 0;
    let totalDeposits = 0;
    let totalWithdrawals = 0;
  
    for (const transaction of transactions) {
      if (transaction.type === 'deposit') {
        finalBalance += transaction.amount;
        totalDeposits += transaction.amount;
      } else if (transaction.type === 'withdrawal') {
        finalBalance -= transaction.amount;
        totalWithdrawals += transaction.amount;
      }
    }
  
    return {
      finalBalance,
      totalDeposits,
      totalWithdrawals
    };
  }
  
  const transactions = [
    { type: 'deposit', amount: 100 },
    { type: 'withdrawal', amount: 50 },
    { type: 'deposit', amount: 200 },
    { type: 'withdrawal', amount: 30 }
  ];
  
  const result = processTransactions(transactions);
  console.log(result);

  