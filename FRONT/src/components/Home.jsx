import React, { useEffect, useState } from "react";
import { Heart } from 'lucide-react';

function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:1337/api/products");
        if (!response.ok) {
          throw new Error("Erreur lors de la récupération des données");
        }
        const data = await response.json();
        setProducts(data.data || []);
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

      <h1 className="text-3xl text-white font-medium bg-red-400 rounded p-5 m-10">
        Sneakers
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-4">

        {products.map((product) => (
          <div key={product.id} className=" border-solid border-2 border-zinc-800/15 w-52 h-80 rounded flex flex-col">
            <div>
              <img
                src={product.image_url}
                alt={product.name}
                className="size-52"
              />
            </div>
            <div className="flex justify-between items-start">
              <div>   
              <h2 className="text-base mx-5 mt-[15px]">{product.name}</h2>
              <p className="mx-5 font-extralight ">Prix : {product.price} €</p>
              <p className="mx-5 text-sm font-extralight text-gray-500">{product.description}</p>
              </div>
              <div className="mr-3 mt-4  size-7 flex justify-center items-center text-black">
                <Heart className="hover:size-7 active:text-red-600"/>
              </div>
            </div>  
          </div>
        ))}
      
      </div>

    </div>
  );
}

export default Home