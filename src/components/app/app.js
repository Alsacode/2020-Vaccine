import { BrowserRouter as Router, Route } from 'react-router-dom';
import styles from './app.module.scss';
import Header from '../header';
import Content from '../content';
import Items from '../../routes/items';
import Stats from '../../routes/stats';
import Settings from '../../routes/settings';
import Additem from '../../routes/additem';
import Menu from '../menu';
import { ButtonAppcontainer } from '../../shared/uibuttons';
import testdata from '../../testdata.js';
function App() {
  return (
    <ButtonAppcontainer>
    <div className={styles.app}>
   <Router>
       <Header />
          <Content>
           <Route exact path="/">
             <Items data={testdata} />
           </Route>
           <Route path="/stats">
             <Stats />
           </Route>
           <Route path="/settings">
             <Settings />
           </Route>
           <Route path="/add">
             <Additem />
           </Route>
         </Content>
       <Menu />
    </Router>
    </div>
    </ButtonAppcontainer>
  );
}

export default App;
