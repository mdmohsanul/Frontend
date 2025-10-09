import Card from '@/components/Card'
import Link from 'next/link'
import React from 'react'

const NotificationPage = () => {
  return (
    <Card>
      <h1>
        NotificationPage
      </h1>
      <Link href="/complexDashboard/archived">Archived</Link>
    </Card>
  )
}

export default NotificationPage