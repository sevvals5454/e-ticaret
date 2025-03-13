export default function Category({ category: { id, title, image } }) {
  return (
    <button className="flex flex-col items-center gap-y-2 text-center p-4 transition hover:bg-purple-50 w-full md:w-[200px] rounded-lg">
      <img src={image} alt={title} className="w-12 h-12 rounded-full border border-gray-200" />
      <span className="text-sm font-semibold text-gray-700 whitespace-nowrap group-hover:text-brand-color tracking-tight">{title}</span>
    </button>
  );
}
