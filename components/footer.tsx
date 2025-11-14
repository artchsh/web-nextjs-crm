export function Footer() {
  return (
    <footer className="border-t mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <p className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Internal CRM. Built for internal company use.
        </p>
      </div>
    </footer>
  );
}
