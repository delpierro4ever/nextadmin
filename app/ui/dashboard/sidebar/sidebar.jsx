import Image from 'next/image';
import MenuLink from './menulink/MenuLink';
import styles from './sidebar.module.css';
import {MdDashboard, MdOutlineSupervisedUserCircle, MdAccountBalanceWallet, MdWork, MdAnalytics, MdPeople, MdShoppingBag, MdOutlineSettings, MdHelpCenter, MdLogout } from 'react-icons/md'

const menuItems = [
  {
    title: 'Home',
    list: [
      {
        title: 'Dashboard',
        path: '/dashboard',
        icon: <MdDashboard />,
      },
      {
        title: 'Users',
        path: '/dashboard/users',
        icon: <MdOutlineSupervisedUserCircle />,
      },
      {
        title: 'Products',
        path: '/dashboard/products',
        icon: <MdShoppingBag />,
      },
      {
        title: 'Transactions',
        path: '/dashboard/transactions',
        icon: <MdAccountBalanceWallet />,
      }
    ]
  },
  {
    title: 'Analytics',
    list: [
      {
        title: 'Revenue',
        path: '/dashboard/revenue',
        icon: <MdWork />,
      },
      {
        title: 'Reports',
        path: '/dashboard/reports',
        icon: <MdAnalytics/>,
      },
      {
        title: 'Teams',
        path: '/dashboard/teams',
        icon: <MdPeople />,
      }
    ]
  },
  {
    title: 'User',
    list: [
      {
        title: 'Settings',
        path: '/dashboard/settings',
        icon: <MdOutlineSettings />,
      },
      {
        title: 'Help',
        path: '/dashboard/help',
        icon: <MdHelpCenter />,
      },
      {
        title: 'Logout',
        path: '/dashboard/logout',
        icon: <MdLogout />,
      }
    ]
  }
]

const Sidebar = () => {
  return (

    <div className={styles.container}>

      {/*User Information*/}

      <div className={styles.user}>
        <Image src="/noavatar.png" alt='' width="50" height="50" className={styles.userImage} />
        <div className={styles.userDetails}>
        <span className={styles.username}>John Doe</span>
        <span className={styles.userTitle}>Administrator</span>
        </div>
      </div>

      {/*Menu List*/}
      <ul className={styles.list}>
        {menuItems.map((item, index) => {
          return (
            <li key={index}>
              <span className={styles.cat}>{item.title}</span>

              {item.list.map((cat, index) =><MenuLink item={cat} key={index} />)               
              }
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Sidebar
