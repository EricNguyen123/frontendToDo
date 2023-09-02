import classNames from 'classnames/bind';
import styles from './Content.module.scss';
import Title from '../Title';
import ListItem from '../ListItem';
import Box from '../Box';

const cx = classNames.bind(styles);

function Content() {
    return (
        <div className={cx('wrapper')}>
            <Title />
            <ListItem />
            <Box />
        </div>
    );
}

export default Content;
