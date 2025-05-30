import Form from "./Form";
import CPsideOnboard from "@/components/CPsideOnboard";

export default function Login() {
  return (
    <main className="bg-primary p-4 h-screen min-h-screen flex max-md:flex-col max-md:h-auto">
      <CPsideOnboard />
      <Form />
    </main>
  );
}
