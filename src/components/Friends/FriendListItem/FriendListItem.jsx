import PropTypes from 'prop-types'; 
import {ItemFriend, StatusFriend, AvatarFriend, FriendName} from "./FriendListItem.styled"

export const FriendListItem = ({data}) => {
    const {avatar, name, isOnline} = data;
    return (
        <ItemFriend>
           <StatusFriend style = {{backgroundColor: `${statusFunc(isOnline)}`}}></StatusFriend>
           <AvatarFriend src={avatar} alt="User avatar" width="80" />
            <FriendName>{name}</FriendName>
        </ItemFriend>
    )
}
function statusFunc (value) {
    return value ? "green" : "red";
}



FriendListItem.prototype = {
    data: PropTypes.exact({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
    })
}
