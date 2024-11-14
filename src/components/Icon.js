///////_______________I C O N_______________///////

export default function Icon({ name, al }) {
  return (
    <span
      className="material-symbols-outlined p-4 text-2xl transition-transform duration-200 ease-in group-hover:scale-110"
      aria-label={al}
    >
      {name}
    </span>
  );
}
