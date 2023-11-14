import AddMember from "../feature/AddMember";
import Meal from "../feature/Meal";
import Member from "../feature/Member";

function Home() {
  return (
    <div>
      <AddMember />
      <Member />
      <Meal />
    </div>
  );
}

export default Home;
