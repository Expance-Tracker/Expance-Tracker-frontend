import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setLoading } from "../../redux/global/globalSlice";
import Currency from '../../components/Currency/Currency';
import Navigation from '../../components/NavLink/Navigation';
import styles from './StatisticsTab.module.css'


const StatisticsTab = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setLoading(true));
    const timer = setTimeout(() => dispatch(setLoading(false)), 2000);
    return () => clearTimeout(timer);
  }, [dispatch]); 
  
    return (
      <div>
        <Navigation />
        <div className={styles.currency_not_mobile}>
          <Currency />
          </div>
      </div>
    ) 
};
  
export default StatisticsTab

