import classNames from 'classnames/bind';
import styles from './InboxOption.module.scss';
import $ from 'jquery';

const cx = classNames.bind(styles);

function InboxOption() {
    const handleOut = () => {
        const inboxOption = $('.inbox-option');
        inboxOption.css({
            display: 'none',
        });
        const mainBox = $('.main-box');
        mainBox.css({
            width: '80%',
        });
        const innerClick = $('.inner-click');
        innerClick.css({
            backgroundColor: 'var(--white)',
        });
    };
    return (
        <div className={cx('wrapper', 'inbox-option')}>
            <div className={cx('header-option')}></div>
            <div className={cx('footer-option')}>
                <div className={cx('btn-footer', 'btn-out')} onClick={handleOut}>
                    <svg
                        className={cx('fluentIcon')}
                        fill="currentColor"
                        aria-hidden="true"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M9.18 10.5l-1 .87a.5.5 0 10.66.76l2-1.75a.5.5 0 000-.76l-2-1.75a.5.5 0 10-.66.76l1 .87H5.5a.5.5 0 000 1h3.68zM16 16a2 2 0 002-2V6a2 2 0 00-2-2H4a2 2 0 00-2 2v8c0 1.1.9 2 2 2h12zm1-2a1 1 0 01-1 1h-3V5h3a1 1 0 011 1v8zm-5-9v10H4a1 1 0 01-1-1V6a1 1 0 011-1h8z"
                            fill="currentColor"
                        ></path>
                    </svg>
                </div>
                <div className={cx('detail-footer')}>
                    <span className={cx('detail')}>Da tao hom qua</span>
                </div>
                <div className={cx('btn-footer', 'btn-delete')}>
                    <svg
                        className={cx('fluentIcon')}
                        fill="currentColor"
                        aria-hidden="true"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M8.5 4h3a1.5 1.5 0 00-3 0zm-1 0a2.5 2.5 0 015 0h5a.5.5 0 010 1h-1.05l-1.2 10.34A3 3 0 0112.27 18H7.73a3 3 0 01-2.98-2.66L3.55 5H2.5a.5.5 0 010-1h5zM5.74 15.23A2 2 0 007.73 17h4.54a2 2 0 001.99-1.77L15.44 5H4.56l1.18 10.23zM8.5 7.5c.28 0 .5.22.5.5v6a.5.5 0 01-1 0V8c0-.28.22-.5.5-.5zM12 8a.5.5 0 00-1 0v6a.5.5 0 001 0V8z"
                            fill="currentColor"
                        ></path>
                    </svg>
                </div>
            </div>
        </div>
    );
}

export default InboxOption;
