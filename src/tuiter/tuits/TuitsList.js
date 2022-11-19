import React, {useEffect} from "react";
// import exploreItems from "./postarray.json"
import {useDispatch, useSelector}
  from "react-redux";

import TuitItem from "./TuitItem";
import {findTuitsThunk}
  from "../../services/tuits-thunks";

// import TuitStats from "./TuitsStats";



const TuitsList = () => {
    const {tuits, loading} = useSelector(state => state.tuitsData)
    const dispatch = useDispatch();
    console.log(loading);
    console.log(tuits);
    useEffect(() => {
      dispatch(findTuitsThunk())
    }, [])
    return(
   
            
            <ul className="list-group">
              {
       loading &&
       <li className="list-group-item">
         Loading...
       </li>
     }

           {
                tuits.map(postItem =>
                  <TuitItem
                    key={postItem._id}
                    postItem={postItem}
                    />

                )

             }
    
         </ul>
);
}

export default TuitsList;