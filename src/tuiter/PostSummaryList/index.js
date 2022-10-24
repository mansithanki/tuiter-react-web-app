import PostSummaryItem from "./PostSummaryItem.js";
import exploreItems from "./posts.js"

const PostSummaryList = () => {
            return (`
            
            <ul class="list-group">
           ${
            exploreItems.map(x => {
                   return(PostSummaryItem(x));
                }).join('')
             }
    
         </ul>
`);
}

export default PostSummaryList;