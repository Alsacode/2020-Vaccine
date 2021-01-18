import styles from './app.module.scss';
import Header from '../header';
import Content from '../content';
import Items from '../items';
import Menu from '../menu';
function App() {
  return (
    <div className={styles.app}>
      <Header />
      < Content>
         <Items />
      </Content>
      <Menu />
      
    
    </div>
  );
}

export default App;
