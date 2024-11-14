import './privateLayout.scss'
import AuthGuard from './guard/AuthGuard'
import AsideContainer from '@/components/organisms/AsideContainer/AsideContainer'
import HeaderPrivate from '@/components/organisms/HeaderPrivate/HeaderPrivate'

export default function PrivateLayout(
    { children }: { children: React.ReactNode}
) {
  return (
    <AuthGuard>
      <div className='private-layout'>
        <div className='aside_container-layout'>
          <AsideContainer/>
        </div>
        <div className='private-container'>
            <HeaderPrivate/>
            {children}
        </div>
      </div>
    </AuthGuard>
  )
}