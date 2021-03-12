import { Link } from 'react-router-dom';
import Item from '../../components/item';
import { FloatingButton, ButtonContainer } from '../../shared/uibuttons';
import useForm from '../../shared/useform';
import "./items.module.scss";



function Items(props) {
   const submit = () => {};

   const { values, handleChange} = useForm(submit, {filter: ""}, false); 
   
   

   const types = props.typelist.map((type) => <option key={type} value={type}>{type}</option>);

   types.unshift(<option key="empty" value="">Option's...</option>);

   const filteredItems = values.filter ?  props.data.filter((item) => item.type === values.filter) : props.data;

   const items = filteredItems.map((item) => <Item key={item.id} data={item} /> );

   const filteredItemCount = filteredItems.length;
   

   return (
    <ButtonContainer className="btn-container">
       <div>
          <form>
           <h5>Option's of Vaccine's:</h5> 
          <select className="filter" name="filter" onChange={handleChange}>
               {types}
          </select>
          </form>
       </div>
       <div className="filter-text">
          <div style={{fontSize: "1.2rem", paddingLeft:"1rem", marginTop: "1rem",
            boxShadow: "1px 1px 1px 1px"
         }}>
            You Have {filteredItemCount} {filteredItemCount  !== 0 ? "Order" : "No Orders."} <br/>
             in Total your order of different Vaccine's is {props.data.length}.
             </div>
           { items}
           <br/>
           <br/>
           <br/>
           <br/>
           <Link to="/add"><FloatingButton  >+</FloatingButton></Link>
       </div>
         <div>
       <button style={{color: "#fff", backgroundColor: "#c0392b"}}  onClick={props.onDeleteAll}>REMOVE</button>
       </div>
    </ButtonContainer>
   );

}

export default Items;

