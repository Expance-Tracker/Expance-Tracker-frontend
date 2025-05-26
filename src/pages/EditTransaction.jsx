import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchTransactionById, saveTransaction } from '../api/transactions';
import TransactionForm from '../components/TransactionForm';

export default function EditTransaction() {
  const { id } = useParams();
  const [form, setForm] = useState({ description: '', amount: '' });

  useEffect(() => {
    fetchTransactionById(id).then(res => {
      const tx = res.data;
      setForm({ description: tx.description, amount: tx.amount });
    });
  }, [id]);

  const handleChange = e =>
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = e => {
    e.preventDefault();
    saveTransaction(id, form).then(() => {
      alert('Збережено!');
      // за бажанням: навігація назад
    });
  };

  return (
    <div>
      <h2>Редагувати транзакцію</h2>
      <TransactionForm
        values={form}
        onChange={handleChange}
        onSubmit={handleSubmit}
        submitLabel="Зберегти"
      />
    </div>
  );
}
