import {useTranslations} from 'next-intl';

function Footer() {
  const t = useTranslations('Footer');
  return (
    <footer className="w-full py-5 text-white shadow-md" style={{ backgroundColor: '#499FD8' }}>
      <div className="container flex flex-col items-center justify-center px-4 mx-auto">
        <p className="text-xl font-bold" style={{fontFamily: 'var(--font-kaisei), serif'}}>
	  {t('title')}
        </p>
        <p className="mt-3 text-xs sm:text-sm text-center">
	  {t('fan-site-notice')}
        </p>
        <div className="mt-1 text-xs sm:text-sm space-x-4">
          <a href="/privacy" className="hover:text-blue-100 underline transition-colors">
	  {t('privacy-policy')}
          </a>
        </div>
      </div>
    </footer>
  )
}
  
export default Footer
