// app/(privacy)/[locale]/privacy-policy/layout.tsx
export const metadata = {
  title: 'プライバシーポリシー | 月猫図書館',
};

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-gray-50 min-h-screen">
      {children}
    </div>
  );
}
