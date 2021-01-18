import { Link } from 'react-router-dom';
import styles from './menu.module.scss';
import PublicIcon from '@material-ui/icons/Public';
import HealingIcon from '@material-ui/icons/Healing';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';

function Menu() {
    return (
        <div className={styles.menu}>
            <div><Link to="/"><PublicIcon /></Link></div>
            <div><Link to="/stats"><HealingIcon /></Link></div>
            <div><Link to="/settings"><LocalHospitalIcon /></Link></div>
        </div>
    )
}

export default Menu;