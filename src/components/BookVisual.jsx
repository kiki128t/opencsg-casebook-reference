export default function BookVisual({ small = false }) {
  return <div className={`book-visual ${small ? 'small' : ''}`}>
    <div className="real-book-stack" aria-label="OpenCSG 客户案例总册封面与内页 Mockup">
      <img className="book-sheet sheet-back" src="./assets/casebook-preview/04-section.webp" alt="案例总册章节页" />
      <img className="book-sheet sheet-mid" src="./assets/casebook-preview/03-intro.webp" alt="案例总册产品能力页" />
      <img className="book-sheet sheet-cover" src="./assets/casebook-preview/01-cover.webp" alt="OpenCSG 客户案例总册封面" />
    </div>
  </div>
}
