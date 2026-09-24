import { lazy, Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import CasesPage from './pages/CasesPage'
import CasesBannerReferencePage from './pages/CasesBannerReferencePage'
import CasebookPage from './pages/CasebookPage'
import LoginPage from './pages/LoginPage'
import DownloadPage from './pages/DownloadPage'
import DemoStatePanel from './components/DemoStatePanel'

const ReaderPage = lazy(() => import('./pages/ReaderPage'))

export default function App() {
  return <><Routes>
    <Route path="/cases/" element={<CasesPage/>}/>
    <Route path="/cases-banner-reference" element={<CasesBannerReferencePage/>}/>
    <Route path="/cases/casebook/" element={<CasebookPage/>}/>
    <Route path="/cases/casebook/read/" element={<Suspense fallback={<div className="route-loading">正在打开案例总册…</div>}><ReaderPage/></Suspense>}/>
    <Route path="/cases/casebook/download/" element={<DownloadPage/>}/>
    <Route path="/login/" element={<LoginPage/>}/>
    <Route path="*" element={<Navigate to="/cases/" replace/>}/>
  </Routes><DemoStatePanel/></>
}
