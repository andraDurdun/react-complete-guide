import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import React, {useState} from "react";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    console.log(expenseData);
    props.onAddExpense(expenseData);
  };

  const [showForm, setShowForm] = useState(false);

  return (
    <div className="new-expense">
      {!showForm && (
        <button type="button" onClick={() => setShowForm(true)}>
          Add New Expenses
        </button>
      )}
      {showForm && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={() => setShowForm(false)}
        />
      )}
    </div>
  );
};

export default NewExpense;
