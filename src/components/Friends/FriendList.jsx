import PropTypes from 'prop-types'; 

import {FriendListItem} from "./FriendListItem/FriendListItem"
import {ListFriend} from "./FriendList.styled"

export const FriendList = ({friends}) => {
    return (
        <ListFriend>
            {friends.map(friend => {
                return (
                    <FriendListItem key = {friend.id} data = {friend}/>
                )
            })}
        </ListFriend>
    )
}

FriendList.prototype = {
    friendns: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string.isRequired,
        })
    )

}



