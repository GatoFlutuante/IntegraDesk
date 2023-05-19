import {Ticket, Button, ButtonSec} from '../Buttons/index'
type listProps ={
   item1? : string
   item2? : string
   item3? : string
   item4? : string
   item5? : string
   item6? : string
}
export const List = (props : listProps) =>{
   return(
    <div className="flex w-full h-full justify-center items-center">
     <div className="relative overflow-x-auto rounded-lg bg-gray-50">
        <div className='flex w-full p-5 my-5 justify-between'>
            <ButtonSec name={"Filtros"}/>
           <div className='flex gap-3'>
             <ButtonSec name={"Play"}/>
             <Button name={"Novo Ticket +"}/>
           </div>
        </div>
        
    <table className="text-left text-gray-600">
        <thead className="text-xs text-gray-500 uppercase">
            <tr>
                <th scope="col" className="px-6 py-3">
                    {props.item1}
                </th>
                <th scope="col" className="px-6 py-3">
                    {props.item2}
                </th>
                <th scope="col" className="px-6 py-3">
                    {props.item3}
                </th>
                <th scope="col" className="px-6 py-3">
                    {props.item4}
                </th>
                <th scope="col" className="px-6 py-3">
                    {props.item5}
                </th>
                <th scope="col" className="px-6 py-3">
                    {props.item6}
                </th>
            </tr>
        </thead>
        <tbody>
            <Ticket status={"Aberto"} tipo={"Pergunta"} id={"#99990"} Assunto={"Problemas Com o Sat"} Empresa={"Trilha Tecnologia"} UltimaAtulaizacao={"27/01/2004"}/>
            <Ticket status={"Aberto"} tipo={"Pergunta"} id={"#99990"} Assunto={"Problemas Com o Sat"} Empresa={"Trilha Tecnologia"} UltimaAtulaizacao={"27/01/2004"}/>
            <Ticket status={"Aberto"} tipo={"Pergunta"} id={"#99990"} Assunto={"Problemas Com o Sat"} Empresa={"Trilha Tecnologia"} UltimaAtulaizacao={"27/01/2004"}/>
            <Ticket status={"Aberto"} tipo={"Pergunta"} id={"#99990"} Assunto={"Problemas Com o Sat"} Empresa={"Trilha Tecnologia"} UltimaAtulaizacao={"27/01/2004"}/>
            <Ticket status={"Aberto"} tipo={"Pergunta"} id={"#99990"} Assunto={"Problemas Com o Sat"} Empresa={"Trilha Tecnologia"} UltimaAtulaizacao={"27/01/2004"}/>
        </tbody>
        <footer className='p-6 flex items-center justify-between'>
            <label>{5} de 1000</label>
        </footer>
    </table>
</div>
    </div>
   )
}