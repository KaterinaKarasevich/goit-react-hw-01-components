import styled from '@emotion/styled'

const ProfileItem = styled.div`
  text-align: center;
  margin-left: auto;
  margin-right: auto;
    
`;
const Description = styled.div`
  padding: 20px;
  background-color: white;
`;


const UserPicture = styled.img`
  border-radius: 50%;
  background-color: lightgrey;
  width: 350px;
  `;
const UserName = styled.p`
  font-weight: 700;
  font-size: 28px;
  margin-top: 20px;
  margin-bottom: 10px;
`
const UserInfo = styled.p`
  color: grey;
  font-size: 16px;
`
;
const StatsList = styled.ul`
  background-color: white;
  list-style: none;
  margin-block-start: 0;
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
  padding: 0;
`
const StatsItem = styled.li`

  display: flex;
  flex-direction: column;
  width: 33%;
  justify-content: center;
  width: calc(100% / 3);

  border: 1px solid;
  padding: 10px;
`
;
const StatsLabel = styled.span`
  font-size: 16px;
  color: grey;`
;
const StatsQuantity = styled.span`
  font-size: 20px;
  font-weight: 700;
  margin-top: 20px;
`
;

export {
    ProfileItem,
    Description,
    UserPicture,
    UserName,
    UserInfo,
    StatsList,
    StatsItem,
    StatsLabel,
    StatsQuantity,

}