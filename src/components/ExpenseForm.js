import React from 'react'
import {MdSend} from 'react-icons/md'
 const ExpenseForm = ({charge,amount,handleCharge,handleAmount,handleSubmit,edit}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div className='form-center'>
                <div className='form-group'>
                    <label htmlFor='charge'>charge</label>
                    <input id='charge' name='charge' className='form-control' value={charge} type='text' placeholder='eg:rent' onChange={handleCharge}/>
                </div>
                <div className='form-group'>
                    <label htmlFor='amount'>amount</label>
                    <input id='amount' name='amount' className='form-control' value={amount} type='number' placeholder='eg:Rs.100' onChange={handleAmount}/>
                </div>
            </div>
            <button type='submit' className='btn'>{edit?'edit':'submit'}<MdSend className='btn-icon'/></button>
        </form>
    )
}

export default ExpenseForm;