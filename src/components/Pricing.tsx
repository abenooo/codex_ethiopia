import { Button } from "@/components/ui/button";

function CheckIcon(props:any) {
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
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

export default function Component() {
  return (
    <div className="w-full max-w-6xl mx-auto py-12 md:py-16 lg:py-20">
      <div className="grid gap-8 md:gap-12 lg:gap-16">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-8">
          <div className="grid gap-2">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Pricing</h2>
            <p className="text-gray-500 dark:text-gray-400 max-w-[650px]">
              Choose the plan that fits your needs. All plans are billed monthly and exclude VAT.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-12">
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden dark:bg-gray-950 dark:border-gray-800">
            <div className="px-6 py-8 sm:px-10 sm:py-10">
              <div className="text-center mb-4">
                <h3 className="text-3xl font-bold">BASIC</h3>
                <p className="text-2xl font-bold mt-2">56,000 birr</p>
                <p className="text-gray-500 dark:text-gray-400">Exc. VAT</p>
              </div>
              <ul className="mt-8 space-y-3 text-gray-500 dark:text-gray-400">
                <li className="flex items-start">
                  <CheckIcon className="h-6 w-6 mr-2 text-primary" />
                  Up to 5 Website Pages
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-6 w-6 mr-2 text-primary" />
                  1 Concept Custom Design
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-6 w-6 mr-2 text-primary" />
                  Content Management System Driven
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-6 w-6 mr-2 text-primary" />
                  Responsive Web Design
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-6 w-6 mr-2 text-primary" />
                  Image Rotators/Slides
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-6 w-6 mr-2 text-primary" />
                  Basic Contact Forms
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-6 w-6 mr-2 text-primary" />
                  Social Media Integration
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-6 w-6 mr-2 text-primary" />
                  Image Optimization
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-6 w-6 mr-2 text-primary" />
                  Unlimited Revision
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-6 w-6 mr-2 text-primary" />
                  Unlimited Email Address
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-6 w-6 mr-2 text-primary" />
                  FREE Website Training
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-6 w-6 mr-2 text-primary" />
                  FREE 1 Year Domain & Hosting
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-6 w-6 mr-2 text-primary" />
                  FREE 1 Year Support & Warranty
                </li>
              </ul>
              <h4 className="mt-6 font-semibold">DESIGN ELEMENTS</h4>
              <ul className="mt-3 space-y-3 text-gray-500 dark:text-gray-400">
                <li className="flex items-start">
                  <CheckIcon className="h-6 w-6 mr-2 text-primary" />
                  2 Concept Logo Design
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-6 w-6 mr-2 text-primary" />
                  Business Card Design
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-6 w-6 mr-2 text-primary" />
                  Letterhead Design
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-6 w-6 mr-2 text-primary" />
                  Envelop Design
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-6 w-6 mr-2 text-primary" />
                  Identity Card (ID) Card Design
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-6 w-6 mr-2 text-primary" />
                  Email Signature
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-6 w-6 mr-2 text-primary" />
                  Brochure Design
                </li>
              </ul>
            </div>
            <div className="px-6 py-4 bg-gray-50 dark:bg-gray-900">
              <Button className="w-full">Get started</Button>
            </div>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden dark:bg-gray-950 dark:border-gray-800">
            <div className="px-6 py-8 sm:px-10 sm:py-10">
              <div className="text-center mb-4">
                <h3 className="text-3xl font-bold">CORPORATE</h3>
                <p className="text-2xl font-bold mt-2">80,000 birr</p>
                <p className="text-gray-500 dark:text-gray-400">Exc. VAT</p>
              </div>
              <ul className="mt-8 space-y-3 text-gray-500 dark:text-gray-400">
                <li className="flex items-start">
                  <CheckIcon className="h-6 w-6 mr-2 text-primary" />
                  Up to 15 Website Pages
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-6 w-6 mr-2 text-primary" />
                  2 Concept Custom Design
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-6 w-6 mr-2 text-primary" />
                  Content Management System Driven
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-6 w-6 mr-2 text-primary" />
                  Responsive Web Design
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-6 w-6 mr-2 text-primary" />
                  Image Rotators/Slides
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-6 w-6 mr-2 text-primary" />
                  Image Gallery
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-6 w-6 mr-2 text-primary" />
                  Basic Contact Forms
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-6 w-6 mr-2 text-primary" />
                  Custom Form
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-6 w-6 mr-2 text-primary" />
                  Chatbot/Live Chat Setup
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-6 w-6 mr-2 text-primary" />
                  Social Media Integration
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-6 w-6 mr-2 text-primary" />
                  Image Optimization
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-6 w-6 mr-2 text-primary" />
                  Unlimited Revision
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-6 w-6 mr-2 text-primary" />
                  Unlimited Email Address
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-6 w-6 mr-2 text-primary" />
                  FREE Website Training
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-6 w-6 mr-2 text-primary" />
                  FREE 1 Year Domain & Hosting
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-6 w-6 mr-2 text-primary" />
                  FREE 1 Year Support & Warranty
                </li>
              </ul>
              <h4 className="mt-6 font-semibold">DESIGN ELEMENTS</h4>
              <ul className="mt-3 space-y-3 text-gray-500 dark:text-gray-400">
                <li className="flex items-start">
                  <CheckIcon className="h-6 w-6 mr-2 text-primary" />
                  3 Concept Logo Design
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-6 w-6 mr-2 text-primary" />
                  Business Card Design
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-6 w-6 mr-2 text-primary" />
                  Letterhead Design
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-6 w-6 mr-2 text-primary" />
                  Envelop Design
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-6 w-6 mr-2 text-primary" />
                  Identity Card (ID) Card Design
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-6 w-6 mr-2 text-primary" />
                  Email Signature
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-6 w-6 mr-2 text-primary" />
                  Brochure Design
                </li>
              </ul>
            </div>
            <div className="px-6 py-4 bg-gray-50 dark:bg-gray-900">
              <Button className="w-full">Get started</Button>
            </div>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden dark:bg-gray-950 dark:border-gray-800">
            <div className="px-6 py-8 sm:px-10 sm:py-10">
              <div className="text-center mb-4">
                <h3 className="text-3xl font-bold">ENTERPRISE</h3>
                <p className="text-2xl font-bold mt-2">98,000 birr</p>
                <p className="text-gray-500 dark:text-gray-400">Exc. VAT</p>
              </div>
              <ul className="mt-8 space-y-3 text-gray-500 dark:text-gray-400">
                <li className="flex items-start">
                  <CheckIcon className="h-6 w-6 mr-2 text-primary" />
                  Up to 45 Website Pages
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-6 w-6 mr-2 text-primary" />
                  3 Concept Custom Design
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-6 w-6 mr-2 text-primary" />
                  Content Management System Driven
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-6 w-6 mr-2 text-primary" />
                  Responsive Web Design
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-6 w-6 mr-2 text-primary" />
                  Image Rotators/Slides
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-6 w-6 mr-2 text-primary" />
                  Image Gallery
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-6 w-6 mr-2 text-primary" />
                  Basic Contact Forms
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-6 w-6 mr-2 text-primary" />
                  Custom Form
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-6 w-6 mr-2 text-primary" />
                  Chatbot/Live Chat Setup
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-6 w-6 mr-2 text-primary" />
                  Social Media Integration
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-6 w-6 mr-2 text-primary" />
                  Newsletter Integration
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-6 w-6 mr-2 text-primary" />
                  Event Calendar
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-6 w-6 mr-2 text-primary" />
                  Google My Business Listing
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-6 w-6 mr-2 text-primary" />
                  Submission to Search Engines
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-6 w-6 mr-2 text-primary" />
                  Google Analytics Setup
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-6 w-6 mr-2 text-primary" />
                  Image Optimization
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-6 w-6 mr-2 text-primary" />
                  Unlimited Revision
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-6 w-6 mr-2 text-primary" />
                  Unlimited Email Address
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-6 w-6 mr-2 text-primary" />
                  FREE Website Training
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-6 w-6 mr-2 text-primary" />
                  FREE 1 Year Domain & Hosting
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-6 w-6 mr-2 text-primary" />
                  FREE 1 Year Support & Warranty
                </li>
              </ul>
              <h4 className="mt-6 font-semibold">DESIGN ELEMENTS</h4>
              <ul className="mt-3 space-y-3 text-gray-500 dark:text-gray-400">
                <li className="flex items-start">
                  <CheckIcon className="h-6 w-6 mr-2 text-primary" />
                  4 Concept Logo Design
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-6 w-6 mr-2 text-primary" />
                  Business Card Design
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-6 w-6 mr-2 text-primary" />
                  Letterhead Design
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-6 w-6 mr-2 text-primary" />
                  Envelop Design
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-6 w-6 mr-2 text-primary" />
                  Identity Card (ID) Card Design
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-6 w-6 mr-2 text-primary" />
                  Email Signature
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-6 w-6 mr-2 text-primary" />
                  Brochure Design
                </li>
              </ul>
            </div>
            <div className="px-6 py-4 bg-gray-50 dark:bg-gray-900">
              <Button className="w-full">Get started</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
