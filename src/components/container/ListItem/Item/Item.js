import classNames from 'classnames/bind';
import styles from './Item.module.scss';
import { FormGroup, Input } from 'reactstrap';
import $ from 'jquery';

const cx = classNames.bind(styles);

function Item() {
    const handleAdd = () => {
        const add = $('.add');
        add.css({
            display: 'none',
        });
        const circle = $('.circle');
        circle.css({
            display: 'flex',
        });
        const input = document.querySelector('.focus');
        if (input) {
            input.focus();
        }
    };
    const handleOptionAdd = () => {
        const options = $('.option-add');
        options.css({
            display: 'flex',
        });
    };

    return (
        <FormGroup>
            <div className={cx('wrapper')}>
                <div className={cx('item-input')} onClick={handleOptionAdd}>
                    <div className={cx('baseAdd-icon')} onClick={handleAdd}>
                        <div className={cx('icon-custem-add', 'add')}>
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
                        <div className={cx('icon-custem-circle', 'circle')}>
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
                    <Input className={cx('radio')} type="radio" />
                    <Input className={cx('text', 'focus')} type="text" placeholder="Thêm tác vụ" />
                </div>
                <div className={cx('option', 'option-add')}>
                    <div className={cx('item-icon')}>
                        <svg
                            className={cx('fluentIcon', 'icon-option')}
                            fill="currentColor"
                            aria-hidden="true"
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M7 11a1 1 0 100-2 1 1 0 000 2zm1 2a1 1 0 11-2 0 1 1 0 012 0zm2-2a1 1 0 100-2 1 1 0 000 2zm1 2a1 1 0 11-2 0 1 1 0 012 0zm2-2a1 1 0 100-2 1 1 0 000 2zm4-5.5A2.5 2.5 0 0014.5 3h-9A2.5 2.5 0 003 5.5v9A2.5 2.5 0 005.5 17h9a2.5 2.5 0 002.5-2.5v-9zM4 7h12v7.5c0 .83-.67 1.5-1.5 1.5h-9A1.5 1.5 0 014 14.5V7zm1.5-3h9c.83 0 1.5.67 1.5 1.5V6H4v-.5C4 4.67 4.67 4 5.5 4z"
                                fill="currentColor"
                            ></path>
                        </svg>
                    </div>
                    <div className={cx('item-icon')}>
                        <svg
                            className={cx('fluentIcon', 'icon-option')}
                            fill="currentColor"
                            aria-hidden="true"
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M10 2a5.92 5.92 0 015.98 5.36l.02.22V11.4l.92 2.22a1 1 0 01.06.17l.01.08.01.13a1 1 0 01-.75.97l-.11.02L16 15h-3.5v.17a2.5 2.5 0 01-5 0V15H4a1 1 0 01-.26-.03l-.13-.04a1 1 0 01-.6-1.05l.02-.13.05-.13L4 11.4V7.57A5.9 5.9 0 0110 2zm1.5 13h-3v.15a1.5 1.5 0 001.36 1.34l.14.01c.78 0 1.42-.6 1.5-1.36V15zM10 3a4.9 4.9 0 00-4.98 4.38L5 7.6V11.5l-.04.2L4 14h12l-.96-2.3-.04-.2V7.61A4.9 4.9 0 0010 3z"
                                fill="currentColor"
                            ></path>
                        </svg>
                    </div>
                    <div className={cx('item-icon')}>
                        <svg
                            className={cx('fluentIcon', 'icon-option')}
                            fill="currentColor"
                            aria-hidden="true"
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M16.5 6.67a.5.5 0 01.3.1l.08.07.01.02A5 5 0 0113.22 15L13 15H6.7l1.65 1.65c.18.17.2.44.06.63l-.06.07a.5.5 0 01-.63.06l-.07-.06-2.5-2.5a.5.5 0 01-.06-.63l.06-.07 2.5-2.5a.5.5 0 01.76.63l-.06.07L6.72 14h.14L7 14h6a4 4 0 003.11-6.52.5.5 0 01.39-.81zm-4.85-4.02a.5.5 0 01.63-.06l.07.06 2.5 2.5.06.07a.5.5 0 010 .56l-.06.07-2.5 2.5-.07.06a.5.5 0 01-.56 0l-.07-.06-.06-.07a.5.5 0 010-.56l.06-.07L13.28 6h-.14L13 6H7a4 4 0 00-3.1 6.52c.06.09.1.2.1.31a.5.5 0 01-.9.3A4.99 4.99 0 016.77 5h6.52l-1.65-1.65-.06-.07a.5.5 0 01.06-.63z"
                                fill="currentColor"
                            ></path>
                        </svg>
                    </div>
                    <div className={cx('btn-add')}>
                        <span className={cx('btn-name')}>Thêm</span>
                    </div>
                </div>
            </div>
        </FormGroup>
    );
}

export default Item;
