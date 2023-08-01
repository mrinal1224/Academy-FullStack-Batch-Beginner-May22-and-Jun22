// We will three basic test cases 
import { fireEvent, render, screen } from '@testing-library/react';


import Login from "./Login"

// 1. if userName input is getting Rendered
// 2. if password input is getting Rendered
// 3. if Button is getting Rendered


test('Check for the UserName Input Field' , ()=>{
    render(<Login/>)
    const userNameElem = screen.getByPlaceholderText(/username/i)
    expect(userNameElem).toBeInTheDocument()
})


test('Check for the Password Input Field' , ()=>{
    render(<Login/>)
    const passwordElem = screen.getByPlaceholderText(/password/i)
    expect(passwordElem).toBeInTheDocument()
})


test('Check If login button is in the document' , ()=>{
    render(<Login/>)
    const buttonElem = screen.getByRole('button')
    expect(buttonElem).toBeInTheDocument()
})


test('userName input should be Empty' , ()=>{
    render(<Login/>)
    const userNameElem = screen.getByPlaceholderText(/username/i)
    expect(userNameElem.value).toBe('')

})

test('Password input should be Empty' , ()=>{
    render(<Login/>)
    const passwordElem = screen.getByPlaceholderText(/password/i)
    expect(passwordElem.value).toBe('')

})

test('The button is disabled when there is no data' , ()=>{
    render(<Login/>)
    const buttonElem = screen.getByRole("button");
    expect(buttonElem).toBeDisabled()

})


test('test for correct data received for userName', ()=>{
   render(<Login/>)
   const usernameInputEl = screen.getByPlaceholderText(/username/i);
   const testValue = 'Mrinal'
   fireEvent.change(usernameInputEl , {target : {value : testValue}})

})