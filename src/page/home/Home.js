import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import Header from '~/components/Header';
import Body from '~/components/Body';

const cx = classNames.bind(styles);

function Home() {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <Body />
        </div>
    );
}

export default Home;
