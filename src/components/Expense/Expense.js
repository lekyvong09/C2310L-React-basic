import Card from '../UI/Card';
import './Expense.css';
import ExpenseItem from "./ExpenseItem";


function Expense(props) { /// Expense[]

    // for (let i = 0; i < props.expenses.length(); i++) {
    //     var item = props.expenses[i];
    //     <ExpenseItem
    //         key={item.id}
    //         expense={item}
    //     ></ExpenseItem>
    // }
    // console.log(props);

    return (
        <Card className="expenses">
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