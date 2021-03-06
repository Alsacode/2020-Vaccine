import styles from './item.module.scss';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import { Link } from 'react-router-dom';

function Item(props) {
    // locale is the dateString for currency.
    const locale = "fi-FI";
    const startDate = new Date(props.data.startDate).toLocaleDateString(locale);
    const numberFormat = new Intl.NumberFormat(locale, {style: 'currency', currency: 'EUR'})
    const amount = numberFormat.format(props.data.amount);
     
    let average;
    let order;
    // when the order Date is getting in then the arrive Date must be working.
    if (props.data.orderDate && props.data.arriveDate) {
        const orderDate = new Date(props.data.orderDate);
        const arriveDate = new Date(props.data.arriveDate);
        order = orderDate.toLocaleDateString(locale) + " - " + arriveDate.toLocaleDateString(locale);
        const days = (arriveDate - orderDate) / (1000*60*60*24);
        average = numberFormat.format(props.data.amount / days * 30);
    }

    return ( 
    <div className={styles.item}>
        <div className={styles.item_data}>
            <div className={styles.item_type}>{props.data.type}</div>
            <div className={styles.item_amount}>{amount}</div>
            <div className={styles.item_date}>{startDate}</div>
            <div className={styles.item_orderDate}>{order}</div>
            <div className={styles.item_receiver}>{props.data.receiver}</div>
            <div className={styles.item_averagePrice}>{average ? average + "/kk" : ""}</div>
        </div>
        <div className={styles.item_edit}>
         <Link to={"/edit/"+props.data.id}><NavigateNextIcon /></Link>
         
         </div>
    </div>
    );
}

export default Item;