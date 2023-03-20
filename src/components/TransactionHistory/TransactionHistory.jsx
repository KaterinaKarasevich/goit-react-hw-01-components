import PropTypes from 'prop-types';

import {TableTransactions, TableHead, TableBody, TableRow} from "./TransactionHistory.styled"

export const TransactionHistory = ({transactions}) => {
 
  return (
<TableTransactions>
  <TableHead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </TableHead>

  <TableBody>
    {transactions.map(transaction => {
      return (
    <TableRow key ={transaction.id}>
      <td>{transaction.type}</td>
      <td>{transaction.amount}</td>
      <td>{transaction.currency}</td>
    </TableRow>
    );
  })}
      </TableBody>
</TableTransactions>)
}

TransactionHistory.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  )
}