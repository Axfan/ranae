import { useState, useEffect } from "react";
import { Button } from "../Button";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { motion, AnimatePresence, useAnimationControls } from "framer-motion";
import { cn } from "@/lib/utils";

type DrilldownItem = {
  icon?: JSX.Element;
  label: string;
  value?: any;
  children?: DrilldownItem[];
};

const itemsToMap = (items: DrilldownItem[], label: string = "main") => {
  let mappedItems = new Map();

  mappedItems.set(label, items);

  for (const item of items) {
    if (item.children && item.children.length > 0) {
      mappedItems = new Map([
        ...mappedItems,
        ...itemsToMap(item.children, item.label),
      ]);
    }
  }

  return mappedItems;
};

export const Drilldown = ({
  items,
  label = "",
  onSelect = () => {},
  className = "",
}: {
  items: DrilldownItem[];
  label?: string;
  onSelect: (value: string) => void;
  className?: string;
}) => {
  const [activeMenu, setActiveMenu] = useState("main");
  const [history, setHistory] = useState(["main"]);
  const [selectedValue, setSelectedValue] = useState<string>();
  const [lastBacked, setLastBacked] = useState(false);
  const [firstRender, setFirstRender] = useState(true);

  useEffect(() => {
    setFirstRender(false);
  }, []);

  useEffect(() => {
    onSelect(selectedValue!);
  }, [selectedValue]);

  const flatItems = itemsToMap(items);

  const currentMenu = flatItems.get(activeMenu);

  const drill = (current: string, next: string) => {
    setLastBacked(false);
    setSelectedValue(undefined);
    setHistory([...history, current]);
    setActiveMenu(next);
  };

  const back = async () => {
    setLastBacked(true);
    setSelectedValue(undefined);
    const historyClone = [...history];
    const lastHistory = historyClone.pop() as string;
    setHistory(historyClone);
    setActiveMenu(lastHistory);
  };

  const MenuItem = ({
    icon = <></>,
    label,
    value,
    children,
  }: DrilldownItem) => {
    const hasChildren = children !== undefined && children.length > 0;
    const isActive = value == selectedValue && selectedValue !== undefined;

    const action = hasChildren
      ? () => drill(activeMenu, label)
      : () => setSelectedValue(value);

    return (
      <div
        className={`rn-flex rn-py-3 rn-px-4 hover:rn-text-primary rn-cursor-pointer rn-shadow-sm rn-rounded rn-mt-2 rn-border-primary ${
          isActive ? "!rn-text-accent rn-bg-primary" : ""
        }`}
        onClick={action}
      >
        <div className="rn-w-5">{icon}</div>
        <p className="rn-pl-5 rn-flex-grow">{label}</p>
        {hasChildren && <ChevronRightIcon className="rn-w-6" />}
      </div>
    );
  };

  const header = activeMenu !== "main" ? activeMenu : label;

  return (
    <div className={cn(className, "rn-min-w-80 rn-overflow-hidden")}>
      <AnimatePresence mode="wait">
        <motion.div
          initial={firstRender ? "iniial" : lastBacked ? "left" : "right"}
          animate="animateState"
          exit={lastBacked ? "right" : "left"}
          key={activeMenu + lastBacked}
          transition={{
            type: "linear",
            duration: 0.4,
          }}
          variants={{
            initial: {
              x: 0,
            },
            left: {
              x: "100vw",
            },
            animateState: {
              x: 0,
            },
            right: {
              x: "-100vw",
            },
          }}
        >
          <h3 className="rn-text-center rn-text-lg rn-mb-2 rn-text-primary">
            {header}
          </h3>
          {activeMenu !== "main" ? (
            <>
              <div
                className="rn-flex rn-py-3 rn-px-4 rn-w-full hover:rn-bg-gray-200 rn-cursor-pointer rn-shadow-sm"
                onClick={() => back()}
              >
                <ChevronLeftIcon />
                <p className="rn-pl-5 rn-w-full">Back</p>
              </div>
            </>
          ) : undefined}
          {currentMenu.map((menuItem: DrilldownItem) => (
            <MenuItem {...menuItem} />
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
