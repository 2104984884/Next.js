import MyHeader from '../components/myHeader'
import '../styles/test.css';
import { Button } from 'antd'
function Header() {
  return (
    <>
      <MyHeader />
      <div>JSpang.com</div>
      <div> <Button>我是按钮</Button></div>
    </>
  )
}

export default Header