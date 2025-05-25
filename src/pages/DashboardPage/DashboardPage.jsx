import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setLoading } from "../../redux/global/globalSlice";

export default function DashboardPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setLoading(true));
    const timer = setTimeout(() => dispatch(setLoading(false)), 2000);
    return () => clearTimeout(timer);
  }, [dispatch]);
  
  // заглушка на дешборд
  return <div>Dashboard Content</div>;
}