import styles from './itemform.module.scss';
import Button from '../../shared/uibuttons';
import useForm from '../../shared/useform';
import { useHistory } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import CancelIcon from '@material-ui/icons/Cancel';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import HomeIcon from '@material-ui/icons/Home';

 function ItemForm(props) {

  const history = useHistory();  

 const submit = () => {
     let storedvalues = Object.assign({}, values);
     storedvalues.amount = parseFloat(storedvalues.amount);
     storedvalues.id = storedvalues.id ? storedvalues.id : uuidv4();
     props.onItemSubmit(storedvalues);
     history.push("/");

 }

 const initialState = props.data ? props.data : { 
     type: props.types ? props.types[0] : "" ,
     amount: 0,
     startDate: new Date().toISOString().substring(0,10),
     orderDate: "",
     arriveDate: "",
     receiver: ""
 };


    const { values, handleChange, handleSubmit} = useForm(submit, initialState, false); 
     
    const handleCancel = (event) => {
        event.preventDefault();
        history.goBack();
    }
 
    const handleDelete = (event) => {
       event.preventDefault();
       props.onItemDelete(values.id);
       history.push("/");
    }

    return(
         <div>
           <form onSubmit={handleSubmit}>
            <div className={styles.form}>
                
             <div className={styles.form_row}>
                <div>

                    <label htmlFor="type">Vaccine option's</label>
                    <select name="type" onChange={handleChange} value={values.type} required>
                    { props.types.map( (type) =>  <option key={type} value={type}>{type}</option>  )} 
                       
                    </select>
                </div>
             </div>
         <div className={styles.form_row}>

                <div>
                 <label className="label__option" htmlFor="amount">Amount</label>
                 <input type="number" name="amount" step="0.01" onChange={handleChange} value={values.amount} required /> 

                </div>    
                <div>
                 <label className="label__option" htmlFor="startDate">Order Date</label>
                 <input type="date" name="startDate" onChange={handleChange} value={values.startDate} required /> 

                </div>               
             </div>    
               <div className={styles.form_row}>

                <div>
                 <label className="label__option" htmlFor="orderDate">Delivery Date</label>
                 <input type="date" name="orderDate" onChange={handleChange} value={values.orderDate}  /> 

                </div>    
                <div>
                 <label className="label__option" htmlFor="arriveDate">Arrive Date</label>
                 <input type="date" name="arriveDate" onChange={handleChange} value={values.arriveDate}/> 

                </div>               
             </div>    
             
              <div className={styles.form_row}>

                <div>
                 <label htmlFor="receiver">Receiver</label>
                 <input type="text" name="receiver" onChange={handleChange} value={values.receiver} required /> 

                </div>                 
             </div>    
            
             <div className={styles.form_row}>
                <div>
                    <Button  onClick={handleCancel}><CancelIcon/></Button>

                </div>
                <div>
                    <Button  type="submit"> <AddCircleOutlineIcon>{ props.data ? "SAVE" : "ADD"}</AddCircleOutlineIcon></Button>

                </div>
             </div>


             {props.onItemDelete ? 
               <div className={styles.form_row}>
                <div>
                     <Button  onClick={handleDelete}><RemoveCircleOutlineIcon/></Button>
                       </div>
                       <div>
                           {/* The home button haven't yet defined just for show.  */}
                            <Button  onClick={handleCancel}><HomeIcon/></Button>
                        </div>
                    
                 </div> : "" }          
                        
                </div>    
           </form>
         </div>
        );
}

export default ItemForm;