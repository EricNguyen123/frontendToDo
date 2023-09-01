import classNames from 'classnames/bind';
import styles from './Item.module.scss';
import { FormGroup, Input } from 'reactstrap';

const cx = classNames.bind(styles);

function Item() {
    return (
        <FormGroup>
            <div className={cx('wrapper')}>
                <div className={cx('item-input')}>
                    <Input className={cx('radio')} type="radio" />
                    <Input className={cx('text')} type="text" placeholder="Thêm tác vụ" />
                </div>
            </div>
        </FormGroup>
    );
}

export default Item;
