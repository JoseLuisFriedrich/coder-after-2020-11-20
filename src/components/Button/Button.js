import { Link } from 'react-router-dom'
import './Button.scss'

const Button = ({ content, path, callback }) => {
  return (
    <Link to={path}>
      {content.startsWith('http') || content.startsWith('data:') ? (
        <img src={content} alt='' />
      ) : (
        <button id='Button' onClick={callback}>
          {content}
        </button>
      )}
    </Link>
  )
}

export default Button
