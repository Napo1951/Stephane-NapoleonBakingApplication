function AllData(){
  const ctx = React.useContext(UserContext);


  return (
    <Card
    bgcolor="warning"
    txtcolor="Black"
    header={(<h3>All Data</h3>)}
    body= {JSON.stringify(ctx)}
    />
  );
}

