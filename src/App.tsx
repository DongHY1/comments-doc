import { Snippet } from '@nextui-org/react'
export default function App() {
  return (
    <>
      <div className="hero min-h-screen ">
        <div className="hero-content flex flex-col text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Comments</h1>
            <p className="py-6">An open-source, easy-to-use comment system, similar to Vercel Comments</p>
            <button className="btn btn-primary">GitHub</button>
          </div>

          <div className="flex flex-col items-start justify-start space-y-4">
            <h1 className="text-3xl">Docs</h1>
            <div className="mockup-browser w-full border bg-base-300">
              <div className="mockup-browser-toolbar">
                <div className="input">https://comments.daviddong.me</div>
              </div>
              <div className="flex justify-center bg-base-200 px-4 py-16">Suppose you have a website</div>
            </div>
            <div className="flex w-full flex-col items-start justify-start space-y-2">
              <h1 className="text-2xl">1. setup your supabase </h1>
              <p>create your first supabase project</p>
              <img className="rounded-2xl" src="https://comments-file.daviddong.me/6.png" />
              <div role="alert" className="alert alert-warning">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 shrink-0 stroke-current"
                  fill="none"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
                <span>Remember the Database Password!</span>
              </div>
              <a className="link" href="https://supabase.com/docs/guides/auth/social-login/auth-github">
                Setup GitHub OAuth with supabase
              </a>
              <img className="rounded-2xl" src="https://comments-file.daviddong.me/7.png" />
              <img className="rounded-2xl" src="https://comments-file.daviddong.me/8.png" />
              <img className="rounded-2xl" src="https://comments-file.daviddong.me/9.png" />
              <img className="rounded-2xl" src="https://comments-file.daviddong.me/16.png" />
            </div>

            <div className="flex flex-col items-start space-y-2 ">
              <h1 className="text-2xl">2. clone this repo </h1>
              <Snippet>git clone https://github.com/DongHY1/comments.git</Snippet>
              <Snippet>cd comments</Snippet>
              <Snippet>pnpm install</Snippet>
              <h1>set environment</h1>
              <Snippet>mv .env.example .env</Snippet>
              <span>set the Project URL as VITE_SUPABASE_URL</span>
              <img className="rounded-2xl" src="https://comments-file.daviddong.me/2.png" />
              <span>set the anon Project API Keys as VITE_SUPABASE_ANON_KEY</span>
              <img className="rounded-2xl" src="https://comments-file.daviddong.me/1.png" />
            </div>

            <div className="flex w-full  flex-col items-start justify-start space-y-2">
              <h1 className="text-2xl">3. Migrate database </h1>
              <Snippet>npx supabase link --project-ref URL</Snippet>
              <img className="rounded-2xl" src="https://comments-file.daviddong.me/13.png" />
              <Snippet>npx supabase db push</Snippet>
              <span>see your dashboard</span>
              <img className="rounded-2xl" src="https://comments-file.daviddong.me/3.png" />
              <span>add a database trigger</span>
              <img className="rounded-2xl" src="https://comments-file.daviddong.me/17.png" />
              <Snippet>
                CREATE TRIGGER trigger_sync_profiles AFTER INSERT OR UPDATE ON auth.users FOR EACH ROW EXECUTE FUNCTION
                public.sync_profiles();
              </Snippet>
              <Snippet>pnpm run build</Snippet>
              <span>import the output js file to your html file</span>
              <img className="rounded-2xl" src="https://comments-file.daviddong.me/15.png" />
              <span>Done!</span>
              <img className="rounded-2xl" src="https://comments-file.daviddong.me/18.png" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
