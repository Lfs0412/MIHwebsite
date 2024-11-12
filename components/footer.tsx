import { Brain } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
      <footer className="border-t bg-muted/50">
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col md:flex-row md:justify-around gap-8">
            {/* Company Information */}
            <div className="space-y-4 md:flex-1 md:text-center">
              <div className="flex items-center justify-center space-x-2">
                <span className="text-xl font-bold">MAKE IT HAPPEN</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Empowering businesses with cutting-edge AI solutions that amplify human potential.
              </p>
            </div>

            {/* Solutions Links */}
            <div className="md:flex-1 md:text-center">
              <h3 className="font-semibold mb-4">Solutions</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                    Cognitive Analytics
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                    Process Automation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                    Predictive Insights
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company Links */}
            <div className="md:flex-1 md:text-center">
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className="text-sm text-muted-foreground hover:text-primary">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Footer Bottom Section */}
          <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Make it Happen. All rights reserved.
          </div>
        </div>
      </footer>
  );
}
