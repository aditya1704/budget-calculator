import React ,{useState, useEffect} from 'react';
import './App.css';
import {v4 as uuid} from 'uuid';
import Alert from './components/Alert'
import ExpenseList from './components/ExpenseList'
import ExpenseForm from './components/ExpenseForm'

const initialExpenses=localStorage.getItem('expenses')?JSON.parse(localStorage.getItem('expenses')):[];

function App() {
  
  const [expenses, setExpenses] = useState(initialExpenses)

  const [charge,setCharge]=useState('')

  const [amount,setAmount]=useState('')

  const [alert,setAlert]=useState({show:false})

  const [edit,setEdit]=useState(false)

  const [id,setId]=useState(0)

  useEffect(()=>{
    localStorage.setItem('expenses',JSON.stringify(expenses))
  },[expenses])

  const handleCharge = e =>{
    setCharge(e.target.value)
  }

  const handleAmount =e =>{
    setAmount(e.target.value)
  }

  const handleAlert =({type,text})=>{
    setAlert({show:true,type,text})
    setTimeout(()=>{
      setAlert({show:false})
    },5000)
  }

  const handleSubmit = e =>{
    e.preventDefault();
    if(charge!==''&&amount>0){
      if(edit){
        const tempExpenses=expenses.map(item=>{return item.id===id ? {...item,charge:charge,amount:amount}:item})
        setExpenses(tempExpenses);
        setEdit(false)
      }else{
        const newExpense={id:uuid(),charge:charge,amount:amount}
        setExpenses([...expenses,newExpense])
        handleAlert({type:'success',text:'item added'});
      }
      setCharge('')
      setAmount('')
    }else{
      handleAlert({type:'danger',text:'Charge cannot be empty !! AND Amount has to be bigger than zero!!'})
    }
  }

  const clearExpenses =()=>{
    setExpenses([])
    handleAlert({type:'danger',text:'List cleared'})
  }

  const deleteExpenses =(id)=>{
    const updatedExpenses= expenses.filter((expense)=>expense.id!==id)
    setExpenses(updatedExpenses)
    handleAlert({type:'danger',text:'Item deleted'})
  }

  const handleEdit =(id)=>{
    const expense =expenses.find(item=>item.id===id)
    let {charge,amount}=expense
    setCharge(charge)
    setAmount(amount)
    setEdit(true)
    setId(id)
  }

  return (
    <>
    {alert.show && <Alert type={alert.type} text={alert.text}/>}
      <Alert/>
      <main className='App'>
        <ExpenseForm charge={charge} amount={amount} handleCharge={handleCharge} handleAmount={handleAmount} handleSubmit={handleSubmit} edit={edit}/>
        <ExpenseList  expenses={expenses} deleteExpenses={deleteExpenses} clearExpenses={clearExpenses} handleEdit={handleEdit}/>
      </main>
  <h1>Total Spending: <span className='total'>Rs.{expenses.reduce((acc,curr)=>{return acc+=parseInt(curr.amount)},0)}</span></h1>
    </>
  );
}

export default App;
