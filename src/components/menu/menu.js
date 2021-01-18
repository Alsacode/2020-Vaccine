import styles from './menu.module.scss';
import PublicIcon from '@material-ui/icons/Public';
import HealingIcon from '@material-ui/icons/Healing';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';

function Menu() {
    return (
        <div className={styles.menu}>
            <div><PublicIcon /></div>
            <div><HealingIcon /></div>
            <div><LocalHospitalIcon /></div>
        </div>
    )
}

export default Menu;