export function VehicleShape({ type }: { type: string }) {
  return (
    <div className="absolute bottom-7 left-1/2 h-20 w-36 -translate-x-1/2">
      <div
        className={`absolute bottom-4 left-2 h-12 rounded-[15px_20px_8px_8px] bg-[#334155] ${
          type === 'scooter' ? 'w-28' : type === 'auto' ? 'w-32' : 'w-36'
        }`}
      />
      <div
        className={`absolute bottom-10 left-1/2 h-10 -translate-x-1/2 rounded-t-xl bg-[#5bbdb9] ${
          type === 'scooter' ? 'w-16' : 'w-24'
        }`}
      />
      <div className="absolute bottom-0 left-5 h-8 w-8 rounded-full border-[7px] border-[#334155] bg-white" />
      <div className="absolute bottom-0 right-4 h-8 w-8 rounded-full border-[7px] border-[#334155] bg-white" />
    </div>
  );
}
