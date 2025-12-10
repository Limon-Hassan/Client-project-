export default function ReviewCard({ img, name, role, rating, text }) {
  return (
    <div className="w-[470px] h-[300px] bg-white box-shadow rounded-2xl p-6 flex flex-col justify-between ">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img
            src={img}
            alt={name}
            className="w-16 h-16 rounded-full object-cover"
          />
          <div>
            <h3 className="text-[32px] font-normal">{name}</h3>
            <p className="text-gray-500 italic text-[20px]">{role}</p>
          </div>
        </div>

        <img
          src="/google.avif"
          alt="google"
          className="w-10 h-10 rounded-full"
        />
      </div>

      <div className="flex items-center gap-1 mt-3">
        {Array.from({ length: 5 }).map((_, i) => (
          <span className="text-[20px]" key={i}>
            {i < rating ? '⭐' : '☆'}
          </span>
        ))}
        <span className="text-gray-600 font-medium">{rating}.0</span>
      </div>

      <p className="text-[20px] font-normal text-gray-500 mt-1 leading-relaxed border-t-2 border-[#5919C1] border-dotted">
        {text}
      </p>
    </div>
  );
}
