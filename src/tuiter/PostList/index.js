import React from "react";
import exploreItems from "./postarray.json"
import PostItem from "./PostItem.js";


const PostList = () => {
            return (
            
            <ul class="list-group">
           {
                exploreItems.map(postItem =>
                  <PostItem
                    key={postItem._id}
                    postItem={postItem}
                    />
                )

             }
    
         </ul>
);
}

export default PostList;