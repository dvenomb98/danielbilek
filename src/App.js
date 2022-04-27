import React from "react"
import Header from "./Components/Header";
import Projects from "./Components/Projects";
import About from "./Components/About"
import Form from "./Components/Form"
import Footer from "./Components/Footer"
import "aos/dist/aos.css"
import Aos from "aos"




function App() {

const [language, setLanguage] = React.useState(false)

React.useEffect(() => {
  Aos.init({duration: 1000})

},[])




  return (
    <div className="bg-slate-200 min-h-screen">
        <Header
          language={language} 
          setLanguage={setLanguage} 
        />

        <Projects 
        language={language} 
        />
        <About 
        language={language}
        />
        <Form
        language={language}
        />
        <Footer 
        language={language}
        />
    </div>
    
  );
}

export default App;
