import { siteConfig } from '@/config/site'

export default function OGImage() {
  return (
    <div className="relative flex h-[630px] w-[1200px] items-center justify-center overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#213D5A] via-[#2A4F6B] to-[#4A90A4]" />

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 h-96 w-96 translate-x-48 -translate-y-48 rounded-full bg-white/5" />
      <div className="absolute bottom-0 left-0 h-64 w-64 -translate-x-32 translate-y-32 rounded-full bg-white/5" />

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center space-y-8 text-center text-white">
        {/* Logo/Brand */}
        <div className="space-y-6">
          <h1 className="text-7xl font-bold tracking-tight">
            {siteConfig.name}
          </h1>
          <p className="text-3xl font-medium text-blue-100">
            {siteConfig.tagline}
          </p>
        </div>

        {/* Services */}
        <div className="space-y-3">
          <div className="flex flex-wrap items-center justify-center gap-4 text-xl text-blue-50">
            <span className="rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm">
              Web Apps
            </span>
            <span className="rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm">
              DevOps
            </span>
            <span className="rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm">
              Cloud
            </span>
            <span className="rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm">
              AI/ML
            </span>
          </div>
          <p className="text-lg text-blue-100">
            Secure • Scalable • Future-Ready
          </p>
        </div>

        {/* Location */}
        <div className="flex items-center space-x-2 text-lg text-blue-200">
          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
              clipRule="evenodd"
            />
          </svg>
          <span>Zürich, Switzerland</span>
        </div>
      </div>
    </div>
  )
}
