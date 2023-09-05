import View from '../../routes'
import SideMenu from '../../components/sidemenu/SideMenu'
import styles from './style.module.css'
import NavBar from '../../components/navbar/Navbar'

function Dashboard() {
  return (
    <>
      <NavBar></NavBar>
      <div className={styles.mainContainer}>
        <SideMenu />
        <View></View>
      </div>
    </>
  )
}

export default Dashboard