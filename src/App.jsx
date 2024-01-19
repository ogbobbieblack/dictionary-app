import Nav from "./components/Nav"
import Search from "./components/Search"
import Results from "./components/Results"
import { useState } from "react"


const App = () => {

  const [darkMode, setDarkMode] = useState(true)
  const [searchText, setSearchText] = useState('')
  return (
    <div className={`${darkMode ? 'bg-black text-white' : 'bg-white text-black'} min-h-screen w-full px-4 py-8 md:px-60 `}>
      <Nav darkMode={darkMode} setDarkMode={setDarkMode}/>
      <Search setSearchText={setSearchText}/>
      <Results searchText={searchText} />
    </div>
  )
}

export default App