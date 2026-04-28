import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { PrivacyPolicyBody } from '@/components/legal/PrivacyPolicyBody';
import { buildSocialPreviewHelmetMeta } from '@/components/common/SocialPreviewOgMeta';
import { SOCIAL_DEFAULT_IMAGE_URL, SOCIAL_SITE_NAME } from '@/seo/socialPreview';
import { BASE_URL } from '@/seo/routesMeta';
import { OPERATOR_FULL_NAME, OPERATOR_TRADE_NAME } from '@/constants/privacyLegal';

const Privacy: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const canonical = `${BASE_URL}/privacy`;

  return (
    <div className="min-h-screen pt-24 pb-16">
      <Helmet>
        <title>Политика обработки персональных данных и текстовых файлов браузера | СЦ Прайм</title>
        <meta
          name="description"
          content="Политика обработки персональных данных и использования текстовых файлов браузера сервисного центра Прайм в Саранске."
        />
        <meta
          name="keywords"
          content="политика конфиденциальности, персональные данные, 152-ФЗ, текстовые файлы браузера, СЦ Прайм, Саранск"
        />
        <meta property="og:title" content="Политика персональных данных | СЦ Прайм" />
        <meta
          property="og:description"
          content="Политика обработки персональных данных и использования текстовых файлов браузера сервисного центра Прайм."
        />
        {buildSocialPreviewHelmetMeta(SOCIAL_DEFAULT_IMAGE_URL)}
        <meta property="og:url" content={canonical} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="ru_RU" />
        <meta property="og:site_name" content={SOCIAL_SITE_NAME} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Политика персональных данных | СЦ Прайм" />
        <meta
          name="twitter:description"
          content="Политика обработки персональных данных и использования текстовых файлов браузера сервисного центра Прайм."
        />
        <link rel="canonical" href={canonical} />
      </Helmet>

      <div className="container max-w-3xl px-4">
        <nav className="text-sm text-muted-foreground mb-6">
          <Link to="/" className="hover:text-primary">
            Главная
          </Link>
          <span className="mx-2">/</span>
          <span className="text-foreground">Политика персональных данных</span>
        </nav>
        <h1 className="heading-lg mb-2">Политика обработки персональных данных и текстовых файлов браузера</h1>
        <p className="text-muted-foreground mb-8">
          {OPERATOR_TRADE_NAME} · {OPERATOR_FULL_NAME}
        </p>
        <div className="space-y-4 text-foreground">
          <PrivacyPolicyBody />
        </div>
        <p className="mt-10 text-sm text-muted-foreground">
          <Link to="/contact" className="text-primary underline">
            Контакты
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Privacy;
