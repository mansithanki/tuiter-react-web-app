import React from "react";
// import exploreItems from "./postarray.json"
import TuitItem from "./TuitItem";
import TuitStats from "./TuitsStats";

import {useSelector} from "react-redux";


const TuitsList = () => {
    const tuitsArray = useSelector(state => state.tuitslist)
            return (
            
            <ul className="list-group">
           {
                tuitsArray.map(postItem =>
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