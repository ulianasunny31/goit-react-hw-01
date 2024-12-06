const TransactionHistory = ({items}) => {
     
    function getType(type) {
        switch (type) { 
            case 'invoice':
                return 'Invoice';
            case 'payment':
                return 'Payment';
            case 'withdrawal':
                return 'Withdrawal';
            case 'deposit':
                return 'Deposit';
        }
    }


  return (
<>
<table>
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
    {
  items.map(({id, type, amount, currency}) => {
      return ( 
     <tr key={id}>
      <td>{getType(type)}
      </td>
      <td>{amount}</td>
      <td>{currency}</td>
     </tr>
     )
  })
    }
  </tbody>
</table>
 </>
  )
}

export default TransactionHistory