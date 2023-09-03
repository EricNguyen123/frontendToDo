import classNames from 'classnames/bind';
import styles from './Step.module.scss';
import $ from 'jquery';
import { Input } from 'reactstrap';

const cx = classNames.bind(styles);

function Step() {
    const handleAdd = () => {
        const add = $('.add-inbox-option');
        add.css({
            display: 'none',
        });
        const circle = $('.circle-inbox-option');
        circle.css({
            display: 'flex',
        });
        const input = document.querySelector('.focus-inbox-option');
        if (input) {
            input.focus();
        }
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('baseAdd-icon-inbox-option')} onClick={handleAdd}>
                    <div className={cx('icon-custem-add-inbox-option', 'add-inbox-option')}>
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
                                d="M10 2.5a.5.5 0 00-1 0V9H2.5a.5.5 0 000 1H9v6.5a.5.5 0 001 0V10h6.5a.5.5 0 000-1H10V2.5z"
                                fill="currentColor"
                            ></path>
                        </svg>
                    </div>
                    <div className={cx('icon-custem-circle-inbox-option', 'circle-inbox-option')}>
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
                                d="M10 3a7 7 0 100 14 7 7 0 000-14zm-8 7a8 8 0 1116 0 8 8 0 01-16 0z"
                                fill="currentColor"
                            ></path>
                        </svg>
                    </div>
                </div>
                <Input className={cx('text', 'focus-inbox-option')} type="text" placeholder="Thêm bước" />
                <div className={cx('btn-add-step')}>
                    <span className={cx('btn-name')}>Thêm</span>
                </div>
            </div>
        </div>
    );
}

export default Step;
