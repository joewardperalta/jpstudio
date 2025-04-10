export default function TextInput({
  id,
  name,
  value,
  required = false,
  onChange,
}) {
  return (
    <div>
      <label className="mb-4 block text-[2rem] font-medium" htmlFor={name}>
        {value}
      </label>
      <input
        className="w-full border-b border-black text-2xl leading-[1.7] focus-visible:outline-none"
        type="text"
        id={id}
        name={name}
        required={required}
        onChange={onChange}
      />
    </div>
  );
}
