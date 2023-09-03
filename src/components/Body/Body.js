import classNames from 'classnames/bind';
import styles from './Body.module.scss';
import Sidebar from '~/components/Sidebar';
import Mainbox from '~/components/Mainbox';
import InboxOption from '~/components/InboxOption';

const cx = classNames.bind(styles);

function Body({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Sidebar />
            <Mainbox>{children}</Mainbox>
            <InboxOption />
        </div>
    );
}

export default Body;
