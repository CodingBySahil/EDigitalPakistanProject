
import Footer from "../components/Footer";
import TopNav from "../components/TopNav";


const PrivacyPolicyPage = () => {
  return (
    <div>
      <TopNav className="bg-[#4abd86]" />
      <main className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 text-gray-900 mt-16">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
          <p className="mb-4">
            At E-Digital Pakistan, we respect your privacy and are committed to
            protecting your personal data. This privacy policy explains how we
            collect, use, and share your information when you use our services.
          </p>
          <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
          <p className="mb-4">
            We may collect personal information like your name, email address,
            and payment details when you use our services or register on our
            platform.
          </p>
          <h2 className="text-2xl font-semibold mb-4">
            How We Use Your Information
          </h2>
          <p className="mb-4">
            Your data is used to provide and improve our services, process
            payments, and communicate with you about your account.
          </p>
          <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
          <p className="mb-4">
            You have the right to access, correct, or delete your personal
            information. Please contact us at support@edp.com for assistance.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicyPage;
