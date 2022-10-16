const IsVerified=(postItem)=>{
    if (postItem === 'true'){
        return `<i class="fa fa-check-circle pe-1" ></i>`;
    } 
    return "";
}

const isTweetCountPresent=(exploreItems)=>{
    if (exploreItems.tweets != 'NA'){
        return `<span class="text-secondary"> ${exploreItems.tweets} Tuits </span>`;
    } 
    return "";
}

const IsUserNamePresent=(exploreItems)=>{
    if (exploreItems.userName!=''){
        return ` <div class="fw-bolder d-inline">
        ${exploreItems.userName} ${IsVerified(exploreItems.isVerified)} 
        <span class="text-secondary fw-normal"> - ${exploreItems.time} </span>
        </div>`;
    } 
    return "";
}

const IsPostContentPresent=(postItem)=>{
    if (postItem.postHeading!='' && postItem.postMainContent!='' ){
        return `<div class = "ps-5">
        <img class = "d-block position-relative img-fluid rounded-top border border-secondary " src="${postItem.imgURL}"/> 
        <div class = "d-block border border-secondary rounded-bottom">
    <h6 class="d-inline-block text-wrap fw-normal ps-2 pt-1">${postItem.postHeading}</h6>
    <p class="text-wrap text-secondary ps-2">${postItem.postMainContent}</p>  
        </div> `;
    } 
    return `<div class = "ps-5">
    <img class = "d-block position-relative img-fluid rounded border border-secondary " src="${postItem.imgURL}"/> 
    <div class = "d-block">
  
    </div>`;
}

const IsPhotoPresent=(postItem)=>{
    if (postItem.imgURL!=''){
        return ` <div class = "wd-tuitphoto d-inline-block">
        ${IsPostContentPresent(postItem)}
        `;
    } 
    return "";
}
// ${IsVerified(postItem.isVerified)}
//${IsContentPresent(postItem)}
const PostSummaryItem=(postItem)=>{
    return(`
    
    <div><img class = "m-2 mt-0 float-start rounded-circle" width="48px" height="48px" src="${postItem.authorImage}"/>
    <div class = "wd-post p-12">
    <img class = "float-end" height="25px" width="25px" src="../images/dots.png"/>
    <div class ="d-inline">    
    <div class="ms-12 d-inline text-white">  ${postItem.authorName} ${IsVerified(postItem.isVerified)} <span class = "text-secondary">${postItem.userhandle} · ${postItem.postDate}</span></div>
        <div class="text-wrap d-block text-white"> ${postItem.authorText} 
        ${IsPhotoPresent(postItem)}
        
    <div class="d-inline">
        <ul class=" list-group list-group-horizontal ps-2 d-flex justify-content-between">
        <li class= "list-group-item darken border-0" > <a href = "#" class = "text-secondary darken text-decoration-none"><i class="fa-regular fa-comment darken"></i> ${postItem.commentCount} </a></li>
        <li class = "list-group-item darken border-0"><a href = "#" class = "darken text-secondary text-decoration-none"><i class="fa-solid fa-retweet darken"></i> ${postItem.retuitCount} </a></li>
        <li class="list-group-item darken border-0"> <a href = "#" class = "darken text-secondary text-decoration-none"><i class="fa-regular fa-heart darken "></i> ${postItem.likeCount} </a></li>
        <li class = "list-group-item darken border-0"> <a href = "#" class = "darken text-secondary text-decoration-none"><i class="fa-solid fa-arrow-up-from-bracket darken"></i> </a></li>           
    </ul>
 </div>
    </div>
        
     
    </div>
`);

}
export default PostSummaryItem;
     


