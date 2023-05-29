import { Button } from "@mui/material";
import { useRouter } from "next/router";
import { MaterialSymbol } from "material-symbols";

export default function thankYou() {
  const router = useRouter();

  return (
    <>
      <main className="grid place-content-center bg-gradient-to-b from-color-opacity-20 to-color-opacity-10 p-8">
        <h2 className=" text-center">Thanks for ordering</h2>
        <h3>Order confirmed</h3>
        <p>
          Thank you for placing your order with us! We have sent an email confirmation to the address you provided. Please check
          your inbox for further details. To view the program and additional information, click the button below. We hope you
          enjoy the program and have a wonderful experience with us!
        </p>
        <div className=" mb-16 mt-10 flex justify-center">
          <Button
            className=" mb-10 h-10 gap-5 place-self-center rounded-none border-2 border-solid border-color-yellow px-6 font-sans font-semibold text-color-yellow hover:bg-color-yellow hover:text-color-black "
            onClick={() => router.push("https://festival-rv84d8qnd-thefred94.vercel.app/")}
          >
            <span className="pt-1"> See program</span> <span className="material-symbols-outlined">arrow_forward</span>
          </Button>
        </div>
      </main>
    </>
  );
}