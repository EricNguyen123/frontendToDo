import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { NavLink } from 'react-router-dom';

const cx = classNames.bind(styles);

function Button({ children, link }) {
    return (
        <div className={cx('wrapper')}>
            <NavLink className={cx('btn-link')} to={link}>
                <div className={cx('btn-item')}>{children}</div>
            </NavLink>
        </div>
    );
}

export default Button;
