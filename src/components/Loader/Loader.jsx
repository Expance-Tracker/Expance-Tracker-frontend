import { ClipLoader } from 'react-spinners';
import './Loader.module.css';

const Loader = () => {
  return (
    <div className="loader-overlay">
      <ClipLoader
        color="#FF5733"
        size={80}
        speedMultiplier={1}
        aria-label="Loading Spinner"
      />
    </div>
  );
};

export default Loader;