"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { createTrip } from "@/lib/actions/create-trip";
import { UploadButton } from "@/lib/uploadthing";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState, useTransition } from "react";


const NewTrip = () => {

    const [isPending, startTransition] = useTransition();
    const [imageUrl, setImageUrl] = useState<string | null>(null);

  return (
 
    <div className="max-w-lg  mx-auto mt-10 h-screen">
        <Card>
            <CardHeader>
                New Trip
            </CardHeader>
            <CardContent>
                <form className="space-y-6" action={
                    (formData: FormData) => {
                       if (imageUrl) {
                        formData.append("image", imageUrl);
                       }
                        startTransition(() => {
                            // This will run the createTrip function in a non-blocking way
                           createTrip(formData);
                        });
                       
                    }
                }>
                    <div>
                        <label htmlFor="" className="block text-sm font-medium text-gray-700 mb-1">
                            {""}
                            Title
                        </label>
                        <input
                        required
                            type="text"
                            name="title"
                            placeholder="Trip Name..."
                            className={cn("w-full border border-gray-300 px-3 py-2 ",
                                 "rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500")}
                        />
                    </div>
                      <div>
                        <label htmlFor="" className="block text-sm font-medium text-gray-700 mb-1">
                            {""}
                           Description
                        </label>
                        <textarea
                        required
                        name="description"
                            placeholder="Trip description..."
                            className={cn("w-full border border-gray-300 px-3 py-2",
                                 "rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500")}
                        />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="" className="block text-sm font-medium text-gray-700 mb-1">
                            {""}
                            Start Date
                        </label>
                        <input
                        name="startDate"
                            type="date"                           
                           className={cn("w-full border border-gray-300 px-3 py-2",
                                 "rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500")}
                        />
                    </div>
                  
                      <div>
                      <div>
                        <label htmlFor="" className="block text-sm font-medium text-gray-700 mb-1">
                            {""}
                            End Date
                        </label>
                        <input
                            type="date"
                            name="endDate"
                            className={cn("w-full border border-gray-300 px-3 py-2",
                                 "rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500")}
                        />
                    </div>
                    </div>
                      </div>
                      <div>
                        <label >Trip Image</label>
                        {imageUrl && (
                            <Image src={imageUrl} alt="Trip Image" className="
                            w-full mb-4 rounded-md max-h-48 object-cover" width={300} height={200 }/>
                        )}
                               <UploadButton endpoint={"imageUploader"} 
                               onClientUploadComplete={(res) => {
                                if (res && res[0].ufsUrl) {
                                    setImageUrl(res[0].ufsUrl);
                                
                                }
                                 }}

                                 onUploadError={(error: Error) => {
                                    console.error("Error uploading image:", error);
                                    
                                 }}
                                 
                                 />
</div>
                      <Button type="submit" className="w-full" disabled={isPending}>
                      {isPending ? "Creating Trip..." : "Create Trip"}
                      </Button>
                </form>
            </CardContent>
            </Card></div>
  )
}



export default NewTrip;