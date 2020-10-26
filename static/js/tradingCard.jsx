
function TradingCard(props) {
  return (
    <div className="card">
      <p>Name: {props.name}</p>
      <img src={props.imgUrl} />
      <p>Skill: {props.skill} </p>
    </div>
  );
}


function TradingCardContainer() {
  const [cards, setCards] = React.useState([]);
 
  const allCards = [];
  
  React.useEffect(()=>{
    $.get('/cards.json', (res)=>{
      setCards(res);
    });
  }, []);

 
  for (const curCard of cards){
    allCards.push(<TradingCard
      key={curCard.name}
      name={curCard.name}
      skill={curCard.skill}
      imgUrl={curCard.imgUrl}
    />)
  }
  



  return (
    <div>{allCards}</div>
  );
}

ReactDOM.render(
  <TradingCardContainer />,
  document.getElementById('container')
);
