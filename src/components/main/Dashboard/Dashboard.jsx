/* eslint-disable no-unused-vars */
import Group from "../Groups/Group";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { AlignJustify } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Avatar } from "../../ui/avatar";
import { AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Dashboard = () => {
  return (
    <div className="h-full w-full justify-start items-start flex flex-row ">
      <div className="profile flex flex-col">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" className="p-1 mr-1">
              <AlignJustify className="w-6" />
            </Button>
          </SheetTrigger>

          <SheetContent className="flex flex-col">
            <div className="flex">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>

              <h3 className="scroll-m-20 text-xl font-semibold tracking-tight mx-3 text-center my-1">
                Welcome , User !
              </h3>
            </div>

            <div className="flex flex-col">
              <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
                Overall Statistics
              </h3>

              <Separator className="my-1" />

              <div className="table my-3 w-full overflow-y-auto">
                <table className="w-full">
                  <tbody>
                    <tr className="m-0 border-t p-0 even:bg-muted">
                      <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                        Owed
                      </td>
                      <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right"></td>
                    </tr>
                    <tr className="m-0 border-t p-0 ">
                      <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                        To pay
                      </td>
                      <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right"></td>
                    </tr>
                    <tr className="m-0 border-t p-0 ">
                      <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                        Balance
                      </td>
                      <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right"></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>

      <div className="grouplist flex justify-start w-full flex-col">
        <h3 className="scroll-m-20 text-xl sm:text-2xl font-semibold tracking-tight mx-1 mt-1 w-full">
          Groups
        </h3>
        <Separator className="my-1 mx-1" />
        <div className="flex h-full justify-start w-full flex-col ">
          <Group />
          <Group />
          <Group />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
