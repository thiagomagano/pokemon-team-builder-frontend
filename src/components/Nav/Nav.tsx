import './nav.css'

function Nav(): JSX.Element {
  return (
    <nav>
      <div className="logo">
        <span>MakeYourParty</span>
      </div>
      <div className='btn-group'>
        <button className="btn login">Login</button>
        <button className="btn signup">Signup</button>
      </div>
    </nav>
  )
}

export default Nav