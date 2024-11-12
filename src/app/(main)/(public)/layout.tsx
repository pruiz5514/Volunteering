import './publicLayout.scss';

export default function PublicLayout(
    { children }: { children: React.ReactNode}
) {
  return (
    <div className='layout-public'>
        {children}
    </div>
  )
}