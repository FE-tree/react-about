import { Link, useNavigate } from 'react-router-dom'
import router from '../../router';
import './home.css'

function useLink() {
  const navigate = useNavigate();
  let linkList = {
    base: [],
    baseItems: null,
    advanced: [],
    advancedItems: null
  }
  router.routes.forEach((item) => {
    // console.log(item)
    if(item.path.includes('/base')) {
      linkList.base.push(item)
    }
    if(item.path.includes('/advanced')) {
      linkList.advanced.push(item)
    }
  })
  linkList.baseItems = linkList.base.map(item => 
    <div className='list-item' key={item.id}>
      <button style={{ marginBottom: "8px" }} onClick={() => {
        navigate(item.path)
      }}>
        跳转到{item.name}
      </button>
    </div>
  );
  linkList.advancedItems = linkList.advanced.map(item => 
    <div className='list-item' key={item.id}>
      <button style={{ marginBottom: "8px" }} onClick={() => {
        navigate(item.path)
      }}>
        {item.name}
      </button>
    </div>
  );

  console.log(linkList)
  return linkList
}

function LoginPage() {
  const links = useLink();
  return (
    <div>
      <br />
      <div>欢迎来到首页</div>
      <div>
        <a href="/login/1541/tree">login</a>
        { ' - ' }
        <Link to="/user">user</Link>
      </div>
      
      <h3>base</h3>
      <div className='home-list'>
        { links.baseItems }
      </div>

      <h3>advanced</h3>
      <div className='home-list'>
        { links.advancedItems }
      </div>
      
    </div>
  );
}
  
export default LoginPage;