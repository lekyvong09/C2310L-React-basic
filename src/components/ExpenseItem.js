import './ExpenseItem.css';

function ExpenseItem(props) { /// properties


    return (
        <div className="expense-item">
            <h2>{props.var3.toLocaleString()}</h2>
            <div className="expense-item__description">
                <h2>{props.var1}</h2>
                <div className="expense-item__price ">$ {props.var2}</div>
            </div>
        </div>
    );
}

export default ExpenseItem;