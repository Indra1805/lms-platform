import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-100 border-t mt-20">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Brand */}
        <div>
          <h2 className="text-xl font-semibold">LMS Platform</h2>
          <p className="text-sm text-gray-600 mt-2">
            Learn modern skills with industry-ready courses.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="font-semibold mb-2">Explore</h3>
          <ul className="space-y-1 text-gray-600">
            <li>
              <Link href="/courses">Courses</Link>
            </li>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/dashboard">Dashboard</Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold mb-2">Contact</h3>
          <p className="text-gray-600 text-sm">
            support@lmsplatform.com
          </p>
        </div>

      </div>

      <div className="text-center text-sm text-gray-500 pb-6">
        © {new Date().getFullYear()} LMS Platform. All rights reserved.
      </div>
    </footer>
  );
}