import './ExpenseItem.css';

function ExpenseItem(props) { /// properties

    return (
        <div>
            {props.expenses.map(item => (
                <div className='expense-item' key={item.id}>
                    <div>{item.date.toISOString()}</div>
                    <div className='expense-item__description'>
                        <h2>{item.title}</h2>
                        <div className='expense-item__price'>$ {item.amount}</div>
                    </div>
                </div>
            ))}

        </div>
    );
}

export default ExpenseItem;