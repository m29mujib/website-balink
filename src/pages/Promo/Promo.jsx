import React, { useEffect } from "react";
import TablePromo from "../../components/Table/TablePromo/TablePromo";
import useApi from "../../api/useApi";
import Spinner from "../../components/Spinner/Spinner";

const Promo = () => {
    const { response: promo, loading, error, get } = useApi();

    useEffect(() => {
        get("https://648179fd29fa1c5c503172c3.mockapi.io/promo").catch(
            (error) => {
                // Handle error
                console.error(error);
            } 
        );
    }, []);
 
    return (
        <div>
            <div>
                {loading ? (
                    <Spinner />
                ) : error ? (
                    <p>Error: {error}</p>
                ) : (
                    <TablePromo data={promo} />
                )}
            </div>
        </div>
    )
};

export default Promo;
