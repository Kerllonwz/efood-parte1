import { MenuItem } from '../../types'
import MenuCard from '../MenuCard'
import * as S from './styles'

interface Props {
  items: MenuItem[]
}

const MenuList = ({ items }: Props) => {
  return (
    <S.Grid>
      {items.map((item) => (
        <MenuCard key={item.id} item={item} />
      ))}
    </S.Grid>
  )
}

export default MenuList
