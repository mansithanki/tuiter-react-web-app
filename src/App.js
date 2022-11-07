import Labs from "./labs";
import HelloWorld from "./labs/a6/hello-world";
import Tuiter from "./tuiter";
import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";
import { library } from '@fortawesome/fontawesome-svg-core'
import {faGreaterThan, faArrowLeft, faComment, faRetweet, faHeart, faShare,faCheckCircle} from '@fortawesome/free-solid-svg-icons'

library.add(faGreaterThan,faArrowLeft,faRetweet, faHeart, faShare, faComment,faCheckCircle)

function App() {
  return (
    <BrowserRouter>
    <div className="container">
        <Routes>
            <Route path="/*" element={<Labs/>}/>
            {/* <Route index element={<Labs/>}/> */}
            <Route path="/hello"
                   element={<HelloWorld/>}/>
            <Route path="/tuiter/*" element={<Tuiter/>}/>

        </Routes>
    </div>
 </BrowserRouter>
 
 
  );
}
export default App;