//import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import Home from './Component/Home';
import AddStudent from './Component/AddStudent';
import DeleteStudent from './Component/DeleteStudent';
import AddBook from './Component/AddBook';
import DeleteBook from './Component/DeleteBook';
import Header from './Component/Header';
function App() {
  return (
   <BrowserRouter>
   <Header/>
   <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/addStudent" element={<AddStudent />} />
    <Route path="/deleteStudent" element={<DeleteStudent />} />
    <Route path="/addBook" element={<AddBook />} />
    <Route path="/deleteBook" element={<DeleteBook />} />
    
   </Routes>
   </BrowserRouter>
  );
}

export default App;
