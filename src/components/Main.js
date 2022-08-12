import { useEffect, useState } from "react"
import { Routes, Route } from "react-router-dom"
import Index from "../pages/Index"
// import Show from "../pages/Show"
import About from "../pages/About"
import Create from "../pages/Create"
// import Update from "../pages/Update"

function Main(props) {
    const [culture, setCulture] = useState(null)
  
    const URL = "https://isitgayapi.herokuapp.com/culture"
  
    const getCulture = async () => {
      const response = await fetch(URL)
      const data = await response.json()
      setCulture(data)
    }
  
    const createCulture = async (cult) => {
      await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "Application/json",
        },
        body: JSON.stringify(cult),
      })
      // update list of people
      getCulture()
    }
    
    useEffect(() => {
        getCulture()
    }, [])

  return (
    <main>
        <Routes>
            <Route exact path="/" element={<Index culture={culture} />} />
            {/* <Route path="/culture/:id" element={<Show culture={culture} />} /> */}
            <Route path="/about" element={<About />} />
            <Route path="/create" element={<Create createCulture={createCulture}  />} />
            {/* <Route path="/culture/:id" element={<Update />} /> */}
        </Routes>
    </main>
  )
}

export default Main