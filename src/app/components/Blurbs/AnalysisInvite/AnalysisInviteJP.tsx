// components/KousatsuInvite.tsx
export default function AnalysisInviteJP() {
  return (
    <div className="max-w-2xl mt-8 p-2">
      <div className="rounded-lg border border-gray-200 p-4 bg-gradient-to-br from-purple-50 to-indigo-50">
        <p className="text-gray-800 text-base mb-4 leading-relaxed font-medium">
          🌙 あなたの考察を聞かせてください！
        </p>

        <ul className="text-gray-600 mb-4 space-y-2 text-sm">
          <li className="flex items-start">
            <span className="text-purple-500 mr-2 mt-0.5">•</span>
            歌詞の意味や解釈
          </li>
          <li className="flex items-start">
            <span className="text-purple-500 mr-2 mt-0.5">•</span>
            n-bunaさんが創る楽曲構成・各楽器パートのフレーズについて
          </li>
          <li className="flex items-start">
            <span className="text-purple-500 mr-2 mt-0.5">•</span>
            suisさんの歌声の表現
          </li>
          <li className="flex items-start">
            <span className="text-purple-500 mr-2 mt-0.5">•</span>
            MVや小説との関連性
          </li>
        </ul>

        <p className="text-gray-700 mb-4 leading-normal text-sm">
          どんな角度からの解釈でも大歓迎です✨
        </p>

        <p className="text-purple-600 font-medium mb-4 text-sm">
          XでDMをいただけると嬉しいです🎵
        </p>

        <div className="border-t border-gray-200 pt-3 mt-4 bg-white/50 -mx-4 px-4 rounded-b-lg">
          <p className="text-xs text-gray-500 text-center">
            ※ ここに載せる考察は個人の見解であり、公式の見解ではありません
          </p>
        </div>
      </div>
    </div>
  );
}
