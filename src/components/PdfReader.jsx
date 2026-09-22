import { useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight, ZoomIn, ZoomOut, Maximize, List, Download, X } from 'lucide-react'
import * as pdfjs from 'pdfjs-dist'
import PdfWorker from 'pdfjs-dist/build/pdf.worker.min.mjs?worker'

pdfjs.GlobalWorkerOptions.workerPort = new PdfWorker()
const PDF_URL = './assets/casebook/OpenCSG-Customer-Casebook.pdf'
let pdfLoadingTask
const getPdfLoadingTask = () => (pdfLoadingTask ||= pdfjs.getDocument(PDF_URL))

export default function PdfReader({ onDownload }) {
  const [page, setPage] = useState(0), [zoom, setZoom] = useState(1), [toc, setToc] = useState(() => typeof window === 'undefined' || window.innerWidth > 800)
  const [pdf, setPdf] = useState(null), [pageCount, setPageCount] = useState(106), [error, setError] = useState('')
  const reader = useRef(null)
  useEffect(() => { let active = true; const task = getPdfLoadingTask(); task.promise.then(doc => { if (active) { setPdf(doc); setPageCount(doc.numPages) } }).catch(() => { if (active) setError('案例总册加载失败，请刷新后重试。') }); return () => { active = false } }, [])
  useEffect(() => { const key = e => { if (e.key === 'ArrowRight') setPage(p => Math.min(pageCount - 1, p + 1)); if (e.key === 'ArrowLeft') setPage(p => Math.max(0, p - 1)) }; window.addEventListener('keydown', key); return () => window.removeEventListener('keydown', key) }, [pageCount])
  useEffect(() => { const fitToc = () => { if (window.innerWidth <= 800) setToc(false) }; window.addEventListener('resize', fitToc); return () => window.removeEventListener('resize', fitToc) }, [])
  return <div className="reader" ref={reader}><div className="reader-toolbar"><button onClick={() => setToc(v => !v)} title="目录"><List/></button><span className="reader-title">OpenCSG 客户案例总册</span><div className="reader-tools"><button onClick={() => setZoom(z => Math.max(.7, z-.1))} title="缩小"><ZoomOut/></button><span>{Math.round(zoom*100)}%</span><button onClick={() => setZoom(z => Math.min(1.5, z+.1))} title="放大"><ZoomIn/></button><button onClick={() => reader.current?.requestFullscreen?.()} title="全屏"><Maximize/></button><button className="reader-download" onClick={onDownload}><Download/> 下载 PDF</button></div></div>
    <div className="reader-main">{toc && <aside className="reader-toc"><div><b>目录 · {pageCount} 页</b><button onClick={() => setToc(false)}><X/></button></div>{Array.from({length:pageCount},(_,i) => <button key={i+1} className={page===i?'active':''} onClick={() => setPage(i)}><span>{String(i+1).padStart(3,'0')}</span>{i===0?'封面':i===1?'目录':`第 ${i+1} 页`}</button>)}</aside>}
      <section className="reader-canvas"><button className="page-nav prev" disabled={page===0} onClick={() => setPage(p => p-1)}><ChevronLeft/></button><div className="reader-paper real-pdf" style={{transform:`scale(${zoom})`}}>{error ? <div className="pdf-error">{error}</div> : <PdfCanvas pdf={pdf} pageNumber={page+1}/>}</div><button className="page-nav next" disabled={page===pageCount-1} onClick={() => setPage(p => p+1)}><ChevronRight/></button></section>
    </div><div className="reader-status"><button disabled={page===0} onClick={() => setPage(p => p-1)}>上一页</button><span>{page+1} / {pageCount}</span><button disabled={page===pageCount-1} onClick={() => setPage(p => p+1)}>下一页</button></div></div>
}

function PdfCanvas({ pdf, pageNumber }) {
  const canvasRef = useRef(null)
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    if (!pdf) return
    let cancelled = false, renderTask
    setLoading(true)
    pdf.getPage(pageNumber).then(page => {
      if (cancelled) return
      const viewport = page.getViewport({ scale: 1.75 })
      const canvas = canvasRef.current, context = canvas.getContext('2d')
      canvas.width = viewport.width; canvas.height = viewport.height
      renderTask = page.render({ canvasContext: context, viewport })
      return renderTask.promise
    }).then(() => { if (!cancelled) setLoading(false) }).catch(err => { if (!cancelled && err?.name !== 'RenderingCancelledException') setLoading(false) })
    return () => { cancelled = true; renderTask?.cancel() }
  }, [pdf, pageNumber])
  return <>{loading && <div className="pdf-loading">正在加载第 {pageNumber} 页…</div>}<canvas ref={canvasRef} aria-label={`客户案例总册第 ${pageNumber} 页`} /></>
}
