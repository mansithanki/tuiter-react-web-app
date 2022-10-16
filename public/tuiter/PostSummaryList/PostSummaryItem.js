const IsVerified=(exploreItems)=>{
    if (exploreItems == 'true'){
        return `<i class="fa fa-check-circle" ></i>`;
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


const PostSummaryItem=(exploreItems)=>{
    return(`
    
    <li class="list-group-item">
                        <div class="row">
                            <div class="col-9">
                                <div class="text-secondary">
                                ${exploreItems.topic}  
                                </div>
                                ${IsUserNamePresent(exploreItems)} 
                                
                                <div class="fw-bolder">
                                ${exploreItems.title}
                                
                                </div>
                                ${isTweetCountPresent(exploreItems)}
                            </div>
                            <div class="col-3">
                                <img class="float-end" src= "${exploreItems.image}" height="100px">
                            </div>
                        </div>
                    </li>
`);

}
export default PostSummaryItem;
     