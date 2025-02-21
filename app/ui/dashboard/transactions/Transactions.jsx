import styles from './transactions.module.css'
import Image from 'next/image'

const Transactions = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Latest Transactions</h2>
      <table className={styles.table}>
        <thead className={styles.heading}>
          <tr>
            <td>Name</td>
            <td>Status</td>
            <td>Date</td>
            <td>Amount</td>
          </tr>
        </thead>
        <tbody className={styles.body}>
          <tr>
            <td>
              <div className={styles.user}>
                <Image src="/noavatar.png" alt="" width={40} height={40} className={styles.userimage}/> John doe
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.pending}`}>Pending</span>
            </td>
            <td>
              14.02.2024
            </td>
            <td>$3.200</td>
          </tr>

          <tr>
            <td>
            <div className={styles.user}>
                <Image src="/noavatar.png" alt="" width={40} height={40} className={styles.userimage}/> John doe
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.done}`}>Pending</span>
            </td>
            <td>
              14.02.2024
            </td>
            <td>$3.200</td>
          </tr>

          <tr>
            <td>
            <div className={styles.user}>
                <Image src="/noavatar.png" alt="" width={40} height={40} className={styles.userimage}/> John doe
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.cancelled}`}>Pending</span>
            </td>
            <td>
              14.02.2024
            </td>
            <td>$3.200</td>
          </tr>

          <tr>
            <td>
            <div className={styles.user}>
                <Image src="/noavatar.png" alt="" width={40} height={40} className={styles.userimage}/> John doe
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.pending}`}>Pending</span>
            </td>
            <td>
              14.02.2024
            </td>
            <td>$3.200</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Transactions