import { ClipLoader } from 'react-spinners';
import './Loader.module.css';

const Loader = () => {
  return (
    <div className="loader-overlay" role="status" aria-busy="true">
      <ClipLoader
        color="#FF5733"
        size={80}
        speedMultiplier={1}
        cssOverride={{
          display: 'block',
          position: 'relative',
          zIndex: 2147483647
        }}
      />
    </div>
  );
};

export default Loader;