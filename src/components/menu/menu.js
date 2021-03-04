import { Link } from 'react-router-dom';
import styles from './menu.module.scss';
import ReceiptIcon from '@material-ui/icons/Receipt';
import PublicIcon from '@material-ui/icons/Public';
import ExposureIcon from '@material-ui/icons/Exposure';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';

function Menu() {
    return (
        <div className={styles.menu}>
            <div><Link to="/"><ReceiptIcon /></Link></div>
            <div><Link to="/stats"><ExposureIcon /></Link></div>
            <div><Link to="/settings"><AssignmentIndIcon/></Link></div>
            <div><Link to="/globalMap"><PublicIcon /></Link></div>
        </div>
    )
}

export default Menu;