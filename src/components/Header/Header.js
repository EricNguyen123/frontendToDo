import classNames from 'classnames/bind';
import styles from './Header.module.scss';

import Image from '~/components/Image';
import images from '~/assets/images';

import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser, faGear } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';

const cx = classNames.bind(styles);

function Header() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('logo')}>
                <Link>
                    <Image className={cx('img-logo')} src={images.logo} alt="LOGO" />
                </Link>
            </div>
            <div className={cx('option')}>
                <div className={cx('setting', 'btn-icon')}>
                    <FontAwesomeIcon className={cx('icon')} icon={faGear} />
                </div>
                <Tippy
                    interactive
                    offset={[0, 0]}
                    delay={[0, 500]}
                    placement="bottom-end"
                    render={(props) => (
                        <div className={cx('menu')} tabIndex="-1" {...props}>
                            <div className={cx('menu-box')}>
                                <div className={cx('menu-info')}>
                                    <Link className={cx('img-link')}>
                                        <Image
                                            className={cx('img-avatar')}
                                            src="https://haycafe.vn/wp-content/uploads/2022/02/Anh-gai-xinh-Viet-Nam.jpg"
                                            alt="avatar"
                                        />
                                    </Link>
                                    <div className={cx('info')}>
                                        <Link className={cx('info-link')}>
                                            <p className={cx('name')}>Trần Diệu Nhi</p>
                                        </Link>
                                        <p className={cx('email')}>NhiTD@gmail.com</p>
                                    </div>
                                </div>
                                <div className={cx('btn-logout')}>
                                    <button className={cx('logout')}>Đăng xuất</button>
                                </div>
                            </div>
                        </div>
                    )}
                >
                    <div className={cx('user', 'btn-icon')}>
                        <FontAwesomeIcon className={cx('icon')} icon={faCircleUser} />
                    </div>
                </Tippy>
            </div>
        </div>
    );
}

export default Header;
