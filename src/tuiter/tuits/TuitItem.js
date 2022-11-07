import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import TuitStats from './TuitsStats'
import { deleteTuit } from './tuits-list-reducer';
import {useDispatch} from "react-redux";

const IsVerified=(postItem)=>{
    if (postItem === 'true'){
        return <FontAwesomeIcon icon="check-circle"/>
    } 
    return ""
}

const IsPostContentPresent=(postItem)=>{
    if (postItem.postHeading!='' && postItem.postMainContent!='' ){
        return <div className = "ps-5 pe-5">
        <img className = "d-block position-relative img-fluid rounded-top border border-secondary" src={`/tuiter/images/${postItem.imgURL}`}/> 
        <div className = "d-block border border-secondary rounded-bottom">
            <h6 className="d-inline-block text-wrap fw-bolder ps-2 pt-2">{postItem.postHeading}</h6>
            <p className="text-wrap text-secondary ps-2 d-block">{postItem.postMainContent}</p>  
        </div>
        </div>
    } 
    return <div className = "ps-5 pe-5">
            <img className = "d-block position-relative img-fluid rounded border border-secondary " src={`/tuiter/images/${postItem.imgURL}`}/> 
            <div className = "d-block">
         </div></div> 
}

const IsPhotoPresent=(postItem)=>{
      if (postItem.imgURL!=''){
          return <div className = "d-inline-block ps-2">
          {IsPostContentPresent(postItem)}   
          </div>
          } 
      return ""
  }

const TuitItem=(
    {postItem= {"authorName": "Elon Musk",
    'id':'123',
'authorImage': 'elon.jpeg',
'userhandle': '@elonmusk',
'postDate': '23h',
'authorText': `Amazing Show about  mission`,
'imgURL': 'inspi.jpeg',
'postHeading':'Countdown: Inspiration4 Mission to Space | Netflix Official Site',
'postMainContent': 'From training to launch to landing, this all-access docuseries rides along with the Inspiration4 crew on the first all-civilian orbital space ..<br> <i className="fa-solid fa-link"></i> <a href="trib.al/nx2Gfaq" className= "text-decoration-none text-secondary">netflix.com</a>',
'isVerified': 'true',
'commentCount':'4.2K',
'retuitCount':'3.5K',
'likeCount':'37.5K'}}

)=>{
    const dispatch = useDispatch();
        const deleteTuitHandler = (id) => {
        dispatch(deleteTuit(id));
        }

    return(
    <div className = "pt-2 border border-secondary">
    <div className ="text-secondary d-inline"><img className = "m-2 mt-0 float-start rounded-circle" width={48} height={48} src={`/tuiter/images/${postItem.authorImage}`}/>
    <i className="bi bi-x-lg float-end me-2"
            onClick={() => deleteTuitHandler(postItem._id)}></i>
    
     <div className="d-inline">
        <div className="ms-12 d-inline-block fw-bold text-dark bolder pe-2">  
            {postItem.authorName} {IsVerified(postItem.isVerified)} 
            <span className = "text-secondary fw-normal">{postItem.userhandle} · {postItem.postDate}
            </span>
        </div>
        <div className="d-block text-wrap text-break text-dark ps-5"> {postItem.authorText} 
        </div>
        </div>  
        
        <div className="d-inline">
        <TuitStats
               key={postItem._id} 
               postItem={postItem}/>
        
 </div>
    </div>
        
     
    </div>
)

}
export default TuitItem;
     


