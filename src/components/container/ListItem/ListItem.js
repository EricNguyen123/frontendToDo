import classNames from 'classnames/bind';
import styles from './ListItem.module.scss';
import { FastField, Form, Formik } from 'formik';
import Item from './Item';

const cx = classNames.bind(styles);

function ListItem() {
    return (
        <div className={cx('wrapper')}>
            <Formik>
                {(formolPros) => {
                    return (
                        <Form>
                            <FastField name="content" component={Item} />
                        </Form>
                    );
                }}
            </Formik>
        </div>
    );
}

export default ListItem;
