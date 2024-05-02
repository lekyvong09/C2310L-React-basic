import './Expense.css';
import ExpenseItem from "./ExpenseItem";


function Expense(props) { /// Expense[]
    return (
        <div className="expenses">
            {props.expenses.map(item => (
                <ExpenseItem
                    key={item.id}
                    expense={item}
                ></ExpenseItem>
            ))}

        </div>
    );
}

export default Expense;