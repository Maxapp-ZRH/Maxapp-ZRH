import clsx from 'clsx'
import { brandColorClasses } from '@/lib/brand-colors'

function Office({
  name,
  children,
  invert = false,
}: {
  name: string
  children: React.ReactNode
  invert?: boolean
}) {
  return (
    <address
      className={clsx(
        'text-sm not-italic',
        invert ? 'text-neutral-300' : brandColorClasses.textLight,
      )}
    >
      <strong
        className={clsx(
          invert ? 'text-white' : brandColorClasses.text,
          'font-semibold',
        )}
      >
        {name}
      </strong>
      <br />
      {children}
    </address>
  )
}

export function Offices({
  invert = false,
  ...props
}: React.ComponentPropsWithoutRef<'ul'> & { invert?: boolean }) {
  return (
    <ul role="list" {...props}>
      <li>
        <Office name="Zürich" invert={invert}>
          Bahnhofstrasse 100
          <br />
          8001 Zürich, Switzerland
        </Office>
      </li>
      <li>
        <Office name="Contact" invert={invert}>
          hello@maxappzrh.com
          <br />
          +41 XX XXX XX XX
        </Office>
      </li>
    </ul>
  )
}
