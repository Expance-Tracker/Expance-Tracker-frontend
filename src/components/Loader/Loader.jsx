import { ThreeDots } from 'react-loader-spinner';
import './Loader.module.css';

const Loader = () => {
  return (
    <div className="loader-overlay">
      <ThreeDots 
        height="80"
        width="80"
        radius="9"
        color="#FF5733"  
        secondaryColor="#3498db"  
        ariaLabel="three-dots-loading"
        visible={true}
        wrapperStyle={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      />
    </div>
  );
};

export default Loader;