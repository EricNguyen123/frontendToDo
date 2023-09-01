import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import $ from 'jquery';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCalendarDays, faHouse, faStar, faSun, faUser, faUsers } from '@fortawesome/free-solid-svg-icons';

import Button from './Button';
import config from '~/config';

const cx = classNames.bind(styles);

function Sidebar() {
    const handleBars = () => {
        const bars = $('.box-menu');
        bars.css({
            display: 'none',
        });
        const mainBox = $('.main-box');
        mainBox.css({
            width: '100%',
        });
        const btnBox = $('.btn-box');
        btnBox.css({
            display: 'flex',
        });
        const iconTitleContent = $('.icon-change');
        iconTitleContent.css({
            display: 'none',
        });
        const noteTitleContent = $('.note-change');
        noteTitleContent.css({
            padding: '0',
            marginLeft: '0',
        });
    };

    return (
        <div className={cx('wrapper', 'box-menu')}>
            <div className={cx('menu-btn')} onClick={handleBars}>
                <FontAwesomeIcon className={cx('icon-bars')} icon={faBars} />
            </div>
            <Button link={config.routes.myday}>
                <FontAwesomeIcon className={cx('icon-item')} icon={faSun} />
                <p className={cx('title-item')}>Ngày của tôi</p>
            </Button>
            <Button link={config.routes.important}>
                <FontAwesomeIcon className={cx('icon-item')} icon={faStar} />
                <p className={cx('title-item')}>Quan trọng</p>
            </Button>
            <Button link={config.routes.planned}>
                <FontAwesomeIcon className={cx('icon-item')} icon={faCalendarDays} />
                <p className={cx('title-item')}>Đã lập kế hoạch</p>
            </Button>
            <Button link={config.routes.assignedtome}>
                <FontAwesomeIcon className={cx('icon-item')} icon={faUser} />
                <p className={cx('title-item')}>Đã giao cho tôi</p>
            </Button>
            <Button link={config.routes.inbox}>
                <FontAwesomeIcon className={cx('icon-item')} icon={faHouse} />
                <p className={cx('title-item')}>Tác vụ</p>
            </Button>
            <Button link={config.routes.group}>
                <FontAwesomeIcon className={cx('icon-item')} icon={faUsers} />
                <p className={cx('title-item')}>Nhóm</p>
            </Button>
        </div>
    );
}

export default Sidebar;
