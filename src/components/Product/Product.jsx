import React from 'react'
import classnames from 'classnames/bind'
import styles from './Product.module.css'
import product from '../../assets/products/product1.jpg'
const cx = classnames.bind(styles)

export default ({ discription = 'Balo Cói Đan Nắp Gập Khóa Tròn - BAC 0133 - Màu Hồng', price = '845.000₫', image = product }) => {
    return (
        <div className={cx('col-6', 'col-sm-4', 'col-md-3', 'container-product')}>
            <img src={image} alt='product' className={cx('image-product')} />
            <p className={cx('txt-nomal')}>{price}</p>
            <div className={cx('div-name-product')}>
                <p className={cx('txt-nomal')}>{discription}</p>
            </div>
            <button className={cx('button')}>
                <p className={cx('txt-button')}>New</p>
            </button>
        </div>
    )
}