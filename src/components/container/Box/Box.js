import classNames from 'classnames/bind';
import styles from './Box.module.scss';

import Item from './Item';

const cx = classNames.bind(styles);

function Box() {
    return (
        <div className={cx('wrapper')}>
            <Item />
            <Item />
        </div>
    );
}

export default Box;
