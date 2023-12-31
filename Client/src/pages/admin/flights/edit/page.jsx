import React, { useEffect, useState } from "react";
import _ from "lodash";
import { addFlightInitialValue } from "../../form/utils";
import AddFlightForm from "../../form/AddFlight";
import { getOne, update } from "../../../../api/flights/fetchers";
import { useNavigate, useParams } from "react-router-dom";

const FlightEditPage = () => {
  const { flightId: id } = useParams();
  const [flight, setFlight] = useState(addFlightInitialValue);
  const navigate = useNavigate();
  useEffect(() => {
    getOne(Number(id)).then((response) => setFlight({ ...response }));
  }, [id]);
  const handleEdit = async (values, actions) => {
    try {
      const updatedValues = _.omit(values, ["createdAt"]);
      const response = await update(updatedValues);
      alert(JSON.stringify(response));
      return navigate("/admin/dashboard");
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <main>
      <AddFlightForm
        values={flight}
        onSubmit={handleEdit}
        buttonLabel="Update Flight"
      />
    </main>
  );
};

export default FlightEditPage;
