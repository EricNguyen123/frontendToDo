import classNames from 'classnames/bind';
import styles from './Content.module.scss';
import Title from '../Title';
import ListItem from '../ListItem';

const cx = classNames.bind(styles);

function Content() {
    return (
        <div className={cx('wrapper')}>
            <Title />
            <ListItem />
        </div>
    );
}

export default Content;
