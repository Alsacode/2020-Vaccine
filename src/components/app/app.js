import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
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
import testdata from '../../testdata.js';
function App() {

  const [data, setData ] = useState([]);
  const [typelist, setTypelist] = useState([]);

  useEffect(() => {
    setData(testdata);
    setTypelist(["Moderna", "Oxford-AstraZeneca", "Pfize/BioNTech", "Novavax", "Sanofi/GSK"]);
    }, []);

 const handleItemSubmit = (newitem) => {
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

 }

 const handleItemDelete = (id) => {
  let storeddata = data.slice();
  storeddata = storeddata.filter(item => item.id !== id )
  setData(storeddata);
 }

 const handleTypeSubmit = (newtype) => {
  let storedtypelist = typelist.slice();
  storedtypelist.push(newtype);
  storedtypelist.sort();
  setTypelist(storedtypelist);
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
             <Stats />
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
