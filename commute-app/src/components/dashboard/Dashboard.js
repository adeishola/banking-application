import './dashboard.css'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {

  const navigate = useNavigate()

  return (
    <div className='dash'>
        <div onClick={() => navigate('/new')}>
          New Account
        </div>
        <div onClick={() => navigate('/deposit')}>
          Deposit
        </div>
        <div onClick={() => navigate('/withdraw')}>
          Withdraw
        </div>
        <div onClick={() => navigate('/transfer')}>
          Transfer
        </div>
        <div onClick={() => navigate('/balance')}> 
          Balance
        </div>    
    </div>
  )
}

export default Dashboard
