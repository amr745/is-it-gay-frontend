import { useParams, useNavigate } from "react-router-dom"

function Show({culture, deleteCulture}) {
  const { id } = useParams();
  const cult = culture.find(cult => cult._id === id);
  let navigate = useNavigate()

const removeCult = () => {
    deleteCulture(id);
    navigate("/");
};

const updateCult = () => {
    // updateCulture(id);
    navigate(`/update/${cult._id}`);
};

return (
    <div className="cult">
      <h1>{cult.name}</h1>
      <img src={cult.url} alt={cult.name} />
      <h2>{cult.description}</h2>
      <h2>{cult.reason}</h2>
      <button id="delete" onClick={removeCult}>
        DELETE
      </button>
      <button id="update" onClick={updateCult}>
        UPDATE
      </button>
    </div>
  )
}

export default Show