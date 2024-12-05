import Card from "../Components/Card";
import { useCharStates } from "../Context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const { state } = useCharStates();
  return (
    <>
      <h1>Dentistas detacados</h1>
      <div className="card-grid">
        {state.favs.map((item, index) => 
          <Card key={index} id={item.id} username={item.username} name={item.name}/>
          )}
      </div>
    </>
  );
};

export default Favs;