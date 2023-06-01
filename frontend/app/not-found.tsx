export default function NotFound() {
  return (
    <div className="flex flex-1 items-center justify-center gap-2">
      <h2 className="text-2xl">404</h2>
      <div className="h-6 w-[1px] bg-white" />
      <p>Could not find requested resource.</p>
    </div>
  );
}
