import { NextResponse } from 'next/server'
import { directus } from '@/lib/directus'
import { createItem } from '@directus/sdk'

export async function POST(req: Request) {
  try {
    const formData = await req.json()

    const result = await directus.request(
      createItem('vue_forms', formData)
    )

    return NextResponse.json({ success: true, result })
  } catch (error) {
    console.error('Directus Submission Error:', error)
    return NextResponse.json({ success: false, error: 'Failed to submit form' }, { status: 500 })
  }
}

//page incase want to make the api private