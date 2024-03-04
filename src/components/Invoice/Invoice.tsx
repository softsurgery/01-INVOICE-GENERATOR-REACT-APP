import { Navbar } from "../Common/Navbar";
import { Container } from "../Common/ui/Container";
import { CorporateData } from "./InvoiceFragments/CorporateData";
import { CorporateDetails } from "./InvoiceFragments/CorporateDetails";

export const Invoice = () => {
  return (
    <div>
      <Navbar />
      <Container className="mt-5 p-5 bg-gray-800 opacity-80 rounded-sm ">
        <h1 className="text-xl font-bold md:text-2xl text-current text-white">
          New Invoice :
        </h1>
        <div className="grid grid-cols-2 gap-2">
            <CorporateData />
            <div className="flex flex-col items-end w-full">
               <CorporateDetails className="w-1/2 m-5"/>
            </div>
           
        </div>
      </Container>
    </div>
  );
};
