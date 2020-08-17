import { withRouter } from 'next/router'
import Link from 'next/Link';
import axios from 'axios';

const Xiaojiejie = ({ router,list }) => {
  return (
    <>
      <div>{router.query.name}来为我服务了</div>
      <div>{list}</div>
      <Link href="/"><a>返回首页</a></Link>
    </>
  )
}

Xiaojiejie.getInitialProps = async () => {
  const promise = new Promise((resolve) => {
    axios.get('https://www.easy-mock.com/mock/5cfcce489dc7c36bd6da2c99/xiaojiejie/getList')
      .then(
        res => {
          console.log(res)
          resolve(res.data.data)
      }
    )
  })
  return await promise
}
export default withRouter(Xiaojiejie);