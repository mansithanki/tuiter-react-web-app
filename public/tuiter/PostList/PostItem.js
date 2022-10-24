const IsVerified=(postItem)=>{
    if (postItem === 'true'){
        return `<i class="fa fa-check-circle pe-1" ></i>`;
    } 
    return "";
}

const IsPostContentPresent=(postItem)=>{
    if (postItem.postHeading!='' && postItem.postMainContent!='' ){
        return `<div class = "ps-5 pe-5">
        <img class = "d-block position-relative img-fluid  border border-secondary" src="${postItem.imgURL}"/> 
        <div class = "d-block border border-secondary ">
    <h6 class="d-inline-block text-wrap fw-normal ps-2 pt-1">${postItem.postHeading}</h6>
    <p class="text-wrap text-secondary ps-2 d-block">${postItem.postMainContent}</p>  
        </div> `;
    } 
    return `<div class = "ps-5 pe-5">
    <img class = "d-block position-relative img-fluid  border border-secondary" src="${postItem.imgURL}"/> 
    <div class = "d-block">
  
    </div>`;
}

const IsPhotoPresent=(postItem)=>{
    if (postItem.imgURL!=''){
        return ` <div class = "wd-tuitphoto d-inline-block ps-2">
        ${IsPostContentPresent(postItem)}
        `;
    } 
    return "";
}

const PostSummaryItem=(postItem)=>{
    return(`
    

    <div class = "pt-2 border border-secondary rounded-top ">
    <div class ="text-secondary d-inline"><img class = "m-2 mt-0 float-start rounded-circle" width="48px" height="48px" src="${postItem.authorImage}"/>
    <img class = "float-end pe-1" height="25px" width="25px" src="../images/greymenu.png"/>
    
     <div class="d-inline">
    <div class="ms-12 d-inline text-white">  ${postItem.authorName} ${IsVerified(postItem.isVerified)} <span class = "text-secondary">${postItem.userhandle} · ${postItem.postDate}</span></div>
        <div class="d-block text-wrap text-break text-white ps-5"> ${postItem.authorText} </div></div>
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
     


