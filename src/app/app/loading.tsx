import { Loader2 } from "lucide-react";

export default function AppLoading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] w-full animate-in fade-in duration-500">
      <Loader2 className="w-12 h-12 text-primary animate-spin" />
      <h2 className="mt-4 text-xl font-semibold text-navy dark:text-white">Loading Command Center...</h2>
      <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">Fetching live property and sensor data.</p>
    </div>
  );
}
