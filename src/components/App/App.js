import { Header } from '../Header';
import { Content } from '../Content';
import { Footer } from '../Footer';
import styles from './App.module.scss';

export const App = () => {
  return (
    <div className={styles.App}>
      <Header />
      <Content />
      <Footer />
    </div>
  );
};
