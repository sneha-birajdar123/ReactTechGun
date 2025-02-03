import "./Expenses.css";
import React from 'react'
import ExpenseItems from "./ExpenseItems";
import Card from "../UI/Card";

const Expenses = (props) => {
    return (
        <Card className="expenses">
            {
                props.item.map(
                    expense => (
                        <ExpenseItems
                        date={expense.date}
                        title={expense.title}
                        amount={expense.amount} />
                    )
                )
            }
        </Card>
    )
}
export default Expenses;