interface ProgressProps {
  active: number;
  setActive: (index: number) => void;
}

export const ProcessProgress = ({ active }: ProgressProps) => {
  const TOTAL_STEPS = 6;
  const TOTAL_BARS = 160;

  return (
    <div className="flex h-12 items-end gap-[4px]">
  {[...Array(TOTAL_BARS)].map((_, i) => {
    const progress = active / TOTAL_STEPS;
    const cutoff = Math.floor(TOTAL_BARS * progress);

    const isActive = i < cutoff;

    return (
      <div key={i} className="flex flex-col justify-between w-[3px] h-full">

        {/* TOP SECTION */}
        <div
          className={`
            w-full rounded-full transition-all duration-500
            ${isActive ? "bg-blue-600 h-[60%]" : "bg-white h-[20%]"}
          `}
        ></div>

        {/* BOTTOM SECTION */}
        <div
          className={`
            w-full rounded-full transition-all duration-500
            ${isActive ? "bg-white h-[40%]" : "bg-blue-600 h-[10%]"}
          `}
        ></div>

      </div>
    );
  })}
</div>

  );
};
