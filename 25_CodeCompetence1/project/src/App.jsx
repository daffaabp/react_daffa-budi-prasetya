import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import TableSewa from './pages/TableSewa';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/sewa' element={<TableSewa />}></Route>
      </Routes>
    </Router>
  )
}

export default App
