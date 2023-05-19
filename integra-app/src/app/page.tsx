import { Inter } from 'next/font/google'
import {LoginBox} from './Templates/loginBox'
import {TicketList} from './Templates/ticketsList'
import {SideBar} from './components/SideBar'

const inter = Inter({ subsets: ['latin'] })

export default function login(){
    return(
     <div><LoginBox/></div>
    )
}