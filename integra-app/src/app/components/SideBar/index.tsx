import {ButtonSelect} from '../Buttons/index'

export const NavBar = () =>{
    return(
        <div></div>
    )
}

export const SideBar = () =>{
    return(
        <div className="fixed h-screen px-10 bg-white">
            <div className='flex flex-col h-full py-5 justify-between'>
                <label className='text-teal-600'>Integra<strong>Desk</strong></label>

               <div className="flex flex-col justify-evenly gap-2">
               <ButtonSelect name={"Dashboard"}/>
               <ButtonSelect name={"Tickets"}/>
               <ButtonSelect name={"Sua Mãe"}/>
               <ButtonSelect name={"Teu Pai"}/>
               <ButtonSelect name={"Tua Tia"}/>
               </div>

               <ButtonSelect name={"Log out"}/>
           </div>
        </div>
    )
}