export default function Header() {
  return (
    <header className="p-4 md:p-6">
      <div className="flex flex-col items-center text-center">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
            <span className="text-black font-bold text-sm">B</span>
          </div>
          <span className="text-white font-bold text-lg">BLOTT</span>
        </div>
      </div>
      <h1 className="text-2xl md:text-3xl font-bold text-white">NEWS</h1>
    </header>
  );
}
