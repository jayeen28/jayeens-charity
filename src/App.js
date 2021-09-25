import './App.css';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';

function App() {
  return (
    <div className="jc-app">
      <header className="jc-head">
        <Header></Header>
      </header>
      <main>
        <Main></Main>
      </main>
    </div>
  );
}

export default App;
