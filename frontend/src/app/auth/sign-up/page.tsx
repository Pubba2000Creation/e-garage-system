'use client'
import { useState } from 'react'

import LoginCover from '@/components/auth/login-cover'
import  ChooseAccount  from '@/components/auth/choose-account'
import CreateAccount from '@/components/auth/create-account'
import FillInformation from '@/components/auth/fill-information'
import ProfilePictureForm from '@/components/auth/profile-pic'
import AddressForm from '@/components/auth/set-address'
import TermsAndConditions from '@/components/auth/terms-and-conditions'
import OtpPage from '@/components/auth/verify-otp'
import AuthBtn from '@/components/auth/auth-btn'

type IsFilledState = {
    btn1: string;
    btn2: string;
    btn3: string;
    btn4: string;
    btn5: string;
    btn6: string;
    btn7: string;
  };
export default function SingUp () {

  const [isFilled, setIsFilled] = useState<IsFilledState>({
    btn1:'true',
    btn2:'',
    btn3:'',
    btn4:'',
    btn5:'',
    btn6:'',
    btn7:'',
  })
  const [pageNumber, setPageNumber] = useState<number>(1)

  function handelAuchtBtnClick(number:number){
    console.log({number});
    setPageNumber(number)
    switch (number) {
      case 1:
        setIsFilled({btn1:'true',btn2:'',btn3:'',btn4:'',btn5:'',btn6:'',btn7:''})
        break;
      case 2:
        setIsFilled({btn1:'',btn2:'true',btn3:'',btn4:'',btn5:'',btn6:'',btn7:''})
        break;
      case 3:
        setIsFilled({btn1:'',btn2:'',btn3:'true',btn4:'',btn5:'',btn6:'',btn7:''})
        break;
      case 4:
        setIsFilled({btn1:'',btn2:'',btn3:'',btn4:'true',btn5:'',btn6:'',btn7:''})
        break;
      case 5:
        setIsFilled({btn1:'',btn2:'',btn3:'',btn4:'',btn5:'true',btn6:'',btn7:''})
        break;
      case 6:
        setIsFilled({btn1:'',btn2:'',btn3:'',btn4:'',btn5:'',btn6:'true',btn7:''})
        break;
      case 7:
        setIsFilled({btn1:'',btn2:'',btn3:'',btn4:'',btn5:'',btn6:'',btn7:'true'})
        break;
      default:
        setIsFilled({btn1:'',btn2:'',btn3:'',btn4:'',btn5:'',btn6:'',btn7:''})
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

            <div className='flex justify-center my-4'>
                <AuthBtn name={'1'} fun={() => handelAuchtBtnClick(1)} fill={isFilled.btn1 === 'true'}/>
                <AuthBtn name={'2'} fun={() => handelAuchtBtnClick(2)} fill={isFilled.btn2 === 'true'} />
                <AuthBtn name={'3'} fun={() => handelAuchtBtnClick(3)} fill={isFilled.btn3 === 'true'}/>
                <AuthBtn name={'4'} fun={() => handelAuchtBtnClick(4)} fill={isFilled.btn4 === 'true'}/>
                <AuthBtn name={'5'} fun={() => handelAuchtBtnClick(5)} fill={isFilled.btn5 === 'true'}/>
                <AuthBtn name={'6'} fun={() => handelAuchtBtnClick(6)} fill={isFilled.btn6 === 'true'}/>
                <AuthBtn name={'7'} fun={() => handelAuchtBtnClick(7)} fill={isFilled.btn7 === 'true'}/>
            </div>

            <div>

                {pageNumber === 1 && <ChooseAccount/>  }
                {pageNumber === 2 && <TermsAndConditions/>  }
                {pageNumber === 3 && <CreateAccount/>  }
                {pageNumber === 4 && <FillInformation/> }
                {pageNumber === 5 && <AddressForm/>  }
                {pageNumber === 6 && <ProfilePictureForm/> }
                {pageNumber === 7 && <OtpPage/> } 
                
                {/* <CreateAccount/>
                <FillInformation/>
                <AddressForm/>
                <ProfilePictureForm/>
                <TermsAndConditions/>
                <OtpPage/> */}

            </div>
        </div>
    </div>
  )
}
