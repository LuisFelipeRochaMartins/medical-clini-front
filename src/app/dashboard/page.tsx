'use client'

import { getSession } from "@/auth"

async function Dashboard() {
  const session = await getSession()
  return (
    <>
      <h1>Hello DashBoard</h1>
    </>
  )
}

export default Dashboard