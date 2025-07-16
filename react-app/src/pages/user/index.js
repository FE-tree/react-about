import { useNavigate, Outlet } from 'react-router-dom'
import axios from 'axios'

function ListItem({ name, isPacked }) {
  if (isPacked) {
    return <div className="item">{name} ✔</div>;
  }
  return <div className="item">{ name }❌</div>;
}

async function getData() {
  console.log('start---')
  await axios({
    url:'http://httpbin.org/get',
    params:{
        name:'tree',
        age:11
    },
    method:'get'
  }).then(
    res => console.log(res)
  ).catch(
    err => console.error(err)
  )
}

function IndexPage() {
  getData()
  const navigate = useNavigate();
  return (
    <div>
      <div>
        欢迎来到user
        <button onClick={() => { navigate("/user/edit") }}>edit</button>  
        {/* <Link to="/user/edit">edit</Link> */}
      </div>
      <div>
        <ListItem name="个人资料" isPacked={true}></ListItem>
        <ListItem name="信息通知" isPacked={false}></ListItem>
        <ListItem name="个人设置" isPacked={false}></ListItem>
      </div>
      <Outlet />
    </div>
  );
}
  
export default IndexPage;