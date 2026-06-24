export default function FreeTrialLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <style>{`nav { display: none !important; } footer { display: none !important; }`}</style>
      {children}
    </>
  )
}
