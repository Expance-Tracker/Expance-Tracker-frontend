import { useDispatch, useSelector } from "react-redux";
import ButtonAddTransaction from "../../components/ButtonAddTransaction/ButtonAddTransaction";
import { useEffect } from "react";
import { fetchCategories } from "../../redux/slices/categoriesSlice";

// заглушка на дешборд
export default function DashboardPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <div>
      <p style={{ padding: 40 }}>Dashboard Page</p>
      <ButtonAddTransaction />
    </div>
  );
}
