import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setLoading } from "../../redux/global/globalSlice";
import Currency from '../../components/Currency/Currency';
import Navigation from '../../components/NavLink/Navigation';
import styles from './CurrencyTab.module.css'

const CurrencyTab = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  useEffect(() => {
    const checkScreenSize = () => {
      if (window.innerWidth > 768) {
        navigate('/', { replace: true });
      }
    };

    checkScreenSize(); 
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, [navigate]);

  useEffect(() => {
    dispatch(setLoading(true));
    const timer = setTimeout(() => dispatch(setLoading(false)), 2000);
    return () => clearTimeout(timer);
  }, [dispatch]);  

  return (
    <div >
      <Navigation />
      <div className={styles.currency_mobile_two}>
        <Currency />
     </div>
    </div>
  );
};

export default CurrencyTab;