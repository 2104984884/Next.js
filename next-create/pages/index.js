import React from 'react';
import Link from 'next/link';
import Router from 'next/router';
//next 只能用?id=1  query传递参数  


const Home = () => {

  //routeChangeStart   路由发生变化之前
  //routeChangeComplete   路由变化完成
  //beforeHistoryChange  
  //routeChangeError  
  //hashChangeStart
  //hashChangeComplete


  Router.events.on('routeChangeStart', (...args) => {
    console.log('1.routeChangeStart->路由开始变化,参数为:',...args)
  })
  Router.events.on('routeChangeComplete', (...args) => {
    console.log('2.routeChangeComplete->路由变化完成,参数为:',...args)
  })
  Router.events.on('beforeHistoryChange', (...args) => {
    console.log('3.beforeHistoryChange->路由变化完成,参数为:',...args)
  })
  Router.events.on('routeChangeError', (...args) => {
    console.log('4.routeChangeError->路由发生错误,参数为:',...args)
  })
  Router.events.on('hashChangeStart', (...args) => {
    console.log('5.hashChangeStart->哈希路由变化之前,参数为:',...args)
  })
  Router.events.on('hashChangeComplete', (...args) => {
    console.log('6.hashChangeComplete->哈希路由变化完成,参数为:',...args)
  })



  function gotoXiaojiejie() {
    Router.push(
      {
        pathname: 'xiaojiejie',
        query: {
          name:'井空'
        }
      }
    )
  }

  return (
    <>
      <div>我是首页</div>
      <div>
        <Link href="/xiaojiejie?name=结衣"><a>选择结衣</a></Link>
        <br />
        <Link href="/xiaojiejie?name=井空"><a>选择井空</a></Link>
      </div>
      <div>
        <button onClick={gotoXiaojiejie}><a>选择井空</a></button>
      </div>
      <div>
        <Link href="#jspang"><a>选技术胖</a></Link>
      </div>
    </>
  )
}
export default Home;