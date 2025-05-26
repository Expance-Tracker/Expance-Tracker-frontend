import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setLoading } from "../../redux/global/globalSlice";

const StatisticsTab = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setLoading(true));
    const timer = setTimeout(() => dispatch(setLoading(false)), 2000);
    return () => clearTimeout(timer);
  }, [dispatch]); 
  
    return (
        <>
        </>
    ) 
};
  
export default StatisticsTab

