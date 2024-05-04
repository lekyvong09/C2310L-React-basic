import Card from './Card';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

function ExpenseItem(props) { /// Expense
    /// props.expense = {id: 1, title: 'Petrol Gas', amount: 5, date: new Date(2024, 4, 27)}
    return (
        <Card className='expense-item'>
            {/* <div>{props.expense.date.toISOString()}</div> */}
            <ExpenseDate date={props.expense.date} ></ExpenseDate>
            <div className='expense-item__description'>
                <h2>{props.expense.title}</h2>
                <div className='expense-item__price'>$ {props.expense.amount}</div>
            </div>
        </Card>
    );
}

export default ExpenseItem;