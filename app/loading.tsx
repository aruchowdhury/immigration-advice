export default function Loading() {
  return (
    <div className="relative flex justify-center items-center h-[calc(100vh-300px)]">
      <div className="absolute animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-red-600" />
      <div className="flex flex-row">
        <h2 className="text-red-400">I M</h2>
      </div>
    </div>
  );
}
