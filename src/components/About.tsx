export default function About() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-white dark:bg-gray-950">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 items-center">
          <div className="flex flex-col justify-center space-y-8 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tight sm:text-5xl xl:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-black to-gray-700 dark:from-white dark:to-gray-300">
                Discover Our Unique Features
              </h1>
              <p className="max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl mx-auto">
                Our features are designed to enhance your productivity and streamline your workflow.
              </p>
            </div>
            <div className="w-full max-w-full space-y-4 mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="flex flex-col items-center space-y-2 border border-gray-200 dark:border-gray-800 p-4 rounded-lg">
                  <div className="p-2 bg-gray-100 dark:bg-gray-900 rounded-full">
                    <InboxIcon className="text-primary h-6 w-6 mb-2" />
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white">Smart Inbox</h2>
                  <p className="text-gray-500 dark:text-gray-400">
                    Our Smart Inbox feature helps you manage your emails efficiently by prioritizing important emails.
                  </p>
                </div>
                <div className="flex flex-col items-center space-y-2 border border-gray-200 dark:border-gray-800 p-4 rounded-lg">
                  <div className="p-2 bg-gray-100 dark:bg-gray-900 rounded-full">
                    <MergeIcon className="text-primary h-6 w-6 mb-2" />
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white">Seamless Integration</h2>
                  <p className="text-gray-500 dark:text-gray-400">
                    Seamless Integration allows you to connect with your favorite apps and services without leaving your
                    inbox.
                  </p>
                </div>
                <div className="flex flex-col items-center space-y-2 border border-gray-200 dark:border-gray-800 p-4 rounded-lg">
                  <div className="p-2 bg-gray-100 dark:bg-gray-900 rounded-full">
                    <SettingsIcon className="text-primary h-6 w-6 mb-2" />
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white">Advanced Customization</h2>
                  <p className="text-gray-500 dark:text-gray-400">
                    With Advanced Customization, you can personalize your email client to suit your preferences and work
                    style.
                  </p>
                </div>
                <div className="flex flex-col items-center space-y-2 border border-gray-200 dark:border-gray-800 p-4 rounded-lg">
                  <div className="p-2 bg-gray-100 dark:bg-gray-900 rounded-full">
                    <SearchIcon className="text-primary h-6 w-6 mb-2" />
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white">Powerful Search</h2>
                  <p className="text-gray-500 dark:text-gray-400">
                    Our Powerful Search feature allows you to find any email, contact, or file in seconds.
                  </p>
                </div>
                <div className="flex flex-col items-center space-y-2 border border-gray-200 dark:border-gray-800 p-4 rounded-lg">
                  <div className="p-2 bg-gray-100 dark:bg-gray-900 rounded-full">
                    <LockIcon className="text-primary h-6 w-6 mb-2" />
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white">Reliable Security</h2>
                  <p className="text-gray-500 dark:text-gray-400">
                    With Reliable Security, your data is always safe and protected.
                  </p>
                </div>
                <div className="flex flex-col items-center space-y-2 border border-gray-200 dark:border-gray-800 p-4 rounded-lg">
                  <div className="p-2 bg-gray-100 dark:bg-gray-900 rounded-full">
                    <CombineIcon className="text-primary h-6 w-6 mb-2" />
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white">Easy Collaboration</h2>
                  <p className="text-gray-500 dark:text-gray-400">
                    Easy Collaboration allows you to share and edit documents with your team in real time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CombineIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="8" height="8" x="2" y="2" rx="2" />
      <path d="M14 2c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2" />
      <path d="M20 2c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2" />
      <path d="M10 18H5c-1.7 0-3-1.3-3-3v-1" />
      <polyline points="7 21 10 18 7 15" />
      <rect width="8" height="8" x="14" y="14" rx="2" />
    </svg>
  );
}

function InboxIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="22 12 16 12 14 15 10 15 8 12 2 12" />
      <path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" />
    </svg>
  );
}

function LockIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );
}

function MergeIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 6 4-4 4 4" />
      <path d="M12 2v10.3a4 4 0 0 1-1.172 2.872L4 22" />
      <path d="m20 22-5-5" />
    </svg>
  );
}

function SearchIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

function SettingsIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}
