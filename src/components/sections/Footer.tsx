
export const Footer = () => {
  return (
    <footer className="border-t bg-background py-6 mt-16 max-w-5xl mx-auto px-6">
      <div className="flex justify-center items-center text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Ali Babagana Musa. Built with ❤️ using React & Shadcn UI.</p>
      </div>
    </footer>
  );
};
