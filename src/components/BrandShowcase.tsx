import {
  brandColors,
  brandColorClasses,
  brandGradients,
} from '@/lib/brand-colors'

export function BrandShowcase() {
  return (
    <div className="space-y-8 p-8">
      <div>
        <h2 className="mb-4 text-2xl font-bold">Maxapp ZRH Brand Colors</h2>
        <p className="mb-6 text-gray-600">
          Our brand identity uses a sophisticated color palette that reflects
          trust, professionalism, and innovation.
        </p>
      </div>

      {/* Primary Brand Colors */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Primary Brand Colors</h3>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <div className="space-y-2">
            <div
              className="h-20 w-full rounded-lg shadow-md"
              style={{ backgroundColor: brandColors.primary }}
            />
            <div className="text-sm">
              <div className="font-medium">Primary</div>
              <div className="text-gray-500">{brandColors.primary}</div>
            </div>
          </div>
          <div className="space-y-2">
            <div
              className="h-20 w-full rounded-lg shadow-md"
              style={{ backgroundColor: brandColors.primaryLight }}
            />
            <div className="text-sm">
              <div className="font-medium">Primary Light</div>
              <div className="text-gray-500">{brandColors.primaryLight}</div>
            </div>
          </div>
          <div className="space-y-2">
            <div
              className="h-20 w-full rounded-lg shadow-md"
              style={{ backgroundColor: brandColors.primaryDark }}
            />
            <div className="text-sm">
              <div className="font-medium">Primary Dark</div>
              <div className="text-gray-500">{brandColors.primaryDark}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Secondary Colors */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Secondary Colors</h3>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <div
              className="h-20 w-full rounded-lg shadow-md"
              style={{ backgroundColor: brandColors.secondary }}
            />
            <div className="text-sm">
              <div className="font-medium">Secondary</div>
              <div className="text-gray-500">{brandColors.secondary}</div>
            </div>
          </div>
          <div className="space-y-2">
            <div
              className="h-20 w-full rounded-lg shadow-md"
              style={{ backgroundColor: brandColors.accent }}
            />
            <div className="text-sm">
              <div className="font-medium">Accent</div>
              <div className="text-gray-500">{brandColors.accent}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Text Colors */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Text Colors</h3>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <div className="space-y-2">
            <div
              className="h-20 w-full rounded-lg border shadow-md"
              style={{ backgroundColor: brandColors.text }}
            />
            <div className="text-sm">
              <div className="font-medium">Primary Text</div>
              <div className="text-gray-500">{brandColors.text}</div>
            </div>
          </div>
          <div className="space-y-2">
            <div
              className="h-20 w-full rounded-lg border shadow-md"
              style={{ backgroundColor: brandColors.textLight }}
            />
            <div className="text-sm">
              <div className="font-medium">Secondary Text</div>
              <div className="text-gray-500">{brandColors.textLight}</div>
            </div>
          </div>
          <div className="space-y-2">
            <div
              className="h-20 w-full rounded-lg border shadow-md"
              style={{ backgroundColor: brandColors.neutral }}
            />
            <div className="text-sm">
              <div className="font-medium">Neutral</div>
              <div className="text-gray-500">{brandColors.neutral}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Gradient Examples */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Gradient Examples</h3>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <div
              className={`h-20 w-full rounded-lg bg-gradient-to-r ${brandGradients.primary}`}
            />
            <div className="text-sm">
              <div className="font-medium">Primary Gradient</div>
              <div className="text-gray-500">Primary to Primary Light</div>
            </div>
          </div>
          <div className="space-y-2">
            <div
              className={`h-20 w-full rounded-lg bg-gradient-to-r ${brandGradients.primaryToSecondary}`}
            />
            <div className="text-sm">
              <div className="font-medium">Brand Gradient</div>
              <div className="text-gray-500">Primary to Secondary</div>
            </div>
          </div>
        </div>
      </div>

      {/* Usage Examples */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Usage Examples</h3>
        <div className="space-y-4">
          <div className="rounded-lg border p-4">
            <h4
              className={`text-lg font-semibold ${brandColorClasses.primary}`}
            >
              Primary Text Example
            </h4>
            <p className={`${brandColorClasses.textLight} mt-2`}>
              This is how secondary text looks with our brand colors.
            </p>
          </div>
          <div
            className={`rounded-lg p-4 ${brandColorClasses.primaryBg} text-white`}
          >
            <h4 className="text-lg font-semibold">Primary Background</h4>
            <p className="mt-2 opacity-90">
              This is how content looks on our primary brand color background.
            </p>
          </div>
          <div
            className={`rounded-lg bg-gradient-to-r p-4 ${brandGradients.primaryToAccent} text-white`}
          >
            <h4 className="text-lg font-semibold">Gradient Background</h4>
            <p className="mt-2 opacity-90">
              This demonstrates our brand gradient in action.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
