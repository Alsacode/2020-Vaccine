import styles from './app.module.scss';
import Header from '../header';
import Content from '../content';
import Items from '../items';
import Menu from '../menu';
import { ButtonAppcontainer } from '../../shared/uibuttons';
function App() {
  return (
    <ButtonAppcontainer>
    <div className={styles.app}>
      <Header />
      < Content>
         <Items />
      </Content>
      <Menu />
    </div>
    </ButtonAppcontainer>
  );
}

export default App;
