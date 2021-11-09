import React, { useEffect, useState } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { v4 as uuidv4 } from "uuid";
import { listVentas } from "../graphql/queries";
import { processOrder } from "../graphql/mutations";


const VentaContext = React.createContext();

const VentaProvider = ({ children }) => {
  const [jollas, setJollass] = useState([]);
  const [featured, setFeatured] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchJollas();
  }, []);

  const checkout = async (orderDetails) => {
    const payload = {
      id: uuidv4(),
      ...orderDetails
    };
    try {
      await API.graphql(graphqlOperation(processOrder, { input: payload }));
      console.log("Order is successful");
    } catch (err) {
      console.log(err);
    }
  };

  const fetchJollas = async () => {
    try {
      setLoading(true);
      // Switch authMode to API_KEY for public access
      const { data } = await API.graphql({
        query: listVentas,
        authMode: "API_KEY"
      });
      const jollas = data.listVentas.items;
      const featured = jollas.filter((jolla) => {
        return !!jollas.featured;
      });
      setJollass(jollas);
      setFeatured(featured);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <VentaContext.Provider value={{ jollas, featured, loading, checkout }}>
      {children}
    </VentaContext.Provider>
  );
};

export { VentaContext, VentaProvider };
