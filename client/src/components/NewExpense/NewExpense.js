import React from "react";
import "./NewExpense.css"
import ExpenseForm from "./ExpenseForm";
import Expenses from "../Expenses/Expenses";

const NewExpense = (props) => {

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData)
    }
return (
    <div className="new-expense">
         <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
)
}

export default NewExpense;