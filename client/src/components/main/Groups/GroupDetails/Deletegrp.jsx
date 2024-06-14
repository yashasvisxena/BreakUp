/* eslint-disable react/no-unescaped-entities */
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogClose,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";


const Deletegrp = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="destructive" className="font-semibold text-xs sm:text-base">
          Delete Group
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Delete Group</DialogTitle>
          <DialogDescription className="text-base">
           Are you sure to delete this group ?
          </DialogDescription>
        </DialogHeader>
        <DialogClose asChild>
        <Button type="submit">Yes</Button>
        </DialogClose>
        <DialogClose asChild>
        <Button variant="outline" type="submit">No</Button>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
};

export default Deletegrp;
