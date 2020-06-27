import React from 'react'
import ExpenseItem from './ExpenseItem' 
import {MdDelete} from 'react-icons/md'
const ExpenseList = ({expenses,deleteExpenses,clearExpenses,handleEdit}) => {
    return (
        <div>
            <ul className='list'>
                {expenses.map((expense)=>{
                    return <ExpenseItem expense={expense} key={expense.id} deleteExpenses={deleteExpenses} handleEdit={handleEdit}/>
                })}
            </ul>
            {expenses.length>0 && <button className='btn' onClick={clearExpenses}>clear expenses<MdDelete className='btn-icon'/></button>}
        </div>
    )
}

export default ExpenseList