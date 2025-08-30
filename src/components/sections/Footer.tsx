
export const Footer = () => {
  return (
    <footer className="border-t bg-background py-6 mt-16 max-w-5xl mx-auto px-6">
      <div className="flex flex-col justify-center items-center text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Ali Babagana Musa.</p>
        <p>Built with ❤️ using React & Shadcn UI.</p>
      </div>
    </footer>
  );
};
