import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {likeTuit, unlikeTuit} from "./tuits-list-reducer";
import {useState} from "react";
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

const TuitStats=(
    {postItem= {"authorName": "Elon Musk",
'authorImage': 'elon.jpeg',
'userhandle': '@elonmusk',
'postDate': '23h',
'authorText': `Amazing Show about  mission`,
'imgURL': 'inspi.jpeg',
'postHeading':'Countdown: Inspiration4 Mission to Space | Netflix Official Site',
'postMainContent': 'From training to launch to landing, this all-access docuseries rides along with the Inspiration4 crew on the first all-civilian orbital space ..<br> <i class="fa-solid fa-link"></i> <a href="trib.al/nx2Gfaq" class= "text-decoration-none text-secondary">netflix.com</a>',
'isVerified': 'true',
'commentCount':'4.2K',
'retuitCount':'3.5K',
'likes':'37.5K',
'liked':false}}

)=>{
  const dispatch = useDispatch();
    const likeTuitHandler = (postItem) => {
        dispatch(likeTuit(postItem))
      }
    
      const unlikeTuitHandler = (postItem) => {
        dispatch(unlikeTuit(postItem))
      }
    return(
        
        <div className="d-inline">
            <ul className=" list-group list-group-horizontal ps-2 d-flex justify-content-around">
            <li className= "list-group-item darken border-0" > <a href = "#" className = "text-secondary darken text-decoration-none"> <FontAwesomeIcon icon="comment"/> {postItem.commentCount} </a></li>
            <li className = "list-group-item darken border-0"><a href = "#" className = "darken text-secondary text-decoration-none"> <FontAwesomeIcon icon="retweet"/> <i className="fa-solid fa-retweet darken"></i> {postItem.retuitCount} </a></li>
            {
                !postItem.liked &&
                <button
                  onClick={() => likeTuitHandler(postItem)}
                  className="bg-white border-0 text-secondary">
                <FontAwesomeIcon icon="heart" className='me-1'/>
                  {postItem.likes}
                </button>
              }
              {
                postItem.liked &&
                <button
                  onClick={() => unlikeTuitHandler(postItem)}
                  className="border-0 bg-white text-secondary">
                 <FontAwesomeIcon icon="heart" className='me-1' color="red"/>
                 
                  {postItem.likes}
                </button>
              }
            <li className = "list-group-item darken border-0"> 
            <a href = "#" className = "darken text-secondary text-decoration-none"> 
            <FontAwesomeIcon icon="share"/> 
            <i className="fa-solid fa-arrow-up-from-bracket darken"></i> </a></li>           
        </ul>
 </div>
  
)

}
export default TuitStats;
     

