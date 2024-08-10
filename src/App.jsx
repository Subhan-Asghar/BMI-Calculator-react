import { useState } from 'react'
import './App.css'

function App() {
  const [height,setheight]=useState(0)
  const [weight,setweight]=useState(0)
  const [bmi,setbmi]=useState('')
  const [status,setstatus]=useState('')
  const cal=(h,w)=>{
    if(h>0&&w>0){
      var b=w/(h*h);
      var c=b*703
      setbmi(c)
      if(c<=18.4){
        setstatus("Underweight")
      }
      else if(c>=40.0){
        setstatus('Obese')
      }
      else if(c>=18.5&&c<=24.9){
        setstatus('Normal')
      }
      else if(c>=25.0&&c<=39.9){
        setstatus('Overweight')
      }
    }
    else{
      alert("Enter the positive number")
    }
   


  }
  return (
    <>
    <div className='bg-white h-96 rounded-lg w-80 shadow-lg'>
    <h2 className='flex justify-center text-gray-800 font-bold  mx-9 py-2 '>BMI Calculaor:</h2>
    <h3 className='flex justify-start text-gray-800 font-bold  mx-9 py-2 '>Height (in):</h3>
      <input type="number"
      className='p-2 w-64 rounded-lg '
      placeholder='Enter your height ' 
      onChange={(e)=>{setheight(parseFloat(e.target.value))}}/>
    <h3 className='flex justify-start mx-9 py-2 text-gray-800 font-bold'>Weight (lb):</h3>
      <input type="number"
      className='p-2 w-64 rounded-lg '
      placeholder='Enter your weight ' 
      onChange={(e)=>{setweight(parseFloat(e.target.value))}}/>
      <button
      onClick={()=>{cal(height,weight)}}
      className='m-4'
      >Submit</button>
      <h3 className=' text-gray-800 font-bold'>{bmi}</h3>
      <h3 className=' text-gray-800 font-bold'>{status}</h3>
      </div>

    </>
  )
}

export default App
