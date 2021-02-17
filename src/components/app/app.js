import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { useFirestore, useFirestoreCollectionData }  from 'reactfire';
import 'firebase/firestore';
import styles from './app.module.scss';
import Header from '../header';
import Content from '../content';
import Items from '../../routes/items';
import Stats from '../../routes/stats';
import Settings from '../../routes/settings';
import Additem from '../../routes/additem';
import EditItem from '../../routes/edititem'
import Menu from '../menu';
import { ButtonAppcontainer } from '../../shared/uibuttons';
//import testdata from '../../testdata.js';

function App() {

  const [data, setData ] = useState([]);
  const [typelist, setTypelist] = useState([]);

  const itemCollectionRef = useFirestore().collection('item');
  const {data: itemCollection } = useFirestoreCollectionData(itemCollectionRef.orderBy("startDate", "desc"), {initialData: [], idField: "id"});  

  const typeCollectionRef = useFirestore().collection('type');
  const { data: typeCollection } = useFirestoreCollectionData(typeCollectionRef.orderBy("type"), {initialData: []});



   useEffect(() => {
     setData(itemCollection);
   }, [itemCollection]);

   useEffect(() => {
      const types = typeCollection.map(Obj => Obj.type);
      setTypelist(types);
   }, [typeCollection]);


 const handleItemSubmit = (newitem) => {


itemCollectionRef.doc(newitem.id).set(newitem);


            /*
            let storeddata = data.slice();
            const index = storeddata.findIndex(item => item.id === newitem.id);
            if (index >= 0 ) {
              storeddata[index] = newitem;
            } else {
              storeddata.push(newitem);
            }


          storeddata.sort( (a,b) => {
            const aData = new Date (a.startDate);
            const bData = new Date (b.startDate);
            return bData.getTime() - aData.getTime();

          } );

            setData(storeddata);
            */
 }

 const handleItemDelete = (id) => {
   itemCollectionRef.doc(id).delete();

          
          /*
          let storeddata = data.slice();
          storeddata = storeddata.filter(item => item.id !== id )
          setData(storeddata);
          */
 }

 const handleTypeSubmit = (newtype) => {
   typeCollectionRef.doc().set({type: newtype});

         /* 
          let storedtypelist = typelist.slice();
          storedtypelist.push(newtype);
          storedtypelist.sort();
          setTypelist(storedtypelist);
          */
 }

  return (
    <ButtonAppcontainer>
    <div className={styles.app}>
   <Router>
       <Header />
          <Content>
           <Route exact path="/">
             <Items data={data} />
           </Route>
           <Route path="/stats">
             <Stats data={data}/>
           </Route>
           <Route path="/settings">
             <Settings types={typelist} onTypeSubmit={handleTypeSubmit} />
           </Route>
           <Route path="/add">
             <Additem onItemSubmit={handleItemSubmit} types={typelist} />
           </Route>
           <Route path="/edit/:id">
            <EditItem onItemSubmit={handleItemSubmit} data={data} types={typelist} onItemDelete={handleItemDelete} />   
          </Route> 
         </Content>
       <Menu />
    </Router>
    </div>
    </ButtonAppcontainer>
  );
}

export default App;
