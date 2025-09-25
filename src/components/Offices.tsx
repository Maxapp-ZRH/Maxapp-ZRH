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
        <Office name="Rotkreuz" invert={invert}>
          Maxsoft AG
          <br />
          Birkenstrasse 49
          <br />
          6343 Rotkreuz, Schweiz
        </Office>
      </li>
      <li>
        <Office name="Chennai" invert={invert}>
          Maxapp
          <br />
          123A Triplicane High Road
          <br />
          Triplicane, Tamil Nadu 600 005
        </Office>
      </li>
      <li>
        <Office name="Contact" invert={invert}>
          info@maxappzrh.com
        </Office>
      </li>
    </ul>
  )
}
