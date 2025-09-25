import { useTranslations } from 'next-intl'

export default function NotFoundPage() {
  const t = useTranslations('Common')

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold text-white">404</h1>
        <p className="text-xl text-gray-400">{t('notFound')}</p>
      </div>
    </div>
  )
}
