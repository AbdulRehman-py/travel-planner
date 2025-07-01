import { auth } from "@/auth";
import { Button } from "@/components/ui/button";
import Link from "next/dist/client/link";

export default async function TripsPage() {
    const session = await auth();
    if(!session) {
        return (
            <div className="flex items-center justify-center h-screen">
                <h1 className="text-2xl font-bold">Please sign in to view your trips</h1>
            </div>
        );
    }


    return (
        <div className="
        space-y-6 container mx-auto px-4 py-8">
            {""}
            <div>
                <h1>Dashboard</h1>
                <Link href={"/trips/new"} className="inline-block mb-4">
                    <Button>
                        New Trip
                    </Button>
                </Link>

            </div>

        </div>
    )


}