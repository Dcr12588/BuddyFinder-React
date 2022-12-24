import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './components/home/home'
import AboutUs from './components/aboutUs/aboutUs'
import AddYourBuddy from './components/addYourBuddy/addYourBuddy'
import YourBuddies from './components/yourBuddies/yourBuddies'
import Header from './components/nav/header'
import Auth from './components/auth/auth'

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path="/aboutUs" element={<AboutUs/>}/>
        <Route path="/addbuddy" element={<AddYourBuddy/>}/>
        <Route path="/yourbuddies" element={<YourBuddies/>}/>
        <Route path="/auth" element={<Auth/>}/>
      </Routes>
    </div>
  );
}

export default App;
