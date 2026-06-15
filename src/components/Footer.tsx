export default function Footer() {
  return (
    <footer
      className="border-t py-5"
      style={{ background: "#050A14", borderColor: "rgba(255,255,255,0.05)" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <p className="text-white/40 text-xs">
          © {new Date().getFullYear()} Bio-Inspired Computational Intelligence
          Lab, Brock University. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
