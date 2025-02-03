import React, { useState } from 'react'
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';



let dummyExpense = [
  {
    id: "e1",
    title: "school fee",
    amount: 250,
    date: new Date(2021, 4, 12)
  },
  {
    id: "e2",
    title: "books",
    amount: 230,
    date: new Date(2021, 4, 2)
  },
  {
    id: "e3",
    title: "house rent",
    amount: 800,
    date: new Date(2024, 4, 12)
  },
  {
    id: "e4",
    title: "food",
    amount: 540,
    date: new Date(2022, 5, 12)
  },
]


const App = () => {
  const [expenses, setExpenses] = useState(dummyExpense)
  const addExpenseHandler = (expense) => {
    const updatedExpense = [expense, ...expenses]
    setExpenses(updatedExpense)
  }

  return (

    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses item={expenses} />
    </div>
  )
}

export default App