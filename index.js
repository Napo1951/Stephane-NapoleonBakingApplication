function Spa() {
  return (
    <HashRouter>
      <NavBar/>
      <UserContext.Provider value={{users:[{
        name:'',
        email:'',
        password:'',
        balance:0,
        deposit:[0],
        withdrawal:[0]}]}}>
        <div className="container" style={{padding: "20px"}}>
          <Route path="/" exact component={Home} />
          <Route path="/home/" exact component={Home} />
          <Route path="/CreateAccount/" component={CreateAccount} />
          <Route path="/login/" component={Login} />
          <Route path="/deposit/" component={Deposit} />
          <Route path="/withdraw/" component={Withdraw} />
          <Route path="/alldata/" component={AllData} />
        </div>           
      </UserContext.Provider> 
    </HashRouter>
  );
}

ReactDOM.render(
  <Spa/>,
  document.getElementById('root')
);

