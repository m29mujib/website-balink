import React, { useEffect } from "react";
import TableEvent from "../../components/Table/TableEvent/TableEvent";
import useApi from "../../api/useApi";
import Spinner from "../../components/Spinner/Spinner";
const Event = () => {
  const { response: event, loading, error, get } = useApi();

  useEffect(() => {
    get("https://6481c62b29fa1c5c50320b9a.mockapi.io/balink/event").catch(
      (error) => {
        // Handle error
        console.error(error);
      }
    );
  }, []);

  console.log(event);
  console.log(error);
  console.log(loading);

  return (
    <div>
      <div>
        {loading ? (
          <Spinner/>
        ) : error ? (
          <p>Error: {error}</p>
        ) : (
          <TableEvent data={event} />
        )}
      </div>
    </div>
  );

};

export default Event;
