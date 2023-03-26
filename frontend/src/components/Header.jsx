import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout, reset } from '../features/authSlice'
import '../components_css/Header.css'
import '../pages/StockMetrics'

function Header() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.auth)

  const onLogout = () => {
    dispatch(logout())
    dispatch(reset())
    navigate('/')
  }

  return (
    <header class="header">
      <Link to='/'><a href="" class="logo">Tiker-Watch</a></Link>
      <input class="menu-btn" type="checkbox" id="menu-btn" />
      <label class="menu-icon" for="menu-btn"><span class="navicon"></span></label>
      <ul class="menu">

        {user ? (
          <li>
            <button className='logout-button' onClick={onLogout}>
              <FaSignOutAlt /> Logout
            </button>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/eightpillars'>8-Pillar Analysis</Link></li>
            <li><Link to='/watchlist'>Watchlist</Link></li>
            <li><Link to='/'>News Feed</Link></li>
          </li>
        ) : (
          <>
            <li>
              <Link to='/login'>
                <FaSignInAlt /> Login
              </Link>
            </li>
            <li>
              <Link to='/register'>
                <FaUser /> Register
              </Link>
            </li>
          </>
        )}

      </ul>
    </header>
  )
}

export default Header