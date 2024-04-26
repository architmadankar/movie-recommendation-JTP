import React, { useState } from 'react';
import AbcIcon from '@mui/icons-material/Abc';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { loginProfile } from '../global/api';
import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';
import { useNavigate } from 'react-router-dom';

export default function Login() {

  const [passwordShow, setPasswordShow] = useState(false)
  const [formData, setFormData] = useState({ username: "", password: "" })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const navigate = useNavigate()

  const handleTogglePasswordVisibility = (e) => {
    e.preventDefault()
    setPasswordShow(!passwordShow)
  }

  const handleLogin = async (e) => {
    e.preventDefault()
    setLoading(true)
    if (formData.username && formData.password) {
      loginProfile({ username: formData.username, password: formData.password }).then(res => {
        localStorage.setItem("token", res.token)
        navigate("/")
        setError("")
      }).catch(err => { setError("Unable To Login"); console.log(err) })
        .finally(() => {
          setLoading(false)
        })
    }
    else {
      setError("Please provide all credentials")
    }
  }



  return <div className={`loginContainer`}>
      <div style={{ display: 'grid', placeItems: 'center'}}>
        
       
          <center>
            <p style={{fontSize: '2.25rem'}}>Movie Suggestions</p>
            <span style={{fontSize:'1rem', display:'block'}}>Please provide credentials</span>
            
            {error && <p style={{fontSize:'0.875rem', color:'#ef4444', marginTop:'1rem'}}>{error}</p>}
            <form
              onSubmit={handleLogin}
              className="mt-4">
              <input
                className="standardInput"
                style={{ width: "calc(100% - 1rem)", backgroundColor:'#f9fafb' }}
                type="username"
                placeholder='Username'
                value={formData.username}
                onChange={e => setFormData({ ...formData, username: e.target.value })}
              />
              <div className='relative'>
                <input
                  className='standardInput'
                  style={{ width: "calc(100% - 1rem)" , backgroundColor:'#f9fafb'}}
                  type={passwordShow ? "text" : "password"}
                  placeholder='Password'
                  value={formData.password}
                  onChange={e => setFormData({ ...formData, password: e.target.value })}
                />
                <button
                  style={{ height: "calc(100% - 1rem)", position:'absolute', top:'0', right:'0',padding:'0.5rem', marginTop:'0.5rem', marginRight:'0.5rem', marginBottom:'0.5rem'}}
                  onClick={handleTogglePasswordVisibility}>
                  {passwordShow ? <MoreHorizIcon /> : <AbcIcon />}
                </button>
              </div>
              <button
                className="basicDarkButton"
                style={{ background: "var(--base-color)", color: "white", width: "calc(100% - 1rem)",display:'block',margin:'0.5rem',marginTop:'2rem',padding:'0.5rem', paddingTop:'0.75rem' }}
              >
                {!loading ? <p>Login</p> : <HourglassBottomIcon style={{ fontSize: "1rem" }} />}
              </button>
            </form>
          </center>
      </div>

      <div style={{borderRadius: '0.75rem', position:'relative'}}>
        <div
          
          style={{ height: "100%", width: "100%", borderRadius:'0.75rem', position:'absolute', bottom:'0',right:'0', overflow:'hidden' }}
        >
        </div>
      </div>
    
  </div>;
};


