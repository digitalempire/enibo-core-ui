import * as React from "react";
import { cn } from "@/lib/utils";

import { ChevronsUpDown, CheckIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandSeparator,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Badge } from "@/components/ui/badge";
import { Separator } from "./ui/separator";
import { CommandList } from "cmdk";

export type OptionType = {
  label: string;
  value: string;
};

//props for multi-select
//selected should not be undefined

interface MultiSelectProps {
  options: OptionType[];
  selected: OptionType[] | [];
  placeholder: string;
  className: string;
  selectLimit?: number;
  onChange: (selected: OptionType[]) => void;
}

function MultiSelect({
  options,
  selected,
  placeholder,
  className,
  selectLimit = Infinity,
  onChange,
  ...props
}: MultiSelectProps) {
  const [open, setOpen] = React.useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen} {...props}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          size="default"
          className="justify-between w-full h-10"
        >
          {placeholder}
          {selected?.length > 0 && (
            <>
              <Separator orientation="vertical" className="h-4 mx-2" />
              <Badge
                variant="secondary"
                className="px-1 font-normal rounded-sm lg:hidden"
              >
                {selected.length}
              </Badge>
              <div className="hidden space-x-1 lg:flex">
                {selected.length > 2 ? (
                  <Badge
                    variant="secondary"
                    className="px-1 font-normal rounded-sm"
                  >
                    {selected.length} selected
                  </Badge>
                ) : (
                  selected.map((item) => (
                    <Badge
                      variant="secondary"
                      key={item.label}
                      className="px-1 font-normal rounded-sm"
                    >
                      {item.label}
                    </Badge>
                  ))
                )}
              </div>
            </>
          )}
          <ChevronsUpDown className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full p-0" align="start" asChild>
       <div className="w-[100%]">
       <Command className={className} >
          <CommandInput placeholder="Search..." />
          <CommandList >
            <CommandEmpty>No results found</CommandEmpty>
            <CommandGroup className="w-full overflow-auto max-h-64">
              {options.map((option) => {
                const isSelected = selected?.some(
                  (item) => item.value === option.value
                );
                
                return (
                  <CommandItem
                    key={option.value}
                    onSelect={() => {
                      
                      //add option to selected
                      const updatedSelected = selected || [];
                      const isOptionSelected = updatedSelected.some(
                        (item) => item.value === option.value
                      );

                      // Toggle selection status
                      const updatedSelection = isOptionSelected
                        ? updatedSelected.filter(
                            (item) => item.value !== option.value
                          ) // Unselect
                        : [...updatedSelected, option]; // Select
                      const isWithinLimit = updatedSelection.length <= selectLimit;
                      if (isWithinLimit) {
                        onChange(updatedSelection);
                      }
                      setOpen(true);
                    }}
                    className="w-full"
                    
                  >
                    <div
                      className={cn(
                        "mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary",
                        isSelected
                          ? "bg-primary text-primary-foreground"
                          : "opacity-50 [&_svg]:invisible"
                      )}
                    >
                      <CheckIcon className={cn("h-4 w-4")} />
                    </div>
                    <span>{option.label}</span>
                  </CommandItem>
                );
              })}
            </CommandGroup>
            {selected && selected?.length > 0 && (
              <>
                <CommandSeparator />
                <CommandGroup className="w-full">
                  <CommandItem
                    onSelect={() => selected.length > 0 && onChange([])}
                    className="justify-center text-center"
                  >
                    Clear filters
                  </CommandItem>
                </CommandGroup>
              </>
            )}
          </CommandList>
        </Command>
       </div>
      </PopoverContent>
    </Popover>
  );
}

export { MultiSelect };
