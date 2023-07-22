import './index.css'
import './App.css'
import { Menu, Header, Bestsellers, Shopbycategory, MixandMatch, Shopthelook, Signup, Footer } from './components'



export default function Main() {
  return (
    <main className='w-full'>
      <Menu />
      <Header />
      <Bestsellers />
      <Shopbycategory />
      <MixandMatch />
      <Shopthelook />
      <Signup />
      <Footer />
    </main>
  )
}