import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './src/Home'
import About from './src/about'
import Contact from './src/contact'
import Service from './src/service'
import Project from './src/project'
import NavigationBar from './components/NavigationBar'

const MainRouter = () => {
        return (<div>
                <NavigationBar/>
                <Routes>
                        
                        <Route exact path="/home" element={<Home />} />
                        <Route exact path="/about" element={<About />} />
                        <Route exact path="/service" element={<Service />} />
                        <Route exact path="/project" element={<Project />} />
                        <Route exact path="/contact" element={<Contact />} />
                        
                </Routes>
        </div>
        )
}
export default MainRouter




