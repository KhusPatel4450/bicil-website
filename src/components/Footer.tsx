export default function Footer() {
  return (
    <footer
      className="border-t py-5"
      style={{ background: "#f8fafc", borderColor: "#e2e8f0" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <p className="text-slate-400 text-xs">
          © {new Date().getFullYear()} Bio-Inspired Computational Intelligence
          Lab, Brock University. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
