import who from "./who.js";
import WhoToFollowListItem from "./WhoToFollowListItem.js";

const WhoToFollowList = () => {
  let whoList = '';
  who.forEach(item => whoList += WhoToFollowListItem(item))
  return (`
    <ul class="list-group">
      <li class="list-group-item">
        Who To Follow
      </li>
      ${whoList}
    </ul>
 `);
}

$('#wd-who-to-follow-list').append(WhoToFollowList())

export default WhoToFollowList;


