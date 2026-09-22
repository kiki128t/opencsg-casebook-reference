import { useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight, X, Maximize2 } from 'lucide-react'
import { casebookContent, previewPages } from '../data/content'

export function PageArtwork({ page, compact = false }) {
  if (page.src) return <div className={`page-art page-image-art ${compact ? 'compact' : ''}`}><img src={page.src} alt={`案例总册第 ${page.no} 页：${page.title}`} /></div>
  return <div className={`page-art page-${page.type} ${compact ? 'compact' : ''}`} data-page={page.no}>
    <div className="page-top"><span>{page.kicker}</span><i>{page.no}</i></div>
    <div className="page-body"><small>OPENCSG</small><h3>{page.title}</h3><p>{page.subtitle}</p><div className="page-lines"><i/><i/><i/></div></div>
    <div className="page-blocks"><i/><i/><i/></div>
  </div>
}

export default function PreviewGallery() {
  const [active, setActive] = useState(null)
  const [page, setPage] = useState(0)
  const [pageSize, setPageSize] = useState(getPageSize)
  const touchStart = useRef(null)
  const totalPages = Math.ceil(previewPages.length / pageSize)
  const visiblePages = previewPages.slice(page * pageSize, (page + 1) * pageSize)

  useEffect(() => {
    const update = () => setPageSize(getPageSize())
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])
  useEffect(() => setPage(current => Math.min(current, totalPages - 1)), [totalPages])

  const move = direction => setPage(current => Math.max(0, Math.min(totalPages - 1, current + direction)))
  const onTouchEnd = event => {
    if (touchStart.current === null) return
    const distance = event.changedTouches[0].clientX - touchStart.current
    if (Math.abs(distance) > 42) move(distance < 0 ? 1 : -1)
    touchStart.current = null
  }

  return <section className="section preview-section" id="preview"><div className="container">
    <div className="section-head with-controls"><div><h2>{casebookContent.preview.title}</h2><p>{casebookContent.preview.description}</p></div><div className="rail-controls"><button onClick={() => move(-1)} disabled={page === 0} aria-label="上一组预览"><ChevronLeft/></button><button onClick={() => move(1)} disabled={page === totalPages - 1} aria-label="下一组预览"><ChevronRight/></button></div></div>
    <div className="preview-grid" onTouchStart={event => { touchStart.current = event.touches[0].clientX }} onTouchEnd={onTouchEnd}>{visiblePages.map((previewPage) => { const idx = previewPages.indexOf(previewPage); return <button key={previewPage.no} className="preview-card" onClick={() => setActive(idx)} aria-label={`放大第 ${previewPage.no} 页`}><PageArtwork page={previewPage}/><span>{previewPage.title}<Maximize2 size={15}/></span></button> })}</div>
    <div className="preview-pagination" aria-label="预览分页">{Array.from({ length: totalPages }, (_, index) => <button key={index} className={index === page ? 'active' : ''} onClick={() => setPage(index)} aria-label={`查看第 ${index + 1} 组`} aria-current={index === page ? 'page' : undefined}/>)}</div>
    {active !== null && <div className="lightbox" role="dialog" aria-modal="true" onClick={() => setActive(null)}><button className="lightbox-close" aria-label="关闭"><X/></button><div className="lightbox-page" onClick={e => e.stopPropagation()}><PageArtwork page={previewPages[active]}/><button className="lightbox-nav left" onClick={() => setActive((active - 1 + previewPages.length) % previewPages.length)}><ChevronLeft/></button><button className="lightbox-nav right" onClick={() => setActive((active + 1) % previewPages.length)}><ChevronRight/></button></div></div>}
  </div></section>
}

function getPageSize() {
  if (typeof window === 'undefined') return 4
  if (window.innerWidth <= 560) return 1
  if (window.innerWidth <= 900) return 2
  return 4
}
