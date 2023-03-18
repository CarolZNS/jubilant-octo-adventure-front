import { api } from "../api";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function User() {
  let { id } = useParams();

  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    api.get(`/user/${id}`).then((response) => {
      setUserData(response.data);
    });
    setLoading(false);
  }, [id]);
  console.log(userData);
  
  return (
    <>
      {loading ? (
        <section className="section">
          <button className="is-loading" disabled />
        </section>
      ) : (
        <div className="container">
          <div className="box is-clearfix">
            <p className="title">{userData.name}</p>
            <p className="subtitle">Id #{userData.id}</p>
            <p className="block">{userData.email}</p>
            <p>{userData.position}</p>
            <div className="control is-pulled-right">
              <button className="button is-success mr-2">Edit</button>
              <button
                className="button is-danger"
                onClick={() =>
                  alert("Are you sure want to delete this record?")
                }
              >
                Delete
              </button>
            </div>
          </div>
          <table className="table is-hoverable is-fullwidth">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Console Name</th>
                <th scope="col">Games Owned</th>
                <th width="200px">Actions</th>
              </tr>
            </thead>
            <tbody>
              {userData.games &&
                userData.games.map((game, index) => {
                  return (
                    <tr>
                      <th scope="row">{index + 1}</th>
                      <td>{game.console_name}</td>
                      <td>{game.qtd_jogos}</td>
                      <td className="field is-grouped">
                        <button className="button is-success mr-2">
                          Edit
                        </button>
                        <button
                          className="button is-danger"
                          onClick={() =>
                            alert("Are you sure want to delete this record?")
                          }
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
          <button className="button is-link">
            <strong>Add Game</strong>
          </button>
        </div>
      )}
    </>
  );
}
