import logo from './logo.svg';
import './App.css';
import { Box } from '@mui/material';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Navbar from './components/Navbar';
import  Home  from './pages/Home';
import ExerciseDetail from './pages/ExerciseDetail';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">                 
    {/* xl means extra large screens sizes  //m is for margin  */}
      <Box width="400px" sx={{width:{xl:'1490px'}}} m="auto">
        <Navbar/>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise/:id" element={<ExerciseDetail />} />
      </Routes>
    </BrowserRouter>
    <Footer/>
      </Box>
    </div>
  );
}

export default App;
