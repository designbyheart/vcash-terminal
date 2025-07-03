import React from 'react'
import './_voucherItem.scss'
import { useTranslation } from 'react-i18next'

export interface VoucherItemProps {
    title: string
    subtitle: string
    image: string
    variant: 'bet' | 'gaming'
}

const VoucherItem: React.FC<VoucherItemProps> = ({
    title,
    subtitle,
    image,
    variant
}) => {
    const { t } = useTranslation()
    return (
        <div className={`voucher-item voucher-item--${variant}`}>
            <div className="voucher-item__text">
                <h3 className="voucher-item__title">{t(title)}</h3>
                <p className="voucher-item__subtitle">{t(subtitle)}</p>
            </div>
            <div className="voucher-item__image-wrapper">
                <img src={image} alt={title} className="voucher-item__image" />
            </div>
        </div>
    )
}

export default VoucherItem
