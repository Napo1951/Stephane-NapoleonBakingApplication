function NavBar(){
  return(
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
    <div className="container-fluid">
    <a class="navbar-brand" href="#">BAD<span class="text-warning">Bank</span></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" href="#/home/" title="Home">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#/CreateAccount/" title="Create New Account">Create Account</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#/login/" title="Login">Login</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#/deposit/" title="Deposit">Deposit</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#/withdraw/" title="Withdraw">Withdraw</a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="#/alldata/" title="All Data">All Data</a>
        </li>
      </ul>
    </div>
    </div>
    </nav>
    
    </>
  );
}

