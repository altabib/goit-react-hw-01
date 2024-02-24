import css from "./TransactionHistory.module.css"


const TransactionHistory = ({transactions}) => {

  return (
    <div className={css.tableBox}>
       <table className={css.tableTop}>
  <thead className={css.tableThead}>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

        <tbody className={css.tableTbody}>
          {transactions.map((item) => (
          
         <tr className={css.tableLine} key={item.id}>
           <td>{item.type}</td>
           <td>{item.amount}</td>
           <td>{item.currency}</td>
         </tr> 
          )
          )}
      
  </tbody>
</table> 
    </div>
   )
  }



export default TransactionHistory