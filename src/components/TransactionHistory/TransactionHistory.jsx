import css from './TransactionHistory.module.css'

const TransactionHistory = ({ items }) => {
     
  //setting the type of transaction
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
<table className={css.table}>
  <thead className={css.thead}>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody className={css.tbody}>
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