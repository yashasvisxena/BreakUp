/* eslint-disable react/no-unescaped-entities */

import { Badge } from "@/components/ui/badge";
import Linkcopy from "./Linkcopy";
import Editgroup from "./Editgroup";
import Deletegrp from "./Deletegrp";

const Groupdetails = () => {
  return (
    <div className="flex-col flex w-full rounded justify-between items-center">
      <div className="text-center w-full my-1 p-1 rounded  sm:text-xl text-sm h-full scroll-m-20 bg-backgound font-medium tracking-tight ">
        Created by Yashasvi on 25 December 2023
      </div>
      <div className="flex flex-col h-full items-center justify-center w-fit px-9 py-4 bg-primary-foreground rounded  ">
        <h1 className="text-center scroll-m-20 sm:text-xl font-semibold tracking-tight text-sm h-full mx-1">
          Members
        </h1>
        <div className="flex w-full flex-wrap justify-center">
          <Badge className="m-1 text-xs sm:text-base">Yashasvi</Badge>
          <Badge className="m-1 text-xs sm:text-base">Yashasvi</Badge>
          <Badge className="m-1 text-xs sm:text-base">Yashasvi</Badge>
          <Badge className="m-1 text-xs sm:text-base">Yashasvi</Badge>
        </div>
      </div>
      <div className="flex justify-center space-x-2 items-start w-full my-1 p-1">
        <Linkcopy/>
        <Editgroup/>
        <Deletegrp/>
      </div>
    </div>
  );
};

export default Groupdetails;
