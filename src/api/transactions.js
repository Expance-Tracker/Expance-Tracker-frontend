import React from 'react';

export default function TransactionForm({
  values,
  onChange,
  onSubmit,
  submitLabel
}) {
  return (
    <form onSubmit={onSubmit}>
      <input
        name="description"
        placeholder="Опис"
        value={values.description}
        onChange={onChange}
        required
      />
      <input
        name="amount"
        type="number"
        placeholder="Сума"
        value={values.amount}
        onChange={onChange}
        required
      />
      <button type="submit">{submitLabel}</button>
    </form>
  );
}

       