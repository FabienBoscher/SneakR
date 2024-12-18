import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault()

    try {
      const response = await fetch("http://localhost:1337/api/auth/local", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          identifier: email,
          password: password,
        }),
      })

      if (!response.ok) {
        const data = await response.json()
        throw new Error(data.error.message || "Erreur inconnue")
      }

      const data = await response.json()

      localStorage.setItem("token", data.jwt)

      localStorage.setItem("user", JSON.stringify(data.user))

      navigate("/")
    } catch (error) {
      setError(error.message)
    }
  }

  return (
    <div className="grow flex justify-center items-center ">
      <div className="">
        <form onSubmit={handleLogin} className="p-6 bg-white rounded-2xl shadow-md space-y-4">
          <h2 className="text-xl font-semibold text-gray-700">Connectez-vous</h2>
          <div>
            <label htmlFor="email" className="block text-sm text-gray-600">
              Email
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
          <div className="bt-4">
            <label htmlFor="password" className="block text-sm text-gray-600">
              Mot de passe
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border rounded focus:outline-none  focus:border-red-800"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-red-800 text-white py-2 rounded hover:scale-[0.9] transition-all"
          >
            Se connecter
          </button>
        </form>
        {error && <p className="mt-4 text-center text-red-600">{error}</p>}
      </div>
    </div>
  )
}

export default Login
