
import Content from './components/Content/Index';
import Footer from './components/Footer';
import Header from './components/Header/Index';
import { TodoProvider } from './contexts/TodoContext';
import './index.css';

function App() {
  return (
    <TodoProvider>
      <section className="todoapp">
        <Header/>
        <Content/>
      </section>
      <Footer/>
    </TodoProvider>
  );
}

export default App;
