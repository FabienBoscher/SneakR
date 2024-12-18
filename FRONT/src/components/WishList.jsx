import { useState, useEffect } from "react";
import { X } from 'lucide-react';

function WishList() {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    try {
      const storedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
      setWishlist(storedWishlist);
    } catch (error) {
      console.error("Erreur lors de la récupération de la wishlist:", error);
      setWishlist([]);
    }
  }, []);

  const clearWishlist = () => {
    setWishlist([]);
    localStorage.setItem("wishlist", JSON.stringify([]));
  };

  if (wishlist.length === 0) {
    return (
      <div className="grow flex flex-col items-center p-3 font-mono">
        <p className="text-3xl font-bold mb-4">Vos favoris sont vide</p>
      </div>
    );
  }

  return (
    <div className="grow flex flex-col items-center p-3 font-mono">
        <h1 className="text-3xl font-bold mb-4">Mes favoris</h1>
      
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-4">
            {wishlist.map((product) => (
            
            <div key={product.id} className="border-solid border-2 border-zinc-800/15 w-52 h-80 rounded flex flex-col"> 
                
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
                    <p className="mx-5 font-extralight">
                      Prix : {product.price} €
                    </p>
                    <p className="mx-5 text-sm font-extralight text-gray-500">
                      {product.description}
                    </p>
                  </div>

                  <button
                    className="mr-3 mt-4 size-7 flex justify-center items-center"
                    onClick={() => {
                        const updatedWishlist = wishlist.filter(
                          (item) => item.id !== product.id
                        );
                        setWishlist(updatedWishlist);
                        localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
                      }
                    }
                  >
                    <X className="hover:size-7"/>
                  </button>
                </div>
            </div>
            ))}
        </div>

        <button
          className="bg-gray-500 text-white px-4 py-2 rounded mt-4"
          onClick={clearWishlist}
        >
          Supprimer tous les favoris
        </button>

    </div>
  );
}

export default WishList;
