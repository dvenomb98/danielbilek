
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Form({language}) {


  const form = useRef();

  const [formData, setFormData] = React.useState({
    firstName: "", 
    lastName: "",
    email: "",
    text: ""
  })

  const [formErrors, setFormErrors] = React.useState({})
  const [isSubmit, setIsSubmit] = React.useState(false)
  const [isSubmited, setIsSubmited] = React.useState(false)
  

  function handleChange(event) {
    const {name, value, type} = event.target
    setFormData(prevFormData => {
        return {
            ...prevFormData,
            [name]: value
        }
    })
}

const notify = () => toast.success(`${language ? "Zpráva byla úspěšně odeslána!" : "Your message was successfuly sended!"}`, {
  position: "bottom-center",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  delay: 500
  });





function handleSubmit(event) {
  event.preventDefault()
  setFormErrors(validate(formData))
  setIsSubmit(true)
  
}

React.useEffect(() => {
  if(Object.keys(formErrors).length === 0 && isSubmit) {
    notify()
    setFormData({
      firstName: "", 
      lastName: "",
      email: "",
      text: ""})
    emailjs.sendForm('service_dvydk6b', 'template_sblvpxa', form.current, 'y0cIRT5JszJBG4Ig1')
    .then((result) => {
      console.log(result)
    }, (error) => {
        console.log(error.text);
    });

  }
  
},[formErrors])

const validate = (values) => {
  const errors = {}
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  const alphaRegex = /^([ěščřžýáíéóúůďťňĎŇŤŠČŘŽÝÁÍÉÚŮĚÓa-zA-z]){0,20}$/
  

  if (!values.firstName) {
    errors.firstName = language ? "Jméno je vyžadováno!" : "Name is required!"
    }
    
    else if(!alphaRegex.test(values.firstName)) {
      errors.firstName = language ? "Jméno obsahuje nepovolené znaky!" : "Name contains disallowed characters!"
    }
  
  if (!values.lastName) {
    errors.lastName = language ? "Příjmení je vyžadováno!" : "Surname is required!"
  }
  
  else if(!alphaRegex.test(values.lastName)) {
    errors.lastName =language ? "Příjmení obsahuje nepovolené znaky!" : "Surname contains disallowed characters!"
  }

  if (!values.email) {
    errors.email = language ? "Email je vyžadován!" : "Email is required!"
  }
  else if(!regex.test(values.email)) {
    errors.email = language ? "Emailová adresa není správná!" : "Email adress is not correct!"
  }
  

  if (!values.text) {
    errors.text = language ? "Zpráva je vyžadována!" : "Message is required!"
  }

  return errors;
}

  return (
    <div className="pb-10 text-darkPurple bg-slate-100 mt-16" id="Contact">
    <div className="w-2/3  mx-auto flex flex-col items-start justify-center gap-10">
        <div className="flex flex-col justify-center items-center self-center">
          <h2  className="text-4xl mt-10 font-bold md:text-6xl">{language ? "Kontakt" : "Contact me"}</h2>
          <div className="border border-purple mt-2 border-2 w-48 rounded-t-md lg:w-72">
          </div>
        </div>

        <form  data-aos="fade" ref={form} onSubmit={handleSubmit} className="flex flex-col w-full text-lg font-semibold lg:mt-10 ">

          <div className="flex flex-col gap-1 lg:flex-row lg:justify-between lg:items-start">
            <label htmlFor="name">{language ? "Jméno" : "Name"}</label>
            <input className={`lg:w-1/2 bg-white  border ${formErrors.firstName ? "border-red-600" : "border-gray-300/50"} shadow-sm shadow-gray-300/50 px-5 py-2 rounded-sm`} onChange={handleChange} id="name" type="text" placeholder="Daniel" name="firstName" value={formData.firstName}/>
          </div>
          <p className="text-red mt-2 font-light self-end">{formErrors.firstName}</p>
          

          <div className="flex flex-col gap-1 lg:flex-row lg:justify-between mt-5 lg:items-start">
            <label htmlFor="lastName">{language ? "Příjmení" : "Surname"}</label>
            <input className={` lg:w-1/2 bg-white    border ${formErrors.lastName ? "border-red-600" : "border-gray-300/50"} shadow-sm shadow-gray-300/50 px-5 py-2 rounded-sm`} onChange={handleChange} id="lastName" type="text" placeholder="Bílek" name="lastName" value={formData.lastName} />
          </div>
          <p className="text-red mt-2 font-light self-end">{formErrors.lastName}</p>
          
          
          <div className="flex flex-col gap-1 lg:flex-row lg:justify-between mt-5 lg:items-start">
            <label htmlFor="email">Email</label>
            <input className={`lg:w-1/2 bg-white   border ${formErrors.email ? "border-red-600" : "border-gray-300/50"} shadow-sm shadow-gray-300/50 px-5 py-2 rounded-sm`} onChange={handleChange} id="email" type="email" placeholder="mujemail@seznam.cz" name="email" value={formData.email} />  
          </div>
          <p className="text-red mt-2 font-light self-end">{formErrors.email}</p>
          
          <div className="flex flex-col gap-1 lg:flex-row lg:justify-between mt-5 lg:items-start">
          <label htmlFor="text">{language ? "Zpráva" : "Message"}</label>
          <textarea rows="6" className={` lg:w-1/2 bg-white    border ${formErrors.text ? "border-red-600" : "border-gray-300/50"} shadow-sm shadow-gray-300/50 px-5 py-2 rounded-sm`} onChange={handleChange} id="text" placeholder="Biscuit brownie caramels carrot cake pastry." name="text" value={formData.text} />
        </div>
        <p className="text-red mt-2 font-light self-end">{formErrors.text}</p>
          

          <p className="text-center pt-5 mt-10 border-t border-gray-300 font-bold">{language ? "Těším se na naši spolupráci!" : "I very much look forward to beginning our work." }</p>
          <button className={`text-purple font-bold mt-5 uppercase border-purple border-2 py-3 px-5 self-center rounded-md hover:scale-105 transition ease-in-out`}>{language? "ODESLAT" : "SEND MESSAGE"}</button>
        </form>

        
    
        </div>
        <ToastContainer />
    </div>
  )
}

export default Form