import Container from '@/components/atoms/container/container'
import VoucherItem from '@/components/molecules/voucherItem/voucherItem'
import Footer from '@/components/organisms/footer/footer'
import Header from '@/components/organisms/header/header'
import { service } from '@/data/mocks/service.mock'
import { useTranslate } from '@/i18n/useTranslate'
import { chechLights } from '../../../assets/images'
import { comingSoon } from '@/assets/icons'

export default function ServiceTemplate() {
    const { t } = useTranslate()

    return (
        <Container isFullHeight={true}>
            <Header />
            <div className="service-template">
                <h1>{t('service.title')}</h1>
                <p>{t('service.subtitle')}</p>
                <div className="service-template__vouchers">
                    {service.map((item) => (
                        <VoucherItem
                            title={item.title}
                            subtitle={item.subtitle}
                            image={item.image}
                            variant={item.variant as 'bet' | 'gaming'}
                        />
                    ))}
                </div>
                <h1>{t('service.payBills.title')}</h1>
                <p>{t('service.payBills.body')}</p>

                <div className="service-template__pay-bills">
                    <span className="coming-soon-badge">
                        <img src={comingSoon} />
                    </span>
                    <div className="service-template__pay-bills__content">
                        <h4>{t('service.payBills.simpleScanTitle')}</h4>
                        <p>{t('service.payBills.simpleScanBody')}</p>
                    </div>
                    <div className="service-template__pay-bills__image">
                        <img src={chechLights} alt="Check Lights" />
                    </div>
                </div>
            </div>
            <Footer />
        </Container>
    )
}
