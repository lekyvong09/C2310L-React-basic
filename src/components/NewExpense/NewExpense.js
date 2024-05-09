import ExpenseForm from "./ExpenseForm";


function NewExpense() {

    const saveExpense = (data) => {
        console.log(data);
    }

    return (
        <>
            <ExpenseForm onSaveExpenseData={saveExpense} />
        </>
    );
}

export default NewExpense;