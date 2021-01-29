import styles from './itemform.module.scss';

function ItemForm(props) {
    return(
         <div>
           <form>
            <div className={styles.form}>
                
             <div className={styles.form_row}>
                <div>
                    <label htmlFor="type">Vaccine option's</label>
                    <select name="type">
                        <option>Moderna</option>
                        <option>Oxford-AstraZeneca</option>
                        <option>Pfize/BioNTech</option>
                        <option>Novavax</option>
                        <option>Sanofi/GSK</option>
                    </select>
                </div>
             </div>
         <div className={styles.form_row}>

                <div>
                 <label htmlFor="amount">Amount</label>
                 <input type="number" name="amount" step="1" /> 

                </div>    
                <div>
                 <label htmlFor="startDate">Delivery Date</label>
                 <input type="date" name="startDate" /> 

                </div>               
             </div>    
               <div className={styles.form_row}>

                <div>
                 <label htmlFor="orderDate">Order Date</label>
                 <input type="date" name="orderDate"  /> 

                </div>    
                <div>
                 <label htmlFor="arriveDate">Arrive Date</label>
                 <input type="date" name="arriveDate" /> 

                </div>               
             </div>    
             
              <div className={styles.form_row}>

                <div>
                 <label htmlFor="receiver">Receiver</label>
                 <input type="text" name="receiver"  /> 

                </div>                 
             </div>    





                </div>    
           </form>
         </div>
        );
}

export default ItemForm;