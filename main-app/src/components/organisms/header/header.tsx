import LanguageButton from '@/components/atoms/languageButton/languageButton'
import LinkBackButton from '@/components/atoms/linkBackButton/linkBackButton'
import { useTranslate } from '@/i18n/useTranslate'

import { flagEN, flagRS } from '../../../assets/icons'

type HeaderProps = {
    navigationBackText?: string
    navigateBackUrl?: string
}

const Header = ({ navigationBackText, navigateBackUrl }: HeaderProps) => {
    const { t, changeLanguage, isLanguageActive } = useTranslate()

    return (
        <header className="header">
            <div className="header-left">
                {navigationBackText && navigateBackUrl && (
                    <LinkBackButton
                        buttonText={navigationBackText || t('header.back')}
                        buttonUrl={navigateBackUrl}
                    />
                )}
            </div>
            <div className="header-right">
                <LanguageButton
                    flag={flagRS}
                    language="RS"
                    callback={() => changeLanguage('rs')}
                    active={isLanguageActive('rs')}
                />
                <LanguageButton
                    flag={flagEN}
                    language="EN"
                    callback={() => changeLanguage('en')}
                    active={isLanguageActive('en')}
                />
            </div>
        </header>
    )
}

export default Header
