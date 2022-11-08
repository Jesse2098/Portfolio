import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Experience from './pages/Experience'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import ProjectDisplay from './pages/ProjectDisplay'


//you ended here on this file . video timeSpot was at 01.04.00
export default function App() {
    return(
        <div className='App'>
            <Router>
                <Navbar/>
                <Routes>
                    <Route path='/' element={<Home/>} />
                    <Route path='/Projects' element={<Projects/>} />
                    <Route path='/Project/:id' element={<ProjectDisplay/>}/>     
                    <Route path='/Experience' element={<Experience/>} />
                </Routes>
                <Footer/>
            </Router>
        </div>
    )
}






