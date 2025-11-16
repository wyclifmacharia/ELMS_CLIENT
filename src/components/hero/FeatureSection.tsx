const features = [
  {
    title: "Smart Leave Requests",
    desc: "Employees can apply for leave in seconds — no paperwork, no confusion.",
    icon: "📝",
  },
  {
    title: "Instant Notifications",
    desc: "Managers and HR instantly get notified for approvals or rejections.",
    icon: "🔔",
  },
  {
    title: "Real-Time Balances",
    desc: "View and track your leave balance dynamically, anytime.",
    icon: "📊",
  },
  {
    title: "Admin Control Panel",
    desc: "HR can view analytics, manage leave types, and monitor all requests.",
    icon: "🛠️",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-12">
          Why Choose ELMS?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-700">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
