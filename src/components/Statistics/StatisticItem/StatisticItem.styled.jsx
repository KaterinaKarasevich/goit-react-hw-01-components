import styled from '@emotion/styled'

const ItemStat = styled.li`
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  width: calc(100% / 5);

  border: 1px solid;
  padding: 20px;
  `

const InfoStat = styled.span`
  font-size: 20px;
  
  `
export {
    ItemStat,
    InfoStat
}