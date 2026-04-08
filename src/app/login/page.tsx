import Link from 'next/link';
import { Rocket } from 'lucide-react';
import { login } from './actions'

export default async function LoginPage({
  searchParams,
}: {
  searchParams?: Promise<{ message?: string }>
}) {

  // Depending on Next version, searchParams might need awaiting but since it's a simple display:
  const resolvedSearchParams = await searchParams;

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white dark:bg-slate-900 p-10 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-800">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
             <Rocket className="w-8 h-8 text-primary" />
          </div>
          <h2 className="mt-2 text-3xl font-extrabold text-navy dark:text-white">
            Sign in to your account
          </h2>
          <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
            Or{' '}
            <Link href="/contact" className="font-medium text-primary hover:text-primary-hover transition-colors">
              contact us to request access
            </Link>
          </p>
        </div>
        
        {resolvedSearchParams?.message && (
          <div className="bg-red-50 text-red-700 p-3 rounded-md text-sm text-center border border-red-200">
            {resolvedSearchParams.message}
          </div>
        )}

        {/* Bind form directly to Next Server Action */}
        <form className="mt-8 space-y-6" action={login}>
          <input type="hidden" name="remember" value="true" />
          <div className="rounded-md shadow-sm space-y-4">
            <div>
              <label htmlFor="email-address" className="sr-only">Email address</label>
              <input id="email-address" name="email" type="email" autoComplete="email" required className="appearance-none relative block w-full px-4 py-3 border border-slate-300 dark:border-slate-700 placeholder-slate-500 text-navy dark:text-white rounded-lg focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm" placeholder="Email address" />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">Password</label>
              <input id="password" name="password" type="password" autoComplete="current-password" required className="appearance-none relative block w-full px-4 py-3 border border-slate-300 dark:border-slate-700 placeholder-slate-500 text-navy dark:text-white rounded-lg focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm" placeholder="Password" />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-primary focus:ring-primary border-slate-300 dark:border-slate-700 rounded" />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-slate-900 dark:text-white">
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <a href="#" className="font-medium text-primary hover:text-primary-hover transition-colors">
                Forgot your password?
              </a>
            </div>
          </div>

          <div>
            <button type="submit" className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-bold rounded-lg text-white bg-navy hover:bg-navy-light focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-navy transition-all shadow-lg hover:shadow-xl">
              Sign in to Dashboard
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
