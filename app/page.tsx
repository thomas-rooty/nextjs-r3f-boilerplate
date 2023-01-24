import styles from './page.module.css'
import Scene from "@/app/scene";

const Home = () => {
  return (
    <div className={styles.canvas}>
      <Scene />
    </div>
  )
}

export default Home
