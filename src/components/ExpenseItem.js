import './ExpenseItem.css';

function ExpenseItem(props) { /// properties

    console.log(props.expenseList);

    var list = [];

    props.expenseList.forEach(item => 
        list.push(
            <div className="expense-item" key={item.id}>
                <h2>{item.date.toLocaleString()}</h2>
                <div className="expense-item__description">
                    <h2>{item.title}</h2>
                    <div className="expense-item__price ">$ {item.amount}</div>
                </div>
            </div>
        ));


    return (
        <div >
            {list}
        </div>
    );
}

export default ExpenseItem;