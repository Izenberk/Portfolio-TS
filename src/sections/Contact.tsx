import { useId, useState } from 'react'
import Section from '@/components/layout/Section'

type ContactFormValues = { name: string; email: string; message: string }
const initial: ContactFormValues = { name: '', email: '', message: '' }

function isEmail(v: string) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) }

export default function ContactSection() {
    const [values, setValues] = useState<ContactFormValues>(initial)
    const [submitting, setSubmitting] = useState(false)
    const [sent, setSent] = useState(false)
    const nameId = useId(), emailId = useId(), msgId = useId()

    const onChange =
        (k: keyof ContactFormValues) =>
        (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
        setValues((s) => ({ ...s, [k]: e.target.value }))

    async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        if (!values.name || !isEmail(values.email) || values.message.length < 5) {
        alert('Please fill name, valid email, and a short message.')
        return
        }
        setSubmitting(true)
        try {
        await new Promise((r) => setTimeout(r, 800)) // mock
        setSent(true); setValues(initial)
        } finally { setSubmitting(false) }
    }

    return (
        <Section id="contact" className="py-16">
        <h2 className="mb-6 text-3xl font-bold">Contact</h2>
        <p className="mb-8 max-w-prose text-white/80">Want to collaborate or chat? Send me a note.</p>

        {sent && (
            <div className="mb-6 rounded-xl border border-border bg-card p-4 text-sm text-emerald-300">
            Thanks! Your message has been sent.
            </div>
        )}

        <form onSubmit={onSubmit} className="max-w-xl space-y-4">
            <div>
            <label htmlFor={nameId} className="mb-1 block text-sm text-white/80">Name</label>
            <input id={nameId} type="text" value={values.name} onChange={onChange('name')}
                className="w-full rounded-xl border border-border bg-input px-3 py-2 outline-none focus:border-ring"
                placeholder="Your name" />
            </div>
            <div>
            <label htmlFor={emailId} className="mb-1 block text-sm text-white/80">Email</label>
            <input id={emailId} type="email" value={values.email} onChange={onChange('email')}
                className="w-full rounded-xl border border-border bg-input px-3 py-2 outline-none focus:border-ring"
                placeholder="you@example.com" />
            </div>
            <div>
            <label htmlFor={msgId} className="mb-1 block text-sm text-white/80">Message</label>
            <textarea id={msgId} value={values.message} onChange={onChange('message')}
                className="min-h-[140px] w-full rounded-xl border border-border bg-input px-3 py-2 outline-none focus:border-ring"
                placeholder="Tell me a bit about your project…" />
            </div>
            <button
            type="submit" disabled={submitting}
            className="inline-flex h-11 items-center justify-center rounded-2xl bg-primary px-5 font-medium text-primary-foreground hover:bg-primary/90 disabled:opacity-60">
            {submitting ? 'Sending…' : 'Send message'}
            </button>
        </form>
        </Section>
    )
}
