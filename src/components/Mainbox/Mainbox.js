import classNames from 'classnames/bind';
import styles from './Mainbox.module.scss';
import $ from 'jquery';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Mainbox() {
    const handleBars = () => {
        const bars = $('.box-menu');
        bars.css({
            display: 'flex',
        });
        const mainBox = $('.main-box');
        mainBox.css({
            width: '80%',
        });
        const btnBox = $('.btn-box');
        btnBox.css({
            display: 'none',
        });
    };
    return (
        <div className={cx('wrapper', 'main-box')}>
            <div className={cx('menu-btn', 'btn-box')} onClick={handleBars}>
                <FontAwesomeIcon className={cx('icon-bars')} icon={faBars} />
            </div>
        </div>
    );
}

export default Mainbox;
