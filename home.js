function Home(){
  return (
    <Card
      bgcolor="warning"
      txtcolor="Black"
      header={(<h1><em>Unsafe Banking...</em></h1>)}
      title={(<h2><em>Welcome to The Bad Bank</em></h2>)}
      text="A bad bank is a bank set up to buy the bad loans and other illiquid holdings of another financial institution."
      body={(<img src="BadBank Logo.jpg" className="img-fluid" alt="Responsive image"/>)}
    /> 
  );  
}

