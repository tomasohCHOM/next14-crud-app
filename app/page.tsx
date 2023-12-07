import Navbar from "@/components/Navbar";
import AuthButton from "../components/AuthButton";
import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import Link from "next/link";
import Article from "@/components/Article";

export default async function Index() {
  return (
    <div className="flex w-full flex-1 flex-col items-center gap-20">
      <Navbar />

      <Article title="Hello World" content="This is my first article" />
    </div>
  );
}
