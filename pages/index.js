import {Head, Body }from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import HeadBar from "../pages/Component/headBar"
import Slidebar from './Component/sideBar'

export default function Home() {
  return (
    <>
    <Slidebar />
    <HeadBar />
    <div>
      Ola Mundo
    </div>
    
  </>
  )
}
