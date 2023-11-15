import Image from 'next/image'
import styles from './rightbar.module.css'
import { MdPlayCircleFilled } from 'react-icons/md'

const Rightbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.bgContainer}>
          <Image src="/astronaut.png"  alt='' fill/>
        </div>
        <div className={styles.text}>
          <span className={styles.notification}>Available Now</span>
          <h3>How to win the new version of the admin dashboard </h3>
          <span className={styles.subtitle}>Takes 4 minutes to learn</span>
          <p className={styles.description}>Lorem ipsum color sit emet connector dicipline ilit remember eius liberes perspecitvie recursive position</p>
          <button className={styles.button}><MdPlayCircleFilled /> Learn</button>
        </div>
      </div>
      {/* <div className={styles.bgContainer}>
          <Image src="/astronaut.png"  alt='' fill/>
        </div> */}
    </div>
  )
}

export default Rightbar