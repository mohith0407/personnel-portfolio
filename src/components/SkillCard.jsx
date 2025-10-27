const SkillCard = ({ skill }) => {
  const Icon = skill.icon;
  return (
    // The group class allows the card to be styled when hovered
    <div className="group w-40 flex-shrink-0">
      <div 
        className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 flex flex-col items-center justify-center h-36 
                   transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-2xl 
                   group-hover:border-amber-400 group-hover:ring-2 group-hover:ring-amber-200"
      >
        <Icon className={`w-12 h-12 ${skill.color} transition duration-300 group-hover:scale-110`} />
        <p className="mt-3 text-lg font-semibold text-gray-800 transition duration-300 group-hover:text-amber-500">
          {skill.name}
        </p>
      </div>
    </div>
  );
};

export default SkillCard;