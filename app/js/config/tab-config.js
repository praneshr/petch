import Today from '../pages/today'
import Yesterday from '../pages/yesterday'
import Older from '../pages/older'

const tabConfig = [
  {
    title: 'Latest',
    component: Today,
  },
  {
    title: 'Yesterday',
    component: Yesterday,
  },
  {
    title: 'Older',
    component: Older,
  },
]

export default tabConfig
