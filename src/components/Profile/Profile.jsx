
import { ProfileItem, Description, UserPicture, UserName, UserInfo, StatsList, StatsItem, StatsLabel, StatsQuantity} from "./Profile.styled"

export const Profile = ({ username, tag, location, avatar, followers, views, likes}) => {
    return (
    <ProfileItem>
        <Description>
            <UserPicture
                src={avatar}
                    alt="User avatar"
                           />
            <UserName>{username}</UserName>
            <UserInfo>@{tag}</UserInfo>
            <UserInfo>{location}</UserInfo>
          </Description>

        <StatsList>
            <StatsItem>
                <StatsLabel>Followers</StatsLabel>
                <StatsQuantity>{followers}</StatsQuantity>
            </StatsItem>
            <StatsItem>
                <StatsLabel>Views</StatsLabel>
                <StatsQuantity>{views}</StatsQuantity>
            </StatsItem>
            <StatsItem>
                <StatsLabel>Likes</StatsLabel>
                <StatsQuantity>{likes}</StatsQuantity>
            </StatsItem>
        </StatsList>
      
    </ProfileItem>
    );
};

