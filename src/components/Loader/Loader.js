import { RotatingLines } from 'react-loader-spinner';
import css from './Loader.module.css';

export const Loader = () => (
  <div className={css.Loader}>
    <RotatingLines
      strokeColor="#FF6B0859"
      strokeWidth="5"
      animationDuration="0.75"
      width="120"
      visible={true}
    />
  </div>
);
