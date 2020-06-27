import React from 'react'
import {MdEdit,MdDelete} from 'react-icons/md'
const ExpenseItem = ({expense,deleteExpenses,handleEdit}) => {
    const {id,charge,amount}=expense
    return (
        <li className='item'>
            <div className='info'>
                <span className='charge'>{charge}</span>
                <span className='amount'>Rs.{amount}</span>
            </div>
            <div>
                <button className='edit-btn' aria-label='edit' onClick={()=>handleEdit(id)}><MdEdit/></button>
                <button className='clear-btn' aria-label='delete' onClick={()=>deleteExpenses(id)}><MdDelete/></button>
            </div>
        </li>
    )
}
export default ExpenseItem