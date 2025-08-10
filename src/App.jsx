import './App.css'
import {Routes, Route} from 'react-router-dom'
import { ActivitiesCards } from './components/ActivitiesCards'
import { ActivityInfo } from './components/ActivityInfo'
import QuestionsPage from './pages/QuestionsPage'
import Header from './components/Header'
import WelcomePage from './pages/WelcomePage'
import UserConfig from './pages/UserConfig'


function App() {
  return (
    <>
        <Header/>
    <Routes>
      <Route path='/' element={<WelcomePage/>}/>
      <Route path='/userconfig' element={<UserConfig/>}/>
<Route path='/activities' element={<ActivitiesCards/>}/>
<Route path='/:id' element={<ActivityInfo/>}/>
<Route path='/:id/questions' element={<QuestionsPage/>}/>
    </Routes>
    </>


  )

}
export default App
