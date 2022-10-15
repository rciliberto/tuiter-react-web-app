const WhoToFollowListItem = (who) => {
  return (`
    <li class="list-group-item" href="#">
    
      <div class="row">
        <div class="col-8 col-xxl-9 col-xl-8 d-flex">
          <div class="flex-wrap align-items-center me-3">
            <img style="width: 48px; height: 48px;"
                 class="rounded-circle"
                 src="${who.avatarIcon}" alt="Profile Picture"/>
          </div>
          <div class="float-right">
            <span class="text-nowrap">${who.userName} <i class="fa fa-check-circle"></i></span><br/>
            <span class="text-secondary">@${who.handle}</span>
          </div>
        </div>
        <div class="col-4 col-xxl-3 col-xl-4 d-flex flex-wrap align-items-center">
          <button class="btn btn-primary rounded-pill">Follow</button>
        </div>
      </div>
        
    </li>
 `);
}
export default WhoToFollowListItem;

$('#wd-who-to-follow-list-item').append(WhoToFollowListItem({
  avatarIcon: '../../images/Relativity-Space.jpeg',
  userName: 'Relativity Space',
  handle: 'relativityspace',
}))