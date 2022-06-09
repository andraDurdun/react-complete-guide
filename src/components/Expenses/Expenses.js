import './Expenses.css'
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import {useState} from "react";

const Expenses = (props) => {

    const [filteredYear, setFilteredYear] = useState("2020");

    const filterChangeHandler = (selectedYear) => {
        console.log(selectedYear);
        setFilteredYear(selectedYear);
    }

    return (
        <div>
            <Card className="expenses">
                <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
                {
                    props.items.map(
                        expense =>
                            <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount}
                                         date={expense.date}/>
                    )
                }
            </Card>
        </div>
    )
}

export default Expenses;