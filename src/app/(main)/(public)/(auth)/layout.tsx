import './authLayout.scss';

export default function PublicAuthLayout(
    { children }: { children: React.ReactNode}
) {
  return (
    <>
        <header className="auth-header">
            <a href="/">Volver al inicio</a>
        </header>
        {children}
    </>
  )
}