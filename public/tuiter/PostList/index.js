import PostItem from "./PostItem.js";
import exploreItems from "./postarray.js"

const PostList = () => {
            return (`
            
            <ul class="list-group">
           ${
            exploreItems.map(x => {
                   return(PostItem(x));
                }).join('')
             }
    
         </ul>
`);
}

export default PostList;