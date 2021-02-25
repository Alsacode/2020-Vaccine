import styles from './additem.module.scss';
import ItemForm from '../../components/itemform';

function Additem(props) {
    return (
        <div className={styles.additem}>
            <h2>Buy new Vaccine</h2> 
            <ItemForm onItemSubmit={props.onItemSubmit} types={props.types} />
        </div>
    );
}

export default Additem;