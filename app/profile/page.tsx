'use client'

import { useEffect, useState } from 'react'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import Image from 'next/image'
import { Database } from '@/types/supabase'

type Profile = Database['public']['Tables']['profiles']['Row']

export default function ClientProfile() {
  const [profile, setProfile] = useState<Profile | null>(null)
  const [user, setUser] = useState<any | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)
  const supabase = createClientComponentClient<Database>()

  useEffect(() => {
    async function loadProfile() {
      try {
        setLoading(true)
        const { data: { user }, error: userError } = await supabase.auth.getUser()

        if (userError) throw userError

        setUser(user)
        console.log('User data:', user)

        if (user) {
          const { data, error } = await supabase
            .from('profiles')
            .select('*')
            .eq('id', user.id)
            .single()

          if (error) throw error

          setProfile(data)
          console.log('Profile data:', data)
        }
      } catch (error: any) {
        console.error('Error loading profile:', error)
        setError(error.message)
      } finally {
        setLoading(false)
      }
    }

    loadProfile()
  }, [supabase])

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error}</div>
  }

  if (!user) {
    return <div>No user found. Please log in.</div>
  }

  if (!profile) {
    return (
      <div>
        <p>Profile not found for user:</p>
        <pre>{JSON.stringify(user, null, 2)}</pre>
      </div>
    )
  }

  return (
    <div>
      <h1>Profile</h1>
      <p>User ID: {user.id}</p>
      <p>Email: {user.email}</p>
      <p>Username: {profile.username || 'Not set'}</p>
      <p>Full Name: {profile.full_name || 'Not set'}</p>
      {profile.avatar_url && (
        <Image 
          src={profile.avatar_url} 
          alt="Profile picture"
          width={100}
          height={100}
        />
      )}
    </div>
  )
}