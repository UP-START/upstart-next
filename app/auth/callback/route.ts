////eu ACHO que isso ta funcionando mas a autenticação depende disso e está quebrada

import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const requestUrl = new URL(request.url)
  const code = requestUrl.searchParams.get('code')

  if (code) {
    const supabase = createRouteHandlerClient({ cookies })
    
    try {
      const { data, error } = await supabase.auth.exchangeCodeForSession(code)
      
      if (error) throw error

      console.log('Successfully exchanged code for session')

      // Update user profile in Supabase
      if (data.session && data.session.user) {
        const { user } = data.session
        console.log('Session data:', data.session)

        const { data: existingUser, error: fetchError } = await supabase
          .from('profiles')
          .select()
          .eq('id', user.id)
          .single()

        if (fetchError) {
          console.error('Error fetching user:', fetchError)
        } else if (!existingUser) {
          const { error: insertError } = await supabase
            .from('profiles')
            .insert({
              id: user.id,
              discord_uid: user.user_metadata.provider_id,
              full_name: user.user_metadata.full_name,
              avatar_url: user.user_metadata.avatar_url,
              updated_at: new Date().toISOString()
            })
          if (insertError) {
            console.error('Error inserting user:', insertError)
            console.error('User data:', user)
          } else {
            console.log('User profile inserted successfully')
          }
        } else {
          const { error: updateError } = await supabase
            .from('profiles')
            .update({
              discord_uid: user.user_metadata.provider_id,
              full_name: user.user_metadata.full_name,
              avatar_url: user.user_metadata.avatar_url,
              updated_at: new Date().toISOString()
            })
            .eq('id', user.id)
          if (updateError) {
            console.error('Error updating user:', updateError)
            console.error('User data:', user)
          } else {
            console.log('User profile updated successfully')
          }
        }
      }

      // Redirect to the profile page after successful login
      return NextResponse.redirect(new URL('/profile', request.url))
    } catch (error) {
      console.error('Error in auth callback:', error)
      // Redirect to login page with error message
      return NextResponse.redirect(new URL('/login?error=auth_callback_error', request.url))
    }
  }

  // If no code is present, redirect to login page
  return NextResponse.redirect(new URL('/login', request.url))
}