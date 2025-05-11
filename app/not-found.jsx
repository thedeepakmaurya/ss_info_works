import Button from "@/components/ui/Button";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="py-5">
      <section className="container">
        <div className="flex flex-col items-center justify-center">
          <h3>404 Not Found</h3>
          <p className="mb-2">Could not find requested resource</p>
          <Button text={'Return Home'} url={'/'} />
        </div>
      </section>
    </main>
  );
}
