import css from "./Transactions.module.css";

const TransactionsItem = ({ transaction }) => {
  const { date, type, category, comment, sum } = transaction;
  const isIncome = type === "+";

  return (
    <>
      {/* Mobile Layout */}
      <div className={`${css.card} ${type === "+" ? css.income : css.expense}`}>
        <div className={css.rowWrapper}>
          <div className={css.row}>
            <span className={css.leftSideSpan}>Date</span>
            <span className={css.rightSideSpan}>{date}</span>
          </div>
        </div>
        <div className={css.rowWrapper}>
          <div className={css.row}>
            <span className={css.leftSideSpan}>Type</span>
            <span className={css.rightSideSpan}>{type}</span>
          </div>
        </div>
        <div className={css.rowWrapper}>
          <div className={css.row}>
            <span className={css.leftSideSpan}>Category</span>
            <span className={css.rightSideSpan}>{category}</span>
          </div>
        </div>
        <div className={css.rowWrapper}>
          <div className={css.row}>
            <span className={css.leftSideSpan}>Comment</span>
            <span className={css.rightSideSpan}>{comment}</span>
          </div>
        </div>
        <div className={css.rowWrapper}>
          <div className={css.row}>
            <span className={css.leftSideSpan}>Sum</span>
            <span
              className={`${css.rightSideSpan} ${
                type === "+" ? css.sumgreen : css.sumyellow
              }`}
            >
              {sum}
            </span>
          </div>
        </div>
        <div className={css.divDeleteEdit}>
          <button className={css.delete}>Delete</button>
          <button className={css.editButton}>
            <span className={css.editStaff}>✎</span>
            <span className={css.edit}>Edit</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default TransactionsItem;
