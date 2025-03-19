import RegistrationForm from "@/components/Auth/Registration/RegistrationForm";
import SocialLogins from "@/components/Auth/SocialLogins/SocialLogins";

export default function RegistrationPage() {
  return (
    <section className="h-screen grid place-items-center mt-8">
      <div className="max-w-[450px] w-full mx-auto p-4 border border-gray-700/20 rounded-md">
        <h4 className="font-bold text-2xl">Sign Up</h4>
        <RegistrationForm />
        <SocialLogins />
      </div>
    </section>
  );
}
