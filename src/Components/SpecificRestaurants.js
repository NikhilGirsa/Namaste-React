import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { RESPECTIVE_URL } from "../utils/constants";

const SpecificRestaurants = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { collectionId, tag } = location.state || {};
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!collectionId || !tag) {
      setError("Required parameters missing");
      setLoading(false);
      navigate("/error", { state: { error: "Missing restaurant data" } });
      return;
    }

    const fetchData = async () => {
      try {
        const response = await fetch(
          `${RESPECTIVE_URL}${collectionId}&tags=${tag}&sortBy=&filters=&type=rcv2&offset=0&page_type=null`
        );
        if (!response.ok) throw new Error("Failed to fetch");
        setData(await response.json());
      } catch (err) {
        setError(err.message);
        navigate("/error", { state: { error: err.message } });
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [collectionId, tag, navigate]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Restaurant Details</h1>
      {data && (
        <div>
          {/* Render your data here */}
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default SpecificRestaurants;
