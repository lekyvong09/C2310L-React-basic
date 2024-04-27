import './ExpenseItem.css';

function ExpenseItem() {
    var expenseDate = new Date(2024, 4, 27);
    var expenseTitle = 'Petrol Gas';
    var expenseAmount = 2;

    return (
        <div className="expense-item">
            <h2>{expenseDate.toLocaleString()}</h2>
            <div className="expense-item__description">
                <h2>{expenseTitle}</h2>
                <div className="expense-item__price ">$ {expenseAmount}</div>
            </div>
        </div>
    );
}

export default ExpenseItem;