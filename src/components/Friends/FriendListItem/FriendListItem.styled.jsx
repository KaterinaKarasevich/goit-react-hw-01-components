import styled from '@emotion/styled'

const ItemFriend = styled.li`
  display: flex;
  gap: 30px;
  justify-content: start;
  align-items: center;
  border: 1px solid;
  padding: 20px;
`

const StatusFriend = styled.span`

  border-radius: 50%;
  width: 30px;
  height: 30px;
`

const AvatarFriend = styled.img`
  border-radius: 10%;
  background-color: lightgrey;
  
  `;

const FriendName = styled.p`
  font-weight: 700;
  font-size: 22px;
`



export {
    ItemFriend,
    StatusFriend,
    AvatarFriend,
    FriendName,
}