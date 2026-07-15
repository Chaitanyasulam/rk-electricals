import Logo from './Logo'
import { GST_NUMBER } from '../data/company'

export default function Footer() {
  return (
    <footer className="border-t border-gold-200/60 bg-cream py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 md:flex-row">
        <Logo size="lg" />
        <div className="text-center md:text-right">
          <p className="text-sm text-muted">
            &copy; {new Date().getFullYear()} RK Electricals Private Limited. All rights reserved.
          </p>
          <p className="mt-1 text-xs text-muted/70">
            Distribution Transformers up to 500 KVA &middot; BIS IS 1180 Certified
          </p>
          <p className="mt-1 text-xs text-muted/70">GSTIN: {GST_NUMBER}</p>
        </div>
      </div>
    </footer>
  )
}
