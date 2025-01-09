'use client'
import { useState } from 'react'

import LoginCover from '@/components/auth/login-cover'
import OtpPage from '@/components/auth/verify-otp'
import AuthBtn from '@/components/auth/auth-btn'
import SetEmail from '@/components/auth/set-email'
import SetNewPassword from '@/components/auth/set-new-password'
import SetPhoneNumber from '@/components/auth/set-phone-number'

type IsFilledState = {
    btn1: string;
    btn2: string;
    btn3: string;
  };
export default function SingUp () {

  const [isFilled, setIsFilled] = useState<IsFilledState>({
    btn1:'true',
    btn2:'',
    btn3:'',
  })
  const [pageNumber, setPageNumber] = useState<number>(1)

  function handelAuchtBtnClick(number:number){
    console.log({number});
    setPageNumber(number)
    switch (number) {
      case 1:
        setIsFilled({btn1:'true',btn2:'',btn3:''})
        break;
      case 2:
        setIsFilled({btn1:'',btn2:'true',btn3:''})
        break;
      case 3:
        setIsFilled({btn1:'',btn2:'',btn3:'true'})
        break;
      default:
        setIsFilled({btn1:'',btn2:'',btn3:''})
        console.log("error.");
        break;
    }

  }

  return (
    <div className="flex min-h-screen bg-gray-100">

        <div className="hidden lg:block lg:w-1/2 relative">
            <LoginCover/>
        </div>

        <div className="m-auto w-full max-w-md ">

            <div>
                {pageNumber === 1 && <SetPhoneNumber/>  } 
                {/* {pageNumber === 1 && <SetEmail/>  }  */}
                {pageNumber === 2 && <OtpPage/>  }
                {pageNumber === 3 && <SetNewPassword/>}
               
            </div>

            <div className='flex justify-center my-4'>
                <AuthBtn name={'1'} fun={() => handelAuchtBtnClick(1)} fill={isFilled.btn1 === 'true'}/>
                <AuthBtn name={'2'} fun={() => handelAuchtBtnClick(2)} fill={isFilled.btn2 === 'true'} />
                <AuthBtn name={'3'} fun={() => handelAuchtBtnClick(3)} fill={isFilled.btn3 === 'true'}/>
            </div>
            
        </div>
    </div>
  )
}

