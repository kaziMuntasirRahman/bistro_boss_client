import { Outlet } from "react-router-dom";
import Navbar from "../../Components/shared/Navbar";
import Footer from "../../Components/shared/Footer";
import ScrollToTop from "../../hooks/ScrollToTop";

const welcomeNote = `
                        .       
                        ++                      
               .       +++     .                 
               ++     +++      ++               
               ++    +++       ++               
              ++    +++       ++                
             ++     +++      ++                 
            ++       ++     ++                  
            ++        '     ++                   
             '      ++++     '                    
                   ++++++                    
                 ++++++++++                  
            +++++++++++++++++++++              
          +++++++++++++++++++++++++           
        +++++++++^+^+^+++++++++++++++          
      +++++++++++ + + ++++++++++++++++        
     ++++++++++++ + + ++++  ++++++++++++       
    +++++++++++++ + + ++++  +++++++++++++      
    +++++++++++++++ ++++++  +++++++++++++     
   ++++++++++++++++ +++++++ ++++++++++++++    
   ++++++++++++++++ +++++++ ++++++++++++++    
 --------------------------------------------
==== welcome to bistro boss restaurant🍲 ====
`

console.log(welcomeNote);

const Root = () => {
  return (
    <div className="min-h-screen">
      {/* <ScrollToTop /> */}
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;