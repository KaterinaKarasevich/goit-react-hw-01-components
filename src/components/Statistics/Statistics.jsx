import PropTypes from 'prop-types'; 

import {StatisticItem} from "./StatisticItem/StatisticItem"
import {SectionStatistics, Title, ListStats}  from "./Statistics.styled"

export const Statistics = ({ title, stats }) => {
    return (
        <SectionStatistics>
          {title && <Title>{title}</Title>}

          <ListStats>
                {stats.map(stat => {
                    return (
                        <StatisticItem key={stat.id} data={stat} /> 
                    )
                })}
                
          </ListStats>
        </SectionStatistics>
      )
}

Statistics.prototype = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string.isRequired,
        })
    )

}