import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

function Profil() {
  const [user, setUser] = useState(null)
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [currentPassword, setCurrentPassword] = useState("")
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")
  const navigate = useNavigate()

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"))
    if (storedUser) {
      setUser(storedUser)
      setUsername(storedUser.username || "")
      setEmail(storedUser.email || "")
    } else {
      navigate("/login")
    }
  }, [navigate])

  const handleUpdate = async (e) => {
    e.preventDefault()
    setError("")
    setSuccess("")

    const response = await fetch("http://localhost:1337/api/auth/local", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        identifier: user.email,
        password: currentPassword,
      }),
    })

    if (!response.ok) {
      setError("Le mot de passe actuel est incorrect.")
      return
    }

    try {
      const updateResponse = await fetch(`http://localhost:1337/api/users/${user.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({
          username,
          email,
          ...(password && { password }),
        }),
      })

      if (!updateResponse.ok) {
        const data = await updateResponse.json()
        throw new Error(data.error.message || "Erreur inconnue lors de la mise à jour")
      }

      const updatedUser = await updateResponse.json()
      localStorage.setItem("user", JSON.stringify(updatedUser))
      setUser(updatedUser)
      setSuccess("Profil mis à jour avec succès !")
    } catch (err) {
      setError(err.message)
    }
  }

  const handleLogout = () => {
    localStorage.removeItem("user")
    localStorage.removeItem("token")
    navigate("/login")
  }

  if (!user) return null

  return (
    <div className="grow flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-6">Mon Profil</h1>

      <form onSubmit={handleUpdate} className="w-full max-w-md bg-white p-6 rounded-lg shadow-md space-y-4">
        {success && <p className="text-green-600 text-center">{success}</p>}
        {error && <p className="text-red-600 text-center">{error}</p>}

        <div>
          <label htmlFor="currentPassword" className="block text-sm text-gray-600">
            Mot de passe actuel
          </label>
          <input
            type="password"
            id="currentPassword"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:border-red-800"
            required
          />
        </div>

        <div>
          <label htmlFor="username" className="block text-sm text-gray-600">
            Nouveau nom d'utilisateur
          </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:border-red-800"
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm text-gray-600">
            Nouvelle email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:border-red-800"
            required
          />
        </div>

        <div>
          <label htmlFor="password" className="block text-sm text-gray-600">
            Nouveau mot de passe
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:border-red-800"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-red-800 text-white py-2 rounded hover:scale-95 transition-all"
        >
          Mettre à jour
        </button>
      </form>

      <button
        onClick={handleLogout}
        className="mt-4 bg-gray-500 text-white px-4 py-2 rounded hover:scale-95 transition-all"
      >
        Déconnexion
      </button>
    </div>
  )
}

export default Profil
