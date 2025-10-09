import Card from '@/components/Card'
import React from 'react'
import Link from 'next/link'

const ArchivedPage = () => {
  return (
    <Card>

        <h1>
Archived Page
        </h1>
        <Link href="/complexDashboard">Default</Link>
    </Card>
  
  )
}

export default ArchivedPage