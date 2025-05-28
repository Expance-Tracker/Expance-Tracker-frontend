import { ClipLoader } from 'react-spinners';
import { useSelector } from 'react-redux';
import styles from './Loader.module.css';

const Loader = () => {
  const isLoading = useSelector((state) => state.global.isLoading);

  if (!isLoading) return null;

  return (
    <div className={styles['loader-overlay']} role="status" aria-busy="true">
      <ClipLoader
        color="#FF5733"
        size={80}
        speedMultiplier={1}
        cssOverride={{
          display: 'block',
          margin: '0 auto',
          borderWidth: '5px',
        }}
      />
    </div>
  );
};

export default Loader;
