import classNames from 'classnames/bind';
import styles from './Box.module.scss';

import Item from './Item';
import { useSelector } from 'react-redux';

const cx = classNames.bind(styles);

function Box() {
    const newNote = useSelector((state) => state.appSlice);

    return (
        <div className={cx('wrapper')}>
            {newNote.map((note, index) => (
                <Item note={note} key={index} id={index} />
            ))}
        </div>
    );
}

export default Box;
