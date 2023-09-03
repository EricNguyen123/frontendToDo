import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

function Button({ item }) {
    return (
        <div className={cx('wrapper')}>
            {item.icon}
            <span className={cx('btn-title')}>{item.title}</span>
        </div>
    );
}

Button.propTypes = {
    item: PropTypes.object.isRequired,
};

export default Button;
