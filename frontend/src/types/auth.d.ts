// src/types/auth.d.ts
// ///////////////////////Type for Login form
export type LoginFormEvent = React.FormEvent<HTMLFormElement>

// Type for the component's state shape
export type LoginFormState = {
  email: string
  password: string
  error: string
}

// Optional type for function props (if you have props for LoginForm)
export type LoginFormProps = {
  handleSubmit: (e: LoginFormEvent) => void
}

////////////////////////////// type for foget password (set email page) form

export type SetEmailState = {
  email: string
  error: string
}

// Type for form submission handler function
export type HandleEmailChange = (e: React.FormEvent) => void
// Type for component props (if you need to pass any additional props)
// export type SetEmailProps = {};

//////////////////////////// Type for otp form
// Type for OTP input state
export type OtpInputState = string[]

// Type for error message state
export type ErrorState = string

// Type for OTP input handler
export type HandleOtpChange = (value: string, index: number) => void

// Type for OTP verification handler
export type HandleVerifyOtp = (e: React.FormEvent) => void

// Type for OTP resend handler
export type HandleResendOtp = () => void

//////////////////////////// Type for set new password form
// Type for password and confirm password states
export type PasswordState = string

// Type for error message state
export type ErrorState = string

// Type for the form submission handler
export type HandleSubmit = (e: React.FormEvent) => void

//////////////////////////// Type for Choose Account  form

// Type for account selection options
export type AccountType = 'user' | 'serviceProvider'

// Type for account selection state
export type SelectedAccountState = AccountType

// Type for account selection handler function
export type HandleChooseAccount = () => void

//////////////////////// type for Create Account form

// Type for state variables
export type EmailState = string
export type PasswordState = string
export type ErrorState = string

// Type for the form submission handler function
export type HandleSubmit = (e: React.FormEvent) => void

//////////////////////////////// type for Fill Information form

// Define a type for vehicle selection callback
export type VehicleSelectionType = (vehicalType: string[]) => void

// Define a type for date change callback
export type DateChangeType = (date: string) => void

// Define a type for the form data, mapping to the individual states
export interface FormData {
  firstName: string
  lastName: string
  vehicalType: string[]
  phoneNumber: string
  selectedDate: string | null
  error: string
  companyName: string
  userRole: 'user' | 'serviceProvider'
}

/////////////////////////////////////////////// type for profile picture form

export type ImageHandler = (image: string | null) => void

/////////////////////////////////////////// types for set-address form

export type AddressHandler = (value: string) => void
export type ErrorHandler = (message: string) => void
export type ProvinceHandler = (value: string) => void
export type DistrictHandler = (value: string) => void

//////////////////////////////////////// type for Terms And Conditions

export interface CheckboxProps {
  isChecked: boolean
  onChange: () => void
}

/////////////////////////////////// type for OtpPage

// Type for the OTP state
export type OtpState = string[]

// Type for the OTP input change handler
export interface OtpInputProps {
  value: string
  index: number
  onChange: (value: string, index: number) => void
}

// Type for the form submission handler
export type FormSubmitEvent = React.FormEvent

// Type for the error state
export type ErrorState = string
