'use client';

import { useLocale } from 'next-intl';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import { useTranslations } from 'next-intl';

//TODO: Make this two components
export default function AdminMessage() {
  const locale = useLocale();
  const t = useTranslations('AdminMessage');

  return (
    <Accordion
      type="single"
      collapsible
      className="w-[100%] sm:w-[66%] mt-6 bg-blue-200 rounded-md"
    >
      <AccordionItem value="greeting">
        <AccordionTrigger className="pl-5 pr-5 no-underline hover:no-underline">
          {t('admin-msg')}
        </AccordionTrigger>

        <AccordionContent className="bg-white rounded-b-md">
          {locale === 'ja' ? (
            <div className="space-y-4 text-sm pt-5 w-[95%] mx-auto pb-3">
              <p>こんにちは、管理人のたにぐちです。</p>

              <p className="text-sm leading-loose">
                このサイトは、ヨルシカの楽曲情報をまとめたファンサイトです。
                <br />
                ネットだと情報が点在していて見つけるのが大変なので、曲ごとに整理したら欲しい情報に素早くアクセスできるのでは？と思い作成しました。
                <br />
                楽曲の考察や関連する写真なども載せれるようにして、皆さんからのご協力をいただきながら、より充実したファンサイトに育てていきたいと思っています。
                <br />
                まだ成長途中で定期的にアップデートしていきますので、ぜひブックマークして時々覗いてみてくださいね。
              </p>

              <p className="text-sm">
                ご要望や修正点などがございましたら、Xの
                <a
                  href="https://x.com/GuanDou29555"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 underline mx-1"
                >
                  @GuanDou29555
                </a>
                までお気軽にご連絡ください。
              </p>

              <div className="border-t border-gray-200 pt-3 text-left">
                <p className="text-xs text-gray-500">
                  ※ このサイトは非公式のファンサイトです。
                </p>
              </div>
            </div>
          ) : (
            <div className="space-y-4 text-sm pt-5 w-[95%] mx-auto pb-3">
              <p> Hey! I’m Taniguchi, the site administrator.</p>

              <p className="text-sm leading-loose">
                This website is a fan-made repository for information on Yorushika’s music.
                <br />
                Since it can be difficult to find reliable details on the internet, I wanted to organize everything so fans could easily access what they’re looking for.
                <br />
                I plan to include song interpretations and related photos, with help from the community, to make this a more complete and evolving resource.
                <br />
                The site is still growing and will be updated regularly — please bookmark it and check back from time to time!
              </p>

              <p className="text-sm">
                If you have suggestions or corrections, feel free to reach out on X:
                <a
                  href="https://x.com/GuanDou29555"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 underline mx-1"
                >
                  @GuanDou29555
                </a>
              </p>

              <div className="border-t border-gray-200 pt-3 text-left">
                <p className="text-xs text-gray-500">
                  ※ This website is an unofficial fan site and not related to Yorushika Official.
                </p>
              </div>
            </div>
          )}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
