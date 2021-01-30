import styles from './itemform.module.scss';
import Button from '../../shared/uibuttons';
import useForm from '../../shared/useform';
import { useHistory } from 'react-router-dom';


function ItemForm(props) {

  const history = useHistory();  

 const submit = () => {
     alert("SUBMIT!");
     history.push("/");

 }

 const initialState = {
     type: "",
     amount: 0,
     startDate: "",
     orderDate: "",
     arriveDate: "",
     receiver: ""
 };

    const { values, handleChange, handleSubmit} = useForm(submit, initialState, false); 
     
    const handleCancel = (event) => {
        event.preventDefault();
        history.goBack();
    }


    return(
         <div>
           <form onSubmit={handleSubmit}>
            <div className={styles.form}>
                
             <div className={styles.form_row}>
                <div>
                    <label htmlFor="type">Vaccine option's</label>
                    <select name="type" onChange={handleChange} value={values.type}>
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
                 <input type="number" name="amount" step="1" onChange={handleChange} value={values.amount}/> 

                </div>    
                <div>
                 <label htmlFor="startDate">Delivery Date</label>
                 <input type="date" name="startDate" onChange={handleChange} value={values.startDate} /> 

                </div>               
             </div>    
               <div className={styles.form_row}>

                <div>
                 <label htmlFor="orderDate">Order Date</label>
                 <input type="date" name="orderDate" onChange={handleChange} value={values.orderDate}  /> 

                </div>    
                <div>
                 <label htmlFor="arriveDate">Arrive Date</label>
                 <input type="date" name="arriveDate" onChange={handleChange} value={values.arriveDate}/> 

                </div>               
             </div>    
             
              <div className={styles.form_row}>

                <div>
                 <label htmlFor="receiver">Receiver</label>
                 <input type="text" name="receiver" onChange={handleChange} value={values.receiver} /> 

                </div>                 
             </div>    
            
             <div className={styles.form_row}>
                <div>
                    <Button  onClick={handleCancel}>Cancel</Button>

                </div>
                <div>
                    <Button primary type="submit">Add</Button>

                </div>
             </div>


                </div>    
           </form>
         </div>
        );
}

export default ItemForm;