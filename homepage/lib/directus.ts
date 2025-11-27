import { createDirectus, rest, staticToken, createItem } from '@directus/sdk'

export const directus = createDirectus(String(process.env.NEXT_PUBLIC_APID_URL))
.with(rest())
.with(staticToken(String(process.env.NEXT_PUBLIC_APID_TOKEN)))

type VueForm = {
  id: number
  first_name: string
  last_name: string
  email: string
  phone: string
  utm_source?: string
  utm_medium?: string
  utm_campaign?: string
  utm_term?: string
  utm_content?: string
  page_url?: string
  gclid?: string
  fbclid?: string
  ghl_contact_id?: string
  submission_data?: Record<string, unknown>
  created_at?: string
  updated_at?: string
}

export async function submitVueForm(formData: Omit<VueForm, 'id' | 'created_at' | 'updated_at'>) {
  try {
    const response = await directus.request(
      createItem('vue_forms', formData)
    )
    return response
  } catch (err) {
    console.error('Error submitting form:', err)
    throw err
  }
}