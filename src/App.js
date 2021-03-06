import React, {useEffect, useState} from "react";
import {Route} from "react-router-dom"
import gsap from "gsap";
import "./styles/App.scss";
import Header from "./components/header";
import Navigation from "./components/navigation";

//component-pages
import About from './pages/about';
import Home from './pages/home';


//routes
const routes = [
  {path: '/', name: 'Home', Component: Home},
  {path: '/about', name: 'About', Component: About},

];

function debounce(fn, ms){
  let timer;
  return()=>{
    clearTimeout(timer);
    timer = setTimeout(()=>{
      timer=null;
      fn.apply(this, arguments);
    }, ms);
  }
}


function App() {
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth
  })
  useEffect(()=>{
    let vh = dimensions.height * .01;
    document.documentElement.style.setProperty("--vh", `${vh}px`)

    const debouncedHandleResize = debounce(function handleResize(){
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth
      });
    }, 1000)
    gsap.to('body', 0, {css: {visibility: 'visible'}});
    window.addEventListener('resize', debouncedHandleResize)
    return () => {
      window.removeEventListener('resize', debouncedHandleResize);
    }
  });
  return (
    <>
      <Header dimensions={dimensions} />
      {console.log(dimensions)}
      <div className="App">
        {routes.map(({path, Component}) => (
          <Route key={path} exact path={path}>
            <Component />
          </Route>
        ))}
      </div>
      <Navigation/>
    </>
  );
}

export default App;
