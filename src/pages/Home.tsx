import AddMember from '../feature/AddMember'
import LayoutContent from '../feature/Layout'
import Meal from '../feature/Meal'
import Member from '../feature/Member'


function Home() {
  return (
    <div>
        <LayoutContent/>
        <AddMember/>
        <Member/>
        <Meal/>
    </div>
  )
}

export default Home