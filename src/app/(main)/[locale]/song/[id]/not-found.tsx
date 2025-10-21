import {useTranslations} from 'next-intl';
export default function NotFound() {
  const t = useTranslations('NotFound');
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <div className="text-6xl mb-4">🎵</div>
        <h1 className="text-6xl font-bold text-gray-400 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-2">{t('not-found-title')}</h2>
        <p className="text-gray-600 mb-6">
	{t('not-found-notice')}
        </p>
        <div className="space-y-4">
          <a
            href="/"
            className="inline-block bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors"
          >
	  {t('return-home')}
          </a>
          <p className="text-sm text-gray-500">
	    {t('select-other')}
          </p>
        </div>
      </div>
    </div>
  );
}
