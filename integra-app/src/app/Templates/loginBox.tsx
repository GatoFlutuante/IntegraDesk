import {LoginForm, LoginImages} from '../components/LoginAssets/loginSides'

export const LoginBox = () =>{
    return(
        <div className='flex w-screen h-screen justify-between items-center bg-gray-200'>
          <div className='flex w-full h-full px-20 py-10 m-24'>
            <LoginForm/>
            <LoginImages/>
           </div>
        </div>
    )
}