import { ArrowRight, Download } from 'lucide-react'

export function PrimaryButton({ children, onClick, to, icon = 'arrow', className = '', type = 'button' }) {
  const content = <>{children}{icon === 'download' ? <Download size={17} /> : icon === 'none' ? null : <ArrowRight size={17} />}</>
  return to ? <a className={`btn btn-primary ${className}`} href={to}>{content}</a> : <button type={type} className={`btn btn-primary ${className}`} onClick={onClick}>{content}</button>
}

export function SecondaryButton({ children, onClick, to, icon = 'arrow', className = '', type = 'button' }) {
  const content = <>{children}{icon === 'download' ? <Download size={17} /> : icon === 'none' ? null : <ArrowRight size={17} />}</>
  return to ? <a className={`btn btn-secondary ${className}`} href={to}>{content}</a> : <button type={type} className={`btn btn-secondary ${className}`} onClick={onClick}>{content}</button>
}
