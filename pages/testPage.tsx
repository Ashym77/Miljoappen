import { Navbar } from '@/p-components/Navbar'
import AshTestingPage from '@/p-components/ashTestingPage'
import { NextPage } from 'next'

interface Props {}

const TestPage: NextPage<Props> = ({}) => {
  return(

   <div>

    <AshTestingPage/>


  <Navbar/>

   </div>

  )
}

export default TestPage