import classNames from 'classnames/bind';
import styles from './Body.module.scss';
import Sidebar from '~/components/Sidebar';
import Mainbox from '~/components/Mainbox';

const cx = classNames.bind(styles);

function Body() {
    return (
        <div className={cx('wrapper')}>
            <Sidebar />
            <Mainbox />
        </div>
    );
}

export default Body;
