    import { ThreeDots } from 'react-loader-spinner';
    import './Loader.module.css';

    const Loader = ({ color = "#4fa94d", size = 100 }) => {
    return (
        <div className="loader-overlay show">
        <ThreeDots 
            height={size}
            width={size}
            color={color} 
            radius="9" 
            ariaLabel="three-dots-loading"
            visible={true}
            wrapperStyle={{ display: 'block' }}
            wrapperClass="dots-wrapper"
        />
        </div>
    );
    };

    export default Loader;