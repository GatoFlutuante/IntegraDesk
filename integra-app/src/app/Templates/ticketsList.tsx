import { List } from '../components/ListAssets/index'
import { SideBar } from '../components/SideBar'

export const TicketList = () =>{
    return(
        <div>
          <SideBar/>
          <List item1='Status' item2='Tipo' item3='ID' item4='Assunto' item5='Empresa' item6='Ultima Atualização'/>
        </div>
    )
}