const WhoToFollowListItem=(who)=>{
    return(`
    
    <div class="list-group-item">
                        <div class="ms-1 d-inline fw-bolder"></div>
                            <img class="mt-1 float-start rounded-circle" src="${who.avatarIcon}" width="40px">
                           <div class="fw-bolder d-inline-block">${who.userName}<i class="fa fa-check-circle"></i>
                                <div class="text-secondary fw-normal">
                                @${who.handle}
                                </div>
                          </div>  
                          <div class="float-end">
                              <button class="mt-1 btn btn-primary rounded-pill">Follow</button>                          
                          </div>
                    </div>
`);

}
export default WhoToFollowListItem;
     
