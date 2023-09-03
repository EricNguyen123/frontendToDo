import classNames from 'classnames/bind';
import styles from './Note.module.scss';
import { Input } from 'reactstrap';

const cx = classNames.bind(styles);

function Note() {
    return (
        <div className={cx('wrapper')}>
            <Input
                className={cx('text', 'focus')}
                type="textarea"
                draggable="false"
                maxLength="255"
                placeholder="Thêm ghi chú"
            />
        </div>
    );
}

export default Note;
