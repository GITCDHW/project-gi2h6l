export default function FeatureCard({ heading, description }) {
  return (
    <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-100 text-center transition-shadow hover:shadow-md">
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{heading}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}