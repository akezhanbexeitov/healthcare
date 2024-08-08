import PatientForm from "@/components/forms/PatientForm";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex h-screen max-h-screen ">
      {/* OTP Verification */}
      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[496px]">
          <header className="flex gap-x-1 items-center mb-12 w-fit font-semibold">
            <Image
              src="/healthcare.svg"
              height={60}
              width={60}
              alt="Patient"
              priority={true}
            />
            <h1>Healthcare</h1>
          </header>

          <PatientForm />

          <div className="text-14-regular mt-20 flex justify-between">
            <p className="justify-items-end text-dark-600 xl:text-left">
              © 2024 Healthcare
            </p>
            <Link href="/?admin=true" className="text-green-500">
              Admin
            </Link>
          </div>
        </div>
      </section>

      <Image
        src="/assets/images/onboarding-img.png"
        width={1000}
        height={1000}
        alt="Patient"
        className="side-img max-w-[50%]"
      />
    </div>
  );
}
