import classNames from 'classnames/bind';
import styles from './Title.module.scss';

import $ from 'jquery';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import { privateRoutes } from '~/Routers';

const cx = classNames.bind(styles);

function Title() {
    const [day, setDay] = useState('');
    const [date, setDate] = useState('');
    const [month, setMonth] = useState('');
    const calendar = ['Chủ nhật', 'Thứ hai', 'Thứ ba', 'Thứ tư', 'Thứ năm', 'Thứ sáu', 'Thứ bảy'];

    const param = window.location.pathname;
    const [item, setItem] = useState({});

    useEffect(() => {
        const newDate = new Date();
        setDay(calendar[newDate.getDay()]);
        setDate(newDate.getDate());
        setMonth(newDate.getMonth() + 1);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        const titleName = privateRoutes.find((e) => e.path === param);
        setItem(titleName);
    }, [param]);

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
        const iconTitleContent = $('.icon-change');
        iconTitleContent.css({
            display: 'flex',
        });
        const noteTitleContent = $('.note-change');
        noteTitleContent.css({
            padding: 'var(--pading-menu-bars)',
            marginLeft: 'var(--margin-left-menu-bars)',
        });
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('menu-btn', 'btn-box')} onClick={handleBars}>
                <FontAwesomeIcon className={cx('icon-bars')} icon={faBars} />
            </div>
            <div className={cx('title-header')}>
                <div className={cx('title-content')}>
                    <div className={cx('icon-content', 'icon-change')}>
                        <FontAwesomeIcon className={cx('icon-item-content')} icon={item.icon} />
                    </div>

                    <h2 className={cx('title-item-content')}>{item.title}</h2>

                    <div className={cx('icon-end')}>
                        {/* <div className={cx('icon-ellipsis')}>
                            <FontAwesomeIcon className={cx('ellipsis')} icon={faEllipsis} />
                        </div> */}
                    </div>
                </div>
                <p className={cx('note-day', 'note-change')}>{`${day}, ngày ${date} tháng ${month}`}</p>
            </div>
        </div>
    );
}

export default Title;
