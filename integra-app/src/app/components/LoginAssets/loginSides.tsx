import {ButtonSelect,Button, TextFill} from '../Buttons/index'
import axios from 'axios';

export const LoginForm = () =>{
    return(
        <div className='flex flex-col w-full h-full justify-start bg-white rounded-l-xl shadow-lg'>
            {/* Logotipo */}
    <label className='text-teal-600 text-lg px-7 py-4'>Integra<strong>Desk</strong></label>
    {/* Area da tela de formulário de login */}
<div className='flex flex-col h-full justify-center gap-5 px-24'>
   {/* Cabeça da tela de login */}
   <div className='flex flex-col mb-5 gap-1'>
       <label className='text-start text-xl font-bold text-teal-700' htmlFor="">Log in</label>
       <label className='text-start text-sm text-gray-500' htmlFor="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus sed id quae quas eum quis.</label>
   </div>
   {/* Campos de Preenchimento */}
   <div className='flex justify-between'>
      <div className='flex flex-col justify-between mt-2'>
         <label className='text-gray-600 text-sm font-semibold' htmlFor="">Usuario</label>
         <label className='text-gray-600 text-sm font-semibold' htmlFor="">Senha</label>
      </div>
      <div className="flex flex-col justify-center gap-5">
         <TextFill type={'email'} placeHolder={"nome@empresa.com"}/>
         <TextFill type={'password'}/>
      </div>
   </div>
   {/* Botões de ação */}
   <div className='flex flex-col justify-end items-end'>
      <label className='text-gray-500 my-4 text-sm'>Esqueceu a senha? <a href="" className='text-teal-600 hover:text-teal-500 font-semibold'>Recuperar</a></label>
      <Button name={"Login"}/>
   </div>
</div>
</div>
    )
}
export const LoginImages =() =>{
    return(
        // Area da tela de imagens
        <div className='flex justify-center items-center w-full bg-gradient-to-b from-teal-400 to-teal-600 rounded-r-xl shadow-lg'>
            {/* Campo dos elementos */}
            <div className='p-10'>
            
            </div>
        </div>
    )
}