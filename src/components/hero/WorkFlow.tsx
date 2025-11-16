const steps = [
  { step: "1️⃣", title: "Employee Submits Request", desc: "Simple online form to request leave." },
  { step: "2️⃣", title: "Manager Reviews", desc: "Supervisor gets instant notification for approval." },
  { step: "3️⃣", title: "HR Finalizes", desc: "HR validates and updates the records automatically." },
];

const WorkflowSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-10">
          How ELMS Works
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((item, i) => (
            <div
              key={i}
              className="p-8 rounded-xl shadow border border-gray-100 hover:shadow-lg transition"
            >
              <div className="text-4xl mb-4">{item.step}</div>
              <h3 className="text-xl font-semibold mb-2 text-amber-600">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkflowSection;
