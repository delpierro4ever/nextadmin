import styles from './sidebar.module.css';
import { MdDashboard, MdSupervisedUsersCircle, MdattachMoney, MdWork, MdAnalytics, MdPeople, MdShoppingBag, MdOutlineSettings, MdHelpCenter, MdLogout } from 'react-icons'

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
        icon: <MdSupervisedUsersCircle />,
      },
      {
        title: 'Products',
        path: '/dashboard/products',
        icon: <MdShoppingBag />,
      },
      {
        title: 'Transactions',
        path: '/dashboard/transactions',
        icon: <MdattachMoney />,
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
      <ul>
        {menuItems.map((item, index) => {
          return (
            <li key={index}>
              <span className={styles.title}>{item.title}</span>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Sidebar
