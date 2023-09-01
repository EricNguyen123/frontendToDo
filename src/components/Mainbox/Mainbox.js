import classNames from 'classnames/bind';
import styles from './Mainbox.module.scss';

const cx = classNames.bind(styles);

function Mainbox({ children }) {
    return <div className={cx('wrapper', 'main-box')}>{children}</div>;
}

export default Mainbox;
