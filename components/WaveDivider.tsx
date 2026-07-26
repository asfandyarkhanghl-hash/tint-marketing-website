export default function WaveDivider({
  fromColor,
  toColor,
  flip = false,
}: {
  fromColor: string
  toColor: string
  flip?: boolean
}) {
  return (
    <div className="relative w-full overflow-hidden leading-none" style={{ background: fromColor }} aria-hidden="true">
      <svg
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
        className={`w-full h-[46px] md:h-[80px] block ${flip ? 'scale-y-[-1]' : ''}`}
      >
        <path
          d="M0,40 C240,90 480,0 720,30 C960,60 1200,10 1440,50 L1440,100 L0,100 Z"
          fill={toColor}
        />
      </svg>
    </div>
  )
}
