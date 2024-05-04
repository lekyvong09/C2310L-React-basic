import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

function ExpenseItem(props) { /// Expense

    return (
        <div className='expense-item'>
            {/* <div>{props.expense.date.toISOString()}</div> */}
            <ExpenseDate date={props.expense.date} ></ExpenseDate>
            <div className='expense-item__description'>
                <h2>{props.expense.title}</h2>
                <div className='expense-item__price'>$ {props.expense.amount}</div>
            </div>
        </div>
    );
}

export default ExpenseItem;