import Footer from "../components/Footer";
import InAppHeader from "../components/InAppHeader";
import TopNav from "../components/TopNav";

const TermsAndConditionsPage = () => {
  return (
    <div>
      <InAppHeader />
      <main className="mt-16 bg-gray-50 px-4 py-16 text-gray-900 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl mb-8 font-bold">Terms & Conditions</h1>
          <p className="mb-4">
            Welcome to E-Digital Pakistan. By accessing our platform, you agree
            to comply with these terms and conditions.
          </p>
          <h2 className="text-2xl mb-4 font-semibold">
            Account Responsibilities
          </h2>
          <p className="mb-4">
            You are responsible for maintaining the confidentiality of your
            account and for all activities that occur under your account.
          </p>
          <h2 className="text-2xl mb-4 font-semibold">Prohibited Activities</h2>
          <p className="mb-4">
            Users are prohibited from engaging in activities such as spamming,
            hacking, or using our platform for unlawful purposes.
          </p>
          <h2 className="text-2xl mb-4 font-semibold">
            Limitation of Liability
          </h2>
          <p className="mb-4">
            E-Digital Pakistan will not be liable for any damages arising from
            the use or inability to use our services.
          </p>
          <h2 className="text-2xl mb-4 font-semibold">Changes to Terms</h2>
          <p className="mb-4">
            We may update these terms from time to time. Users will be notified
            of any significant changes through our platform.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsAndConditionsPage;
