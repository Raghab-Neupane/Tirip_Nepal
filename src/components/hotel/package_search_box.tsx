import './pack.css'
import srch from '../../assets/search_icon.png'

const PackageSearchBox = () => {
  return (
    <div className="searchbox">
      <input type="text" placeholder="Search hotels..." />
      <button>
        <img src={srch} alt="Search" className='button' />
      </button>
    </div>

  )
}

export default PackageSearchBox