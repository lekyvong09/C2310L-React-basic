import Card from '../UI/Card';
import './Expense.css';
import ExpenseFilter from './ExpenseFilter';
import ExpenseItem from "./ExpenseItem";


function Expense(props) { /// Expense[]


    return (
        <Card className="expenses">
            <ExpenseFilter></ExpenseFilter>
            {props.bien1.filter(e => e.date.getFullYear() === 2024).map(item => (
                <ExpenseItem
                    key={item.id}
                    expense={item}
                ></ExpenseItem>
            ))}

        </Card>
    );
}

export default Expense;