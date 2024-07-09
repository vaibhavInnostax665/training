import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navigation = () => {
    const navigate = useNavigate();
  return (
    <nav className='navigation'>
        <ul className='unordered_list'>
            <li>
            <button onClick={()=>navigate('/')}>Home</button>
            </li>
            <li>
            <button onClick={()=>navigate('/useEffect')}>useEffect</button>
            </li>
            <li>
            <button onClick={()=> navigate('/useRef')}>useRef</button>
            </li>
            <li>
            <button onClick={()=> navigate('/useState')}> useState</button>
            </li>
            <li>
            <button onClick={()=> navigate('/useCallback')}> useCallback</button>
            </li>
            <li>
            <button onClick={()=> navigate('/useMemo')}> useMemo</button>
            </li>
        </ul>
    </nav>
  )
}

export default Navigation