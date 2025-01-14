import { Label } from "@/components/ui/label";

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

interface PropsType {
  handleEvent: (event: React.MouseEvent<HTMLButtonElement>) => void;
  selectedOption: string;
}

export const SelectEvent = ({ handleEvent, selectedOption }: PropsType) => {
  return (
    <div className="">
      <h2 className="text-3xl font-semibold">Choose Ticket</h2>
      <div className="py-5">
        <RadioGroup defaultValue={selectedOption}>
          <div className="flex items-center space-x-2">
            <RadioGroupItem
              value="festivalOfLights"
              id="option-one"
              onClick={handleEvent}
            />
            <Label htmlFor="option-one" className="text-2xl">
              Festival of Lights
              <span className="ml-10">-$29.90</span>
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem
              value="GardenGiftShop"
              id="option-two"
              onClick={handleEvent}
            />
            <Label htmlFor="option-two" className="text-2xl">
              Garden Gift Shop
              <span className="ml-10">-$19.90</span>
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem
              value="MedicineEvent"
              id="option-three"
              onClick={handleEvent}
            />
            <Label htmlFor="option-three" className="text-2xl">
              Medicine Event
              <span className="ml-10">-$18.90</span>
            </Label>
          </div>
        </RadioGroup>
      </div>
    </div>
  );
};
