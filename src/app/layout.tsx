import './globals.css'
import Aoscompo from '@/lib/utils/aos'
import ScrollToTop from './components/scroll-to-top'
import Header from './components/layout/header'
import Footer from './components/layout/footer'

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="min-h-screen bg-body-bg text-white">
      <Aoscompo>
        <Header />
        {children}
        <Footer />
      </Aoscompo>
      <ScrollToTop />
    </div>
  )
}
