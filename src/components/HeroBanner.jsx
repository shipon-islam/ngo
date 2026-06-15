
export default function HeroBanner({children,height="h-135 sm:h-160"}) {
  return (
    <div className={`bg-[radial-gradient(circle_at_center,#2f855a_0%,#166534_50%,#052e16_100%)]  w-full text-white relative overflow-hidden ${height}`}>
      <svg
        className="absolute -bottom-1 left-0 w-full"
        viewBox="0 0 1440 200"
        preserveAspectRatio="none"
      >
        <path
          fill="white"
          d="M0,100 C360,0 1080,0 1440,100 L1440,200 L0,200 Z"
        />
      </svg>
      <div className="pt-50 container">
        {children}
      </div>
    </div>
  );
}
