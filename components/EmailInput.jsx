export default function EmailInput({ id, name, value, required = false }) {
  return (
    <div>
      <label className="mb-4 block text-[2rem] font-medium" htmlFor={name}>
        {value}
      </label>
      <input
        className="w-full border-b border-black text-2xl leading-[1.7] focus-visible:outline-none"
        type="email"
        id={id}
        name={name}
        required={required}
      />
    </div>
  );
}
