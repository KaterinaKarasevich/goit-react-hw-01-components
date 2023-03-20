import PropTypes from 'prop-types'; 
import {ItemStat, InfoStat} from "./StatisticItem.styled"
export const StatisticItem = ({data}) => {
    const {label, percentage } = data;
    return (
      <ItemStat>
          <InfoStat>{label}</InfoStat>
          <InfoStat>{percentage}%</InfoStat>
      </ItemStat>
    )
}

StatisticItem.prototype = {
  data: PropTypes.exact({
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
})
}