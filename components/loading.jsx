import { Loader2 } from "lucide-react";

export default function LoadingState() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="flex items-center gap-2">
        <Loader2 className="w-6 h-6 animate-spin" />
        <span>Loading news...</span>
      </div>
    </div>
  );
}
