import Footer from "../components/Footer";
import InAppHeader from "../components/InAppHeader";
import TopNav from "../components/TopNav";

const PrivacyPolicyPage = () => {
  return (
    <div>
      <InAppHeader />
      <main className="mt-16 bg-gray-50 px-4 py-16 text-gray-900 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl mb-8 font-bold">Privacy Policy</h1>
          <p className="mb-4">
            At E-Digital Pakistan, we respect your privacy and are committed to
            protecting your personal data. This privacy policy explains how we
            collect, use, and share your information when you use our services.
          </p>
          <h2 className="text-2xl mb-4 font-semibold">
            Information We Collect
          </h2>
          <p className="mb-4">
            We may collect personal information like your name, email address,
            and payment details when you use our services or register on our
            platform.
          </p>
          <h2 className="text-2xl mb-4 font-semibold">
            How We Use Your Information
          </h2>
          <p className="mb-4">
            Your data is used to provide and improve our services, process
            payments, and communicate with you about your account.
          </p>
          <h2 className="text-2xl mb-4 font-semibold">Your Rights</h2>
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
