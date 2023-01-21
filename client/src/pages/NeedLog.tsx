import Button from '../components/Button'
import { Link } from 'react-router-dom'
import '../styles/NeedLog.css'

export default function NeedLog() {
  return (
    <div className="needlog-page">
      <div className="needlog-modal">
        <h3>Oops it looks like you're not logged in</h3>
        <p>To access this page and view your notes, you need to log in.</p>
        <Link to='/login'><Button handleClick={() => null}> Go to login </Button></Link>
      </div>
    </div>
  )
}
