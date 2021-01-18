import styles from './item.module.scss';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

function Item(props) {
    return (
    <div className={styles.item}>
        <div className={styles.item_data}>
            <div className={styles.item_type}>COVID-19</div>
            <div className={styles.item_date}>IN 2020</div>
            <div className={styles.item_amount}>Over 92 Million's infected</div>
            <div className={styles.item_death}>Over 1.973.059 Death's</div>
            <div className={styles.item_world}>Worse place in the world</div>
            <div className={styles.item_bad}>United state</div>
        </div>
        <div className={styles.item_edit}>
            <NavigateNextIcon />
        </div>
    </div>
    );
}

export default Item;