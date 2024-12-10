import React, { useEffect, useState } from "react";

const ProductsList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fonction pour récupérer les données
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:1337/api/products");
        if (!response.ok) {
          throw new Error("Erreur lors de la récupération des données");
        }
        const data = await response.json();
        setProducts(data.data || []); // Accès direct au tableau "data"
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <p>Chargement en cours...</p>;
  if (error) return <p>Erreur : {error}</p>;
  if (!products.length) return <p>Aucun produit disponible pour le moment.</p>;

  return (
    <div className="home_container flex flex-col items-center p-3 font-mono">
      
      <h1 className="text-3xl font-medium m-4">Sneakers</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-4">
        
        {products.map((product) => (
          <div key={product.id} className=" border-solid border-2 border-zinc-800/15 w-52 h-80 rounded flex flex-col">
            <img
              src={product.image_url}
              alt={product.name}
              className="size-52"
            />                
            <h2 className="mx-5 mt-[15px]">{product.name}</h2>
            <p className="mx-5">{product.description}</p>
            <p className="mx-5 font-semibold">Prix : {product.price} €</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsList;
