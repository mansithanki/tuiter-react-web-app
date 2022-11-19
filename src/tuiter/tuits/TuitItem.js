import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import TuitStats from './TuitsStats'
import {deleteTuitThunk} from "../../services/tuits-thunks";
// import { deleteTuit } from './tuits-list-reducer';
import {useDispatch} from "react-redux";

const IsVerified=(postItem)=>{
    if (postItem == true){
        return <FontAwesomeIcon icon="check-circle"/>
    } 
    return ""
}

const IsPostContentPresent=(postItem)=>{
    if (postItem.title && postItem.topic){
        return <div className = "ps-5 pe-5">
        {/* <img className = "d-block position-relative img-fluid rounded-top border border-secondary" src={`/tuiter/images/${postItem.imgURL}`}/>  */}
        <div className = "d-block p-1 m-1">
            
            <p className="ps-0 text-wrap d-block text-secondary ms-0 mb-0">{postItem.topic}</p>  
            <div className="d-inline-flex mt-0 ps-2 text-bolder text-wrap fw-bolder">{postItem.title}</div>
            <div className="d-inline-flex text-wrap text-break text-dark mt-1 ps-2 pe-3"> {postItem.tuit} </div>
        </div>
        </div>
    } 
    return <div className = "ps-5 pe-5">
            {/* <img className = "d-block position-relative img-fluid rounded border border-secondary " src={`/tuiter/images/${postItem.imgURL}`}/>  */}
            <div className = "d-block">
            <div className="d-inline-flex text-wrap text-break text-dark pe-3"> {postItem.tuit} </div>
         </div></div> 
}

const IsPhotoPresent=(postItem)=>{
      if (postItem.image!=''){
          return <div className = "d-inline-block ps-2">
          {IsPostContentPresent(postItem)}   
          </div>
          } 
      return ""
  }

const TuitItem=(
    {postItem= {"username": "Elon Musk",
    '_id':'123',
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
   dispatch(deleteTuitThunk(id));
 }


    return(
    <div className = "pt-2 border border-secondary">
    <div className ="text-secondary d-inline"><img className = "m-2 mt-0 float-start rounded-circle" width={48} height={48} src={`/tuiter/images/${postItem.image}`}/>
    <i className="bi bi-x-lg float-end me-2"
            onClick={() => deleteTuitHandler(postItem._id)}></i>
    
     <div className="d-inline mb-0">
        <div className="ms-12 d-inline-block fw-bold text-dark bolder pe-2">  
            {postItem.username} {IsVerified(postItem.liked)}
            <span className = "text-secondary fw-normal"> {postItem.handle} · {postItem.time}
            </span>
        </div>
      
            {IsPostContentPresent(postItem)}
            {/* <div className="d-inline-flex text-wrap text-break text-dark ps-3 pe-3"> {postItem.tuit}  */}
            {/* </div> */}
        </div>
        </div>  
        
        <div className="d-inline">
        <TuitStats
               key={postItem._id} 
               postItem={postItem}/>
        
 </div>
    </div>
        
     
    
)

}
export default TuitItem;
     


