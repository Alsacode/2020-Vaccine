import styles from './additem.module.scss';
import ItemForm from '../../components/itemform';

function Additem(props) {
    return (
        <div className={styles.additem}>
            <h2>Add new stuff</h2>
            <ItemForm />
        </div>
    );
}

export default Additem;