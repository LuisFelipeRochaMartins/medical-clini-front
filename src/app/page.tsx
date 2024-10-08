import LoginForm from "@/components/LoginForm"

function Login() {
  return (
    <main className="flex justify-center items-center h-screen bg-gradient-to-r from-[#D7EEFA] to-[#AFC2CC]">
      <section className="h-[250px] w-[350px] bg-white rounded-lg p-2 shadow-2xl">
        <LoginForm />
      </section>    
    </main>
  )
}

export default Login