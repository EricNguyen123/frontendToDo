import { faBell, faCalendarDays, faPaperclip, faRepeat, faSun, faTag } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from '~/components/InboxOption/Button/Button.module.scss';

const cx = classNames.bind(styles);

const optionBtn = [
    {
        icon: <FontAwesomeIcon className={cx('icon-inbox-add')} icon={faSun} />,
        title: 'Thêm vào Ngày của tôi',
    },
    {
        icon: <FontAwesomeIcon className={cx('icon-inbox-add')} icon={faBell} />,
        title: 'Nhắc tôi',
    },
    {
        icon: <FontAwesomeIcon className={cx('icon-inbox-add')} icon={faCalendarDays} />,
        title: 'Thêm ngày đến hạn',
    },
    {
        icon: <FontAwesomeIcon className={cx('icon-inbox-add')} icon={faRepeat} />,
        title: 'Lặp lại',
    },
    {
        icon: <FontAwesomeIcon className={cx('icon-inbox-add')} icon={faTag} />,
        title: 'Chọn danh mục',
    },
    {
        icon: <FontAwesomeIcon className={cx('icon-inbox-add')} icon={faPaperclip} />,
        title: 'Thêm tệp',
    },
];

export default optionBtn;
