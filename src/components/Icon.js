export default function Icon({ name, color }) {
  return (
    <span className="material-symbols-outlined" style={{ color }}>
      {name}
    </span>
  );
}
